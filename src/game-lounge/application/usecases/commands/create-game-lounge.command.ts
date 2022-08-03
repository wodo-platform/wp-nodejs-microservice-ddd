import {
    Command,
    CommandProps,
} from '@libs/ddd/domain/base-classes/command.base';

export class CreateGameLoungeCommand extends Command {

    constructor(props: CommandProps<CreateGameLoungeCommand>) {
        super(props);
        this.type = props.type;
        this.state= props.state;
        this.gameTypeId= props.gameTypeId;
        this.assetId= props.assetId;
        this.enterenceFee= props.enterenceFee;
        this.prize= props.prize;
        this.duration= props.duration;
    }

    readonly type: number;
    readonly state: number;
    readonly gameTypeId: number;
    readonly assetId: number;
    readonly enterenceFee: number;
    readonly prize: number;
    readonly duration: number;
}
