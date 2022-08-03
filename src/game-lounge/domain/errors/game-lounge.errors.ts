import { ExceptionBase } from '@libs/exceptions';

export class GameLoungeAlreadyExistsError extends ExceptionBase {
  static readonly message: 'Game Lounge already exists';

  public readonly code = 'GAME_LOUNGE.ALREADY_EXISTS';

  constructor(metadata?: unknown) {
    super(GameLoungeAlreadyExistsError.message, metadata);
  }
}
