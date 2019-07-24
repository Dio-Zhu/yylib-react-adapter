'use strict';

var _zzjGenadapter = require('zzj-genadapter');

window.EnvConfig = window.EnvConfig || {}; /**
                                            * 统一对外部的依赖入口（所有第三方依赖）
                                            */

var SUPPORT_SERVER = window.EnvConfig.SUPPORT_SERVER_URL;

module.exports = {
    UiDefines: _zzjGenadapter.UiDefines,
    ViewAdapter: _zzjGenadapter.ViewAdapter,
    PropAdapter: _zzjGenadapter.PropAdapter,
    EventAdapter: _zzjGenadapter.EventAdapter,
    MetaType: _zzjGenadapter.MetaType,
    LogicUtils: _zzjGenadapter.LogicUtils,
    SUPPORT_SERVER: SUPPORT_SERVER
};