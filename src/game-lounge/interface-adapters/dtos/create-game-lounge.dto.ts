export class CreateGameLoungeDto {

    constructor(type: number, state: number, gameTypeId: number, assetId: number, enterenceFee: number, prize: number, duration: number){
        this.type = type;
        this.state= state;
        this.gameTypeId = gameTypeId;
        this.assetId= assetId;
        this.enterenceFee= enterenceFee;
        this.prize= prize;
        this.duration= duration;
    }

    type: number;
    state: number;
    gameTypeId: number;
    assetId: number;
    enterenceFee: number;
    prize: number;
    duration: number;
}
