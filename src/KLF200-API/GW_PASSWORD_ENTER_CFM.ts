'use strict';

import { GW_FRAME_CFM, GW_COMMON_STATUS } from "./common";

export class GW_PASSWORD_ENTER_CFM extends GW_FRAME_CFM {
    public readonly Status: GW_COMMON_STATUS;

    constructor(Data: Buffer) {
        super(Data);

        const status = this.Data.readUInt8(0);
        this.Status = <GW_COMMON_STATUS>status;
    }
}
