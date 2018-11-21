/// <reference types="node" />
export declare const KLF200_PORT = 51200;
export declare enum GatewayCommand {
    GW_ERROR_NTF = 0,
    GW_REBOOT_REQ = 1,
    GW_REBOOT_CFM = 2,
    GW_SET_FACTORY_DEFAULT_REQ = 3,
    GW_SET_FACTORY_DEFAULT_CFM = 4,
    GW_GET_VERSION_REQ = 8,
    GW_GET_VERSION_CFM = 9,
    GW_GET_PROTOCOL_VERSION_REQ = 10,
    GW_GET_PROTOCOL_VERSION_CFM = 11,
    GW_GET_STATE_REQ = 12,
    GW_GET_STATE_CFM = 13,
    GW_LEAVE_LEARN_STATE_REQ = 14,
    GW_LEAVE_LEARN_STATE_CFM = 15,
    GW_GET_NETWORK_SETUP_REQ = 224,
    GW_GET_NETWORK_SETUP_CFM = 225,
    GW_SET_NETWORK_SETUP_REQ = 226,
    GW_SET_NETWORK_SETUP_CFM = 227,
    GW_CS_GET_SYSTEMTABLE_DATA_REQ = 256,
    GW_CS_GET_SYSTEMTABLE_DATA_CFM = 257,
    GW_CS_GET_SYSTEMTABLE_DATA_NTF = 258,
    GW_CS_DISCOVER_NODES_REQ = 259,
    GW_CS_DISCOVER_NODES_CFM = 260,
    GW_CS_DISCOVER_NODES_NTF = 261,
    GW_CS_REMOVE_NODES_REQ = 262,
    GW_CS_REMOVE_NODES_CFM = 263,
    GW_CS_VIRGIN_STATE_REQ = 264,
    GW_CS_VIRGIN_STATE_CFM = 265,
    GW_CS_CONTROLLER_COPY_REQ = 266,
    GW_CS_CONTROLLER_COPY_CFM = 267,
    GW_CS_CONTROLLER_COPY_NTF = 268,
    GW_CS_CONTROLLER_COPY_CANCEL_NTF = 269,
    GW_CS_RECEIVE_KEY_REQ = 270,
    GW_CS_RECEIVE_KEY_CFM = 271,
    GW_CS_RECEIVE_KEY_NTF = 272,
    GW_CS_PGC_JOB_NTF = 273,
    GW_CS_SYSTEM_TABLE_UPDATE_NTF = 274,
    GW_CS_GENERATE_NEW_KEY_REQ = 275,
    GW_CS_GENERATE_NEW_KEY_CFM = 276,
    GW_CS_GENERATE_NEW_KEY_NTF = 277,
    GW_CS_REPAIR_KEY_REQ = 278,
    GW_CS_REPAIR_KEY_CFM = 279,
    GW_CS_REPAIR_KEY_NTF = 280,
    GW_CS_ACTIVATE_CONFIGURATION_MODE_REQ = 281,
    GW_CS_ACTIVATE_CONFIGURATION_MODE_CFM = 282,
    GW_GET_NODE_INFORMATION_REQ = 512,
    GW_GET_NODE_INFORMATION_CFM = 513,
    GW_GET_NODE_INFORMATION_NTF = 528,
    GW_GET_ALL_NODES_INFORMATION_REQ = 514,
    GW_GET_ALL_NODES_INFORMATION_CFM = 515,
    GW_GET_ALL_NODES_INFORMATION_NTF = 516,
    GW_GET_ALL_NODES_INFORMATION_FINISHED_NTF = 517,
    GW_SET_NODE_VARIATION_REQ = 518,
    GW_SET_NODE_VARIATION_CFM = 519,
    GW_SET_NODE_NAME_REQ = 520,
    GW_SET_NODE_NAME_CFM = 521,
    GW_SET_NODE_VELOCITY_REQ = 522,
    GW_SET_NODE_VELOCITY_CFM = 523,
    GW_NODE_INFORMATION_CHANGED_NTF = 524,
    GW_NODE_STATE_POSITION_CHANGED_NTF = 529,
    GW_SET_NODE_ORDER_AND_PLACEMENT_REQ = 525,
    GW_SET_NODE_ORDER_AND_PLACEMENT_CFM = 526,
    GW_GET_GROUP_INFORMATION_REQ = 544,
    GW_GET_GROUP_INFORMATION_CFM = 545,
    GW_GET_GROUP_INFORMATION_NTF = 560,
    GW_SET_GROUP_INFORMATION_REQ = 546,
    GW_SET_GROUP_INFORMATION_CFM = 547,
    GW_GROUP_INFORMATION_CHANGED_NTF = 548,
    GW_DELETE_GROUP_REQ = 549,
    GW_DELETE_GROUP_CFM = 550,
    GW_NEW_GROUP_REQ = 551,
    GW_NEW_GROUP_CFM = 552,
    GW_GET_ALL_GROUPS_INFORMATION_REQ = 553,
    GW_GET_ALL_GROUPS_INFORMATION_CFM = 554,
    GW_GET_ALL_GROUPS_INFORMATION_NTF = 555,
    GW_GET_ALL_GROUPS_INFORMATION_FINISHED_NTF = 556,
    GW_GROUP_DELETED_NTF = 557,
    GW_HOUSE_STATUS_MONITOR_ENABLE_REQ = 576,
    GW_HOUSE_STATUS_MONITOR_ENABLE_CFM = 577,
    GW_HOUSE_STATUS_MONITOR_DISABLE_REQ = 578,
    GW_HOUSE_STATUS_MONITOR_DISABLE_CFM = 579,
    GW_COMMAND_SEND_REQ = 768,
    GW_COMMAND_SEND_CFM = 769,
    GW_COMMAND_RUN_STATUS_NTF = 770,
    GW_COMMAND_REMAINING_TIME_NTF = 771,
    GW_SESSION_FINISHED_NTF = 772,
    GW_STATUS_REQUEST_REQ = 773,
    GW_STATUS_REQUEST_CFM = 774,
    GW_STATUS_REQUEST_NTF = 775,
    GW_WINK_SEND_REQ = 776,
    GW_WINK_SEND_CFM = 777,
    GW_WINK_SEND_NTF = 778,
    GW_SET_LIMITATION_REQ = 784,
    GW_SET_LIMITATION_CFM = 785,
    GW_GET_LIMITATION_STATUS_REQ = 786,
    GW_GET_LIMITATION_STATUS_CFM = 787,
    GW_LIMITATION_STATUS_NTF = 788,
    GW_MODE_SEND_REQ = 800,
    GW_MODE_SEND_CFM = 801,
    GW_MODE_SEND_NTF = 802,
    GW_INITIALIZE_SCENE_REQ = 1024,
    GW_INITIALIZE_SCENE_CFM = 1025,
    GW_INITIALIZE_SCENE_NTF = 1026,
    GW_INITIALIZE_SCENE_CANCEL_REQ = 1027,
    GW_INITIALIZE_SCENE_CANCEL_CFM = 1028,
    GW_RECORD_SCENE_REQ = 1029,
    GW_RECORD_SCENE_CFM = 1030,
    GW_RECORD_SCENE_NTF = 1031,
    GW_DELETE_SCENE_REQ = 1032,
    GW_DELETE_SCENE_CFM = 1033,
    GW_RENAME_SCENE_REQ = 1034,
    GW_RENAME_SCENE_CFM = 1035,
    GW_GET_SCENE_LIST_REQ = 1036,
    GW_GET_SCENE_LIST_CFM = 1037,
    GW_GET_SCENE_LIST_NTF = 1038,
    GW_GET_SCENE_INFORMATION_REQ = 1039,
    GW_GET_SCENE_INFORMATION_CFM = 1040,
    GW_GET_SCENE_INFORMATION_NTF = 1041,
    GW_ACTIVATE_SCENE_REQ = 1042,
    GW_ACTIVATE_SCENE_CFM = 1043,
    GW_STOP_SCENE_REQ = 1045,
    GW_STOP_SCENE_CFM = 1046,
    GW_SCENE_INFORMATION_CHANGED_NTF = 1049,
    GW_ACTIVATE_PRODUCTGROUP_REQ = 1095,
    GW_ACTIVATE_PRODUCTGROUP_CFM = 1096,
    GW_ACTIVATE_PRODUCTGROUP_NTF = 1097,
    GW_GET_CONTACT_INPUT_LINK_LIST_REQ = 1120,
    GW_GET_CONTACT_INPUT_LINK_LIST_CFM = 1121,
    GW_SET_CONTACT_INPUT_LINK_REQ = 1122,
    GW_SET_CONTACT_INPUT_LINK_CFM = 1123,
    GW_REMOVE_CONTACT_INPUT_LINK_REQ = 1124,
    GW_REMOVE_CONTACT_INPUT_LINK_CFM = 1125,
    GW_GET_ACTIVATION_LOG_HEADER_REQ = 1280,
    GW_GET_ACTIVATION_LOG_HEADER_CFM = 1281,
    GW_CLEAR_ACTIVATION_LOG_REQ = 1282,
    GW_CLEAR_ACTIVATION_LOG_CFM = 1283,
    GW_GET_ACTIVATION_LOG_LINE_REQ = 1284,
    GW_GET_ACTIVATION_LOG_LINE_CFM = 1285,
    GW_ACTIVATION_LOG_UPDATED_NTF = 1286,
    GW_GET_MULTIPLE_ACTIVATION_LOG_LINES_REQ = 1287,
    GW_GET_MULTIPLE_ACTIVATION_LOG_LINES_NTF = 1288,
    GW_GET_MULTIPLE_ACTIVATION_LOG_LINES_CFM = 1289,
    GW_SET_UTC_REQ = 8192,
    GW_SET_UTC_CFM = 8193,
    GW_RTC_SET_TIME_ZONE_REQ = 8194,
    GW_RTC_SET_TIME_ZONE_CFM = 8195,
    GW_GET_LOCAL_TIME_REQ = 8196,
    GW_GET_LOCAL_TIME_CFM = 8197,
    GW_PASSWORD_ENTER_REQ = 12288,
    GW_PASSWORD_ENTER_CFM = 12289,
    GW_PASSWORD_CHANGE_REQ = 12290,
    GW_PASSWORD_CHANGE_CFM = 12291,
    GW_PASSWORD_CHANGE_NTF = 12292
}
export declare type GatewayCommand_Request = GatewayCommand.GW_REBOOT_REQ | GatewayCommand.GW_SET_FACTORY_DEFAULT_REQ | GatewayCommand.GW_GET_VERSION_REQ | GatewayCommand.GW_GET_PROTOCOL_VERSION_REQ | GatewayCommand.GW_GET_STATE_REQ | GatewayCommand.GW_LEAVE_LEARN_STATE_REQ | GatewayCommand.GW_GET_NETWORK_SETUP_REQ | GatewayCommand.GW_SET_NETWORK_SETUP_REQ | GatewayCommand.GW_CS_GET_SYSTEMTABLE_DATA_REQ | GatewayCommand.GW_CS_DISCOVER_NODES_REQ | GatewayCommand.GW_CS_REMOVE_NODES_REQ | GatewayCommand.GW_CS_VIRGIN_STATE_REQ | GatewayCommand.GW_CS_CONTROLLER_COPY_REQ | GatewayCommand.GW_CS_RECEIVE_KEY_REQ | GatewayCommand.GW_CS_GENERATE_NEW_KEY_REQ | GatewayCommand.GW_CS_REPAIR_KEY_REQ | GatewayCommand.GW_CS_ACTIVATE_CONFIGURATION_MODE_REQ | GatewayCommand.GW_GET_NODE_INFORMATION_REQ | GatewayCommand.GW_GET_ALL_NODES_INFORMATION_REQ | GatewayCommand.GW_SET_NODE_VARIATION_REQ | GatewayCommand.GW_SET_NODE_NAME_REQ | GatewayCommand.GW_SET_NODE_VELOCITY_REQ | GatewayCommand.GW_SET_NODE_ORDER_AND_PLACEMENT_REQ | GatewayCommand.GW_GET_GROUP_INFORMATION_REQ | GatewayCommand.GW_SET_GROUP_INFORMATION_REQ | GatewayCommand.GW_DELETE_GROUP_REQ | GatewayCommand.GW_NEW_GROUP_REQ | GatewayCommand.GW_GET_ALL_GROUPS_INFORMATION_REQ | GatewayCommand.GW_HOUSE_STATUS_MONITOR_ENABLE_REQ | GatewayCommand.GW_HOUSE_STATUS_MONITOR_DISABLE_REQ | GatewayCommand.GW_COMMAND_SEND_REQ | GatewayCommand.GW_STATUS_REQUEST_REQ | GatewayCommand.GW_WINK_SEND_REQ | GatewayCommand.GW_SET_LIMITATION_REQ | GatewayCommand.GW_GET_LIMITATION_STATUS_REQ | GatewayCommand.GW_MODE_SEND_REQ | GatewayCommand.GW_INITIALIZE_SCENE_REQ | GatewayCommand.GW_INITIALIZE_SCENE_CANCEL_REQ | GatewayCommand.GW_RECORD_SCENE_REQ | GatewayCommand.GW_DELETE_SCENE_REQ | GatewayCommand.GW_RENAME_SCENE_REQ | GatewayCommand.GW_GET_SCENE_LIST_REQ | GatewayCommand.GW_GET_SCENE_INFORMATION_REQ | GatewayCommand.GW_ACTIVATE_SCENE_REQ | GatewayCommand.GW_STOP_SCENE_REQ | GatewayCommand.GW_ACTIVATE_PRODUCTGROUP_REQ | GatewayCommand.GW_GET_CONTACT_INPUT_LINK_LIST_REQ | GatewayCommand.GW_SET_CONTACT_INPUT_LINK_REQ | GatewayCommand.GW_REMOVE_CONTACT_INPUT_LINK_REQ | GatewayCommand.GW_GET_ACTIVATION_LOG_HEADER_REQ | GatewayCommand.GW_CLEAR_ACTIVATION_LOG_REQ | GatewayCommand.GW_GET_ACTIVATION_LOG_LINE_REQ | GatewayCommand.GW_GET_MULTIPLE_ACTIVATION_LOG_LINES_REQ | GatewayCommand.GW_SET_UTC_REQ | GatewayCommand.GW_RTC_SET_TIME_ZONE_REQ | GatewayCommand.GW_GET_LOCAL_TIME_REQ | GatewayCommand.GW_PASSWORD_ENTER_REQ | GatewayCommand.GW_PASSWORD_CHANGE_REQ;
export declare type GatewayCommand_Confirmation = GatewayCommand.GW_REBOOT_CFM | GatewayCommand.GW_SET_FACTORY_DEFAULT_CFM | GatewayCommand.GW_GET_VERSION_CFM | GatewayCommand.GW_GET_PROTOCOL_VERSION_CFM | GatewayCommand.GW_GET_STATE_CFM | GatewayCommand.GW_LEAVE_LEARN_STATE_CFM | GatewayCommand.GW_GET_NETWORK_SETUP_CFM | GatewayCommand.GW_SET_NETWORK_SETUP_CFM | GatewayCommand.GW_CS_GET_SYSTEMTABLE_DATA_CFM | GatewayCommand.GW_CS_DISCOVER_NODES_CFM | GatewayCommand.GW_CS_REMOVE_NODES_CFM | GatewayCommand.GW_CS_VIRGIN_STATE_CFM | GatewayCommand.GW_CS_CONTROLLER_COPY_CFM | GatewayCommand.GW_CS_RECEIVE_KEY_CFM | GatewayCommand.GW_CS_GENERATE_NEW_KEY_CFM | GatewayCommand.GW_CS_REPAIR_KEY_CFM | GatewayCommand.GW_CS_ACTIVATE_CONFIGURATION_MODE_CFM | GatewayCommand.GW_GET_NODE_INFORMATION_CFM | GatewayCommand.GW_GET_ALL_NODES_INFORMATION_CFM | GatewayCommand.GW_SET_NODE_VARIATION_CFM | GatewayCommand.GW_SET_NODE_NAME_CFM | GatewayCommand.GW_SET_NODE_VELOCITY_CFM | GatewayCommand.GW_SET_NODE_ORDER_AND_PLACEMENT_CFM | GatewayCommand.GW_GET_GROUP_INFORMATION_CFM | GatewayCommand.GW_SET_GROUP_INFORMATION_CFM | GatewayCommand.GW_DELETE_GROUP_CFM | GatewayCommand.GW_NEW_GROUP_CFM | GatewayCommand.GW_GET_ALL_GROUPS_INFORMATION_CFM | GatewayCommand.GW_HOUSE_STATUS_MONITOR_ENABLE_CFM | GatewayCommand.GW_HOUSE_STATUS_MONITOR_DISABLE_CFM | GatewayCommand.GW_COMMAND_SEND_CFM | GatewayCommand.GW_STATUS_REQUEST_CFM | GatewayCommand.GW_WINK_SEND_CFM | GatewayCommand.GW_SET_LIMITATION_CFM | GatewayCommand.GW_GET_LIMITATION_STATUS_CFM | GatewayCommand.GW_MODE_SEND_CFM | GatewayCommand.GW_INITIALIZE_SCENE_CFM | GatewayCommand.GW_INITIALIZE_SCENE_CANCEL_CFM | GatewayCommand.GW_RECORD_SCENE_CFM | GatewayCommand.GW_DELETE_SCENE_CFM | GatewayCommand.GW_RENAME_SCENE_CFM | GatewayCommand.GW_GET_SCENE_LIST_CFM | GatewayCommand.GW_GET_SCENE_INFORMATION_CFM | GatewayCommand.GW_ACTIVATE_SCENE_CFM | GatewayCommand.GW_STOP_SCENE_CFM | GatewayCommand.GW_ACTIVATE_PRODUCTGROUP_CFM | GatewayCommand.GW_GET_CONTACT_INPUT_LINK_LIST_CFM | GatewayCommand.GW_SET_CONTACT_INPUT_LINK_CFM | GatewayCommand.GW_REMOVE_CONTACT_INPUT_LINK_CFM | GatewayCommand.GW_GET_ACTIVATION_LOG_HEADER_CFM | GatewayCommand.GW_CLEAR_ACTIVATION_LOG_CFM | GatewayCommand.GW_GET_ACTIVATION_LOG_LINE_CFM | GatewayCommand.GW_GET_MULTIPLE_ACTIVATION_LOG_LINES_CFM | GatewayCommand.GW_SET_UTC_CFM | GatewayCommand.GW_RTC_SET_TIME_ZONE_CFM | GatewayCommand.GW_GET_LOCAL_TIME_CFM | GatewayCommand.GW_PASSWORD_ENTER_CFM | GatewayCommand.GW_PASSWORD_CHANGE_CFM;
export declare type GatewayCommand_Notification = GatewayCommand.GW_ERROR_NTF | GatewayCommand.GW_CS_GET_SYSTEMTABLE_DATA_NTF | GatewayCommand.GW_CS_DISCOVER_NODES_NTF | GatewayCommand.GW_CS_CONTROLLER_COPY_NTF | GatewayCommand.GW_CS_CONTROLLER_COPY_CANCEL_NTF | GatewayCommand.GW_CS_RECEIVE_KEY_NTF | GatewayCommand.GW_CS_PGC_JOB_NTF | GatewayCommand.GW_CS_SYSTEM_TABLE_UPDATE_NTF | GatewayCommand.GW_CS_GENERATE_NEW_KEY_NTF | GatewayCommand.GW_CS_REPAIR_KEY_NTF | GatewayCommand.GW_GET_NODE_INFORMATION_NTF | GatewayCommand.GW_GET_ALL_NODES_INFORMATION_NTF | GatewayCommand.GW_GET_ALL_NODES_INFORMATION_FINISHED_NTF | GatewayCommand.GW_NODE_INFORMATION_CHANGED_NTF | GatewayCommand.GW_NODE_STATE_POSITION_CHANGED_NTF | GatewayCommand.GW_GET_GROUP_INFORMATION_NTF | GatewayCommand.GW_GROUP_INFORMATION_CHANGED_NTF | GatewayCommand.GW_GET_ALL_GROUPS_INFORMATION_NTF | GatewayCommand.GW_GET_ALL_GROUPS_INFORMATION_FINISHED_NTF | GatewayCommand.GW_GROUP_DELETED_NTF | GatewayCommand.GW_COMMAND_RUN_STATUS_NTF | GatewayCommand.GW_COMMAND_REMAINING_TIME_NTF | GatewayCommand.GW_SESSION_FINISHED_NTF | GatewayCommand.GW_STATUS_REQUEST_NTF | GatewayCommand.GW_WINK_SEND_NTF | GatewayCommand.GW_LIMITATION_STATUS_NTF | GatewayCommand.GW_MODE_SEND_NTF | GatewayCommand.GW_INITIALIZE_SCENE_NTF | GatewayCommand.GW_RECORD_SCENE_NTF | GatewayCommand.GW_GET_SCENE_LIST_NTF | GatewayCommand.GW_GET_SCENE_INFORMATION_NTF | GatewayCommand.GW_SCENE_INFORMATION_CHANGED_NTF | GatewayCommand.GW_ACTIVATE_PRODUCTGROUP_NTF | GatewayCommand.GW_ACTIVATION_LOG_UPDATED_NTF | GatewayCommand.GW_GET_MULTIPLE_ACTIVATION_LOG_LINES_NTF | GatewayCommand.GW_PASSWORD_CHANGE_NTF;
export declare type GatewayCommand_Receive = GatewayCommand_Confirmation | GatewayCommand_Notification;
export declare enum GW_COMMON_STATUS {
    SUCCESS = 0,
    ERROR = 1,
    INVALID_NODE_ID = 2
}
export declare enum GW_INVERSE_STATUS {
    ERROR = 0,
    SUCCESS = 1
}
export declare const C_MAX_PWD_LENGTH = 32;
export interface IGW_FRAME {
    readonly Command: GatewayCommand;
}
export interface IGW_FRAME_REQ extends IGW_FRAME {
    readonly Data: Buffer;
}
export interface IGW_FRAME_RCV extends IGW_FRAME {
}
export interface IGW_FRAME_RCV_CTOR {
    new (Data: Buffer): IGW_FRAME_RCV;
}
export interface IGW_FRAME_CFM extends IGW_FRAME_RCV {
}
export interface IGW_FRAME_NTF extends IGW_FRAME_RCV {
}
export interface IGW_FRAME_COMMAND extends IGW_FRAME {
    readonly SessionID: number;
}
export declare abstract class GW_FRAME implements IGW_FRAME {
    readonly Command: GatewayCommand;
    protected readonly offset: number;
    protected constructor();
}
export declare abstract class GW_FRAME_REQ extends GW_FRAME implements IGW_FRAME_REQ {
    readonly BufferSize: number;
    /**
     * Creates an instance of GW_FRAME_REQ.
     *
     * @param {number} BufferSize The size of the buffer (only pure data, without protocol and command bytes)
     * @memberof GW_FRAME_REQ
     */
    constructor(BufferSize: number);
    /**
     * Allocates a buffer in the right size for the frame.
     * The first byte contains the buffer length.
     * The next two bytes of the buffer are used for the command.
     * The remaining bytes are for the data.
     *
     * A size of 0 means that the command has no further data.
     *
     * @protected
     * @abstract
     * @param {number} BufferSize Size for the buffer for the data part without length and command.
     * @param {boolean} CopyData Set to true to copy the data in case of reallocating the buffer. Default is true.
     * @memberof GW_FRAME
     */
    protected AllocBuffer(BufferSize: number, CopyData?: boolean): void;
    private data;
    readonly Data: Buffer;
}
export declare abstract class GW_FRAME_COMMAND_REQ extends GW_FRAME_REQ implements IGW_FRAME_COMMAND {
    readonly SessionID: number;
    constructor(BufferSize: number);
}
export declare abstract class GW_FRAME_RCV extends GW_FRAME implements IGW_FRAME_RCV {
    readonly Data: Buffer;
    constructor(Data: Buffer);
    private CheckCommand;
}
export declare abstract class GW_FRAME_CFM extends GW_FRAME_RCV implements IGW_FRAME_CFM {
}
export declare abstract class GW_FRAME_NTF extends GW_FRAME_RCV implements IGW_FRAME_NTF {
}
/**
 * Reads a zero-terminated string from the buffer.
 *
 * @export
 * @param {Buffer} data The buffer that contains the string data.
 * @returns {string} Returns the string data.
 */
export declare function readZString(data: Buffer): string;
export declare class KLF200Protocol {
    static readonly ProtocolID = 0;
    static Encode(data: Buffer): Buffer;
    static Decode(data: Buffer): Buffer;
}
export declare const SLIP_END = 192;
export declare class SLIPProtocol {
    static Encode(data: Buffer): Buffer;
    static Decode(data: Buffer): Buffer;
}
