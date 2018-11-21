import { GW_FRAME_COMMAND_REQ } from "./common";
import { CommandOriginator, PriorityLevel, ParameterActive, LimitationType } from "./GW_COMMAND";
export declare class GW_GET_LIMITATION_STATUS_REQ extends GW_FRAME_COMMAND_REQ {
    readonly Nodes: number[] | number;
    readonly LimitationType: LimitationType;
    readonly PriorityLevel: PriorityLevel;
    readonly CommandOriginator: CommandOriginator;
    readonly ParameterActive: ParameterActive;
    constructor(Nodes: number[] | number, LimitationType: LimitationType, PriorityLevel?: PriorityLevel, CommandOriginator?: CommandOriginator, ParameterActive?: ParameterActive);
}
