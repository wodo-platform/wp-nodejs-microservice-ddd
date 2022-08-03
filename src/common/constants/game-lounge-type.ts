export class GameLoungeType  {
    id: number;
    name: string;
    description:string;
}

export const GAME_LOUNGE_TYPE_ROUND_TIME_BASED: GameLoungeType = { id:1, name: "Round Time Base", description: "Rounds is over when the time is up. The one having mist scores wins " };
export const GAME_LOUNGE_TYPE_ROUND_LAST_MAN_STANDING: GameLoungeType = { id:2, name: "Last Man Standing", description: "The last man standing wins" };

export const findGameLoungeType = (type:number) => {
   
    switch (type) {
        case GAME_LOUNGE_TYPE_ROUND_TIME_BASED.id:
            return GAME_LOUNGE_TYPE_ROUND_TIME_BASED;    
        default:
            break;
    }
};
