export class CreateGameLoungeDto {

    constructor(id: number, type: number, state: number, gameTypeId: number, assetId: number, enterenceFee: number, prize: number, duration: number,
        deleted: boolean, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.type = type;
        this.state = state;
        this.gameTypeId = gameTypeId;
        this.assetId = assetId;
        this.enterenceFee = enterenceFee;
        this.prize = prize;
        this.duration = duration;
        this.deleted = deleted;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    id: number;
    type: number;
    state: number;
    gameTypeId: number;
    assetId: number;
    enterenceFee: number;
    prize: number;
    duration: number;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
