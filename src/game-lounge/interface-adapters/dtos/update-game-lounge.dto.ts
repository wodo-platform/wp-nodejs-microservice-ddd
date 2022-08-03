import { PartialType } from '@nestjs/mapped-types';
import { CreateGameLoungeDto } from './create-game-lounge.dto';

export class UpdateGameLoungeDto extends PartialType(CreateGameLoungeDto) {}
