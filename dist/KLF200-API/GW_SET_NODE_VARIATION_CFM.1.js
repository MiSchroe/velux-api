'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
class GW_SET_NODE_VARIATION_CFM extends common_1.GW_FRAME_CFM {
    constructor(Data) {
        super(Data);
        this.Status = this.Data.readUInt8(0);
        this.NodeID = this.Data.readUInt8(1);
    }
}
exports.GW_SET_NODE_VARIATION_CFM = GW_SET_NODE_VARIATION_CFM;
//# sourceMappingURL=GW_SET_NODE_VARIATION_CFM.1.js.map