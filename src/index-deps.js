/**
 * 统一对外部的依赖入口（所有第三方依赖）
 */
import {UiLibrary,UiDefines,ViewAdapter,PropAdapter,EventAdapter,GlobalAdapter,MetaType} from 'ide-sdk-adapter';
var LogicUtils = require('./LogicUtils');
window.EnvConfig = window.EnvConfig || {};
const SUPPORT_SERVER = window.EnvConfig.SUPPORT_SERVER_URL;

module.exports ={
    UiLibrary,
    UiDefines,
    ViewAdapter,
    PropAdapter,
    EventAdapter,
    GlobalAdapter,
    MetaType,
    LogicUtils,
    SUPPORT_SERVER
};