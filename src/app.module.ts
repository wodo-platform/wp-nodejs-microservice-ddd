import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameLoungeModule } from './game-lounge/infrastructure/game-lounge.module';
import { RouterModule } from '@nestjs/core';
import { GameLoungeOrmEntity } from './game-lounge/infrastructure/database/game-lounge.orm-entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.register({
      isGlobal: true,
    }),
    EventEmitterModule.forRoot({
      // set this to `true` to use wildcards
      wildcard: true,
      // the delimiter used to segment namespaces
      delimiter: '.',
      // set this to `true` if you want to emit the newListener event
      newListener: true,
      // set this to `true` if you want to emit the removeListener event
      removeListener: true,
      // the maximum amount of listeners that can be assigned to an event
      maxListeners: 20,
      // show event name in memory leak message when more than maximum amount of listeners is assigned
      verboseMemoryLeak: true,
      // disable throwing uncaughtException if an error event is emitted and it has no listeners
      ignoreErrors: false,
    }),
    ScheduleModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: String(process.env.MYSQLDB_HOST).toString(),
      port: Number(process.env.MYSQLDB_LOCAL_PORT).valueOf(),
      username: String(process.env.MYSQLDB_WODO_USER).toString(),
      password: String(process.env.MYSQLDB_WODO_PASSWORD).toString(),
      database: String(process.env.MYSQLDB_WODO_DATABASE).toString(),
      models: [GameLoungeOrmEntity],
      pool: {
        max: parseInt(process.env.MYSQLDB_CONNECTION_POOL_MAX).valueOf(),
        min: parseInt(process.env.MYSQLDB_CONNECTION_POOL_MIN).valueOf(),
        acquire: parseInt(
          process.env.MYSQLDB_CONNECTION_POOL_ACQUIRE,
        ).valueOf(),
        idle: parseInt(process.env.MYSQLDB_CONNECTION_POOL_IDLE).valueOf(),
      },
    }),
    GameLoungeModule,
    RouterModule.register([
      {
        path: 'api',
        module: GameLoungeModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
