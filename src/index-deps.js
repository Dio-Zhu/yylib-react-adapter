/**
 * 统一对外部的依赖入口（所有第三方依赖）
 */
import {UiDefines,ViewAdapter,PropAdapter,EventAdapter,MetaType,LogicUtils} from 'zzj-genadapter';

window.EnvConfig = window.EnvConfig || {};
const SUPPORT_SERVER = window.EnvConfig.SUPPORT_SERVER_URL;

module.exports ={
    UiDefines,
    ViewAdapter,
    PropAdapter,
    EventAdapter,
    MetaType,
    LogicUtils,
    SUPPORT_SERVER
};