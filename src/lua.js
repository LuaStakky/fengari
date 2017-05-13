/*jshint esversion: 6 */
"use strict";

const defs   = require("./defs.js");
const lapi   = require("./lapi.js");
const ldebug = require("./ldebug.js");
const ldo    = require("./ldo.js");
const lstate = require("./lstate.js");

module.exports.FENGARI_AUTHORS         = defs.FENGARI_AUTHORS;
module.exports.FENGARI_COPYRIGHT       = defs.FENGARI_COPYRIGHT;
module.exports.FENGARI_RELEASE         = defs.FENGARI_RELEASE;
module.exports.FENGARI_VERSION         = defs.FENGARI_VERSION;
module.exports.FENGARI_VERSION_MAJOR   = defs.FENGARI_VERSION_MAJOR;
module.exports.FENGARI_VERSION_MINOR   = defs.FENGARI_VERSION_MINOR;
module.exports.FENGARI_VERSION_NUM     = defs.FENGARI_VERSION_NUM;
module.exports.FENGARI_VERSION_RELEASE = defs.FENGARI_VERSION_RELEASE;
module.exports.LUA_AUTHORS             = defs.LUA_AUTHORS;
module.exports.LUA_COPYRIGHT           = defs.LUA_COPYRIGHT;
module.exports.LUA_ERRERR              = defs.thread_status.LUA_ERRERR;
module.exports.LUA_ERRGCMM             = defs.thread_status.LUA_ERRGCMM;
module.exports.LUA_ERRMEM              = defs.thread_status.LUA_ERRMEM;
module.exports.LUA_ERRRUN              = defs.thread_status.LUA_ERRRUN;
module.exports.LUA_ERRSYNTAX           = defs.thread_status.LUA_ERRSYNTAX;
module.exports.LUA_HOOKCALL            = defs.LUA_HOOKCALL;
module.exports.LUA_HOOKCOUNT           = defs.LUA_HOOKCOUNT;
module.exports.LUA_HOOKLINE            = defs.LUA_HOOKLINE;
module.exports.LUA_HOOKRET             = defs.LUA_HOOKRET;
module.exports.LUA_HOOKTAILCALL        = defs.LUA_HOOKTAILCALL;
module.exports.LUA_INITVARVERSION      = defs.LUA_INITVARVERSION;
module.exports.LUA_INIT_VAR            = defs.LUA_INIT_VAR;
module.exports.LUA_MASKCALL            = defs.LUA_MASKCALL;
module.exports.LUA_MASKCOUNT           = defs.LUA_MASKCOUNT;
module.exports.LUA_MASKLINE            = defs.LUA_MASKLINE;
module.exports.LUA_MASKRET             = defs.LUA_MASKRET;
module.exports.LUA_MINSTACK            = defs.LUA_MINSTACK;
module.exports.LUA_MULTRET             = defs.LUA_MULTRET;
module.exports.LUA_NUMTAGS             = defs.LUA_NUMTAGS;
module.exports.LUA_OK                  = defs.thread_status.LUA_OK;
module.exports.LUA_OPADD               = defs.LUA_OPADD;
module.exports.LUA_OPBAND              = defs.LUA_OPBAND;
module.exports.LUA_OPBNOT              = defs.LUA_OPBNOT;
module.exports.LUA_OPBOR               = defs.LUA_OPBOR;
module.exports.LUA_OPBXOR              = defs.LUA_OPBXOR;
module.exports.LUA_OPDIV               = defs.LUA_OPDIV;
module.exports.LUA_OPEQ                = defs.LUA_OPEQ;
module.exports.LUA_OPIDIV              = defs.LUA_OPIDIV;
module.exports.LUA_OPLE                = defs.LUA_OPLE;
module.exports.LUA_OPLT                = defs.LUA_OPLT;
module.exports.LUA_OPMOD               = defs.LUA_OPMOD;
module.exports.LUA_OPMUL               = defs.LUA_OPMUL;
module.exports.LUA_OPPOW               = defs.LUA_OPPOW;
module.exports.LUA_OPSHL               = defs.LUA_OPSHL;
module.exports.LUA_OPSHR               = defs.LUA_OPSHR;
module.exports.LUA_OPSUB               = defs.LUA_OPSUB;
module.exports.LUA_OPUNM               = defs.LUA_OPUNM;
module.exports.LUA_REGISTRYINDEX       = defs.LUA_REGISTRYINDEX;
module.exports.LUA_RELEASE             = defs.LUA_RELEASE;
module.exports.LUA_RIDX_GLOBALS        = defs.LUA_RIDX_GLOBALS;
module.exports.LUA_RIDX_LAST           = defs.LUA_RIDX_LAST;
module.exports.LUA_RIDX_MAINTHREAD     = defs.LUA_RIDX_MAINTHREAD;
module.exports.LUA_SIGNATURE           = defs.LUA_SIGNATURE;
module.exports.LUA_TNONE               = defs.CT.LUA_TNONE;
module.exports.LUA_TNIL                = defs.CT.LUA_TNIL;
module.exports.LUA_TBOOLEAN            = defs.CT.LUA_TBOOLEAN;
module.exports.LUA_TLIGHTUSERDATA      = defs.CT.LUA_TLIGHTUSERDATA;
module.exports.LUA_TNUMBER             = defs.CT.LUA_TNUMBER;
module.exports.LUA_TSTRING             = defs.CT.LUA_TSTRING;
module.exports.LUA_TTABLE              = defs.CT.LUA_TTABLE;
module.exports.LUA_TFUNCTION           = defs.CT.LUA_TFUNCTION;
module.exports.LUA_TUSERDATA           = defs.CT.LUA_TUSERDATA;
module.exports.LUA_TTHREAD             = defs.CT.LUA_TTHREAD;
module.exports.LUA_VERSION             = defs.LUA_VERSION;
module.exports.LUA_VERSION_MAJOR       = defs.LUA_VERSION_MAJOR;
module.exports.LUA_VERSION_MINOR       = defs.LUA_VERSION_MINOR;
module.exports.LUA_VERSION_NUM         = defs.LUA_VERSION_NUM;
module.exports.LUA_VERSION_RELEASE     = defs.LUA_VERSION_RELEASE;
module.exports.LUA_VERSUFFIX           = defs.LUA_VERSUFFIX;
module.exports.LUA_YIELD               = defs.thread_status.LUA_YIELD;
module.exports.lua_Debug               = defs.lua_Debug;
module.exports.lua_upvalueindex        = defs.lua_upvalueindex;
module.exports.to_jsstring             = defs.to_jsstring;
module.exports.to_luastring            = defs.to_luastring;
module.exports.LUA_CDIR                = defs.LUA_CDIR;
module.exports.LUA_CPATH_DEFAULT       = defs.LUA_CPATH_DEFAULT;
module.exports.LUA_EXEC_DIR            = defs.LUA_EXEC_DIR;
module.exports.LUA_LDIR                = defs.LUA_LDIR;
module.exports.LUA_PATH_DEFAULT        = defs.LUA_PATH_DEFAULT;
module.exports.LUA_PATH_MARK           = defs.LUA_PATH_MARK;
module.exports.LUA_PATH_SEP            = defs.LUA_PATH_SEP;
module.exports.LUA_ROOT                = defs.LUA_ROOT;
module.exports.LUA_SHRDIR              = defs.LUA_SHRDIR;
module.exports.LUA_VDIR                = defs.LUA_VDIR;
module.exports.LUA_DIRSEP              = defs.LUA_DIRSEP;
module.exports.lua_absindex            = lapi.lua_absindex;
module.exports.lua_arith               = lapi.lua_arith;
module.exports.lua_atpanic             = lapi.lua_atpanic;
module.exports.lua_call                = lapi.lua_call;
module.exports.lua_callk               = lapi.lua_callk;
module.exports.lua_checkstack          = lapi.lua_checkstack;
module.exports.lua_close               = lstate.lua_close;
module.exports.lua_compare             = lapi.lua_compare;
module.exports.lua_concat              = lapi.lua_concat;
module.exports.lua_copy                = lapi.lua_copy;
module.exports.lua_createtable         = lapi.lua_createtable;
module.exports.lua_dump                = lapi.lua_dump;
module.exports.lua_error               = lapi.lua_error;
module.exports.lua_gc                  = lapi.lua_gc;
module.exports.lua_getallocf           = lapi.lua_getallocf;
module.exports.lua_getextraspace       = lapi.lua_getextraspace;
module.exports.lua_getfield            = lapi.lua_getfield;
module.exports.lua_getglobal           = lapi.lua_getglobal;
module.exports.lua_gethook             = ldebug.lua_gethook;
module.exports.lua_gethookcount        = ldebug.lua_gethookcount;
module.exports.lua_gethookmask         = ldebug.lua_gethookmask;
module.exports.lua_geti                = lapi.lua_geti;
module.exports.lua_getinfo             = ldebug.lua_getinfo;
module.exports.lua_getlocal            = ldebug.lua_getlocal;
module.exports.lua_getmetatable        = lapi.lua_getmetatable;
module.exports.lua_getstack            = ldebug.lua_getstack;
module.exports.lua_gettable            = lapi.lua_gettable;
module.exports.lua_gettop              = lapi.lua_gettop;
module.exports.lua_getupvalue          = lapi.lua_getupvalue;
module.exports.lua_getuservalue        = lapi.lua_getuservalue;
module.exports.lua_insert              = lapi.lua_insert;
module.exports.lua_isboolean           = lapi.lua_isboolean;
module.exports.lua_iscfunction         = lapi.lua_iscfunction;
module.exports.lua_isfunction          = lapi.lua_isfunction;
module.exports.lua_isinteger           = lapi.lua_isinteger;
module.exports.lua_islightuserdata     = lapi.lua_islightuserdata;
module.exports.lua_isnil               = lapi.lua_isnil;
module.exports.lua_isnone              = lapi.lua_isnone;
module.exports.lua_isnoneornil         = lapi.lua_isnoneornil;
module.exports.lua_isnumber            = lapi.lua_isnumber;
module.exports.lua_isproxy             = lapi.lua_isproxy;
module.exports.lua_isstring            = lapi.lua_isstring;
module.exports.lua_istable             = lapi.lua_istable;
module.exports.lua_isthread            = lapi.lua_isthread;
module.exports.lua_isuserdata          = lapi.lua_isuserdata;
module.exports.lua_isyieldable         = ldo.lua_isyieldable;
module.exports.lua_len                 = lapi.lua_len;
module.exports.lua_load                = lapi.lua_load;
module.exports.lua_newstate            = lstate.lua_newstate;
module.exports.lua_newtable            = lapi.lua_newtable;
module.exports.lua_newthread           = lstate.lua_newthread;
module.exports.lua_newuserdata         = lapi.lua_newuserdata;
module.exports.lua_next                = lapi.lua_next;
module.exports.lua_pcall               = lapi.lua_pcall;
module.exports.lua_pcallk              = lapi.lua_pcallk;
module.exports.lua_pop                 = lapi.lua_pop;
module.exports.lua_pushboolean         = lapi.lua_pushboolean;
module.exports.lua_pushcclosure        = lapi.lua_pushcclosure;
module.exports.lua_pushcfunction       = lapi.lua_pushcfunction;
module.exports.lua_pushfstring         = lapi.lua_pushfstring;
module.exports.lua_pushglobaltable     = lapi.lua_pushglobaltable;
module.exports.lua_pushinteger         = lapi.lua_pushinteger;
module.exports.lua_pushjsclosure       = lapi.lua_pushjsclosure;
module.exports.lua_pushjsfunction      = lapi.lua_pushjsfunction;
module.exports.lua_pushlightuserdata   = lapi.lua_pushlightuserdata;
module.exports.lua_pushliteral         = lapi.lua_pushliteral;
module.exports.lua_pushlstring         = lapi.lua_pushlstring;
module.exports.lua_pushnil             = lapi.lua_pushnil;
module.exports.lua_pushnumber          = lapi.lua_pushnumber;
module.exports.lua_pushstring          = lapi.lua_pushstring;
module.exports.lua_pushthread          = lapi.lua_pushthread;
module.exports.lua_pushvalue           = lapi.lua_pushvalue;
module.exports.lua_pushvfstring        = lapi.lua_pushvfstring;
module.exports.lua_rawequal            = lapi.lua_rawequal;
module.exports.lua_rawget              = lapi.lua_rawget;
module.exports.lua_rawgeti             = lapi.lua_rawgeti;
module.exports.lua_rawgetp             = lapi.lua_rawgetp;
module.exports.lua_rawlen              = lapi.lua_rawlen;
module.exports.lua_rawset              = lapi.lua_rawset;
module.exports.lua_rawseti             = lapi.lua_rawseti;
module.exports.lua_rawsetp             = lapi.lua_rawsetp;
module.exports.lua_register            = lapi.lua_register;
module.exports.lua_remove              = lapi.lua_remove;
module.exports.lua_replace             = lapi.lua_replace;
module.exports.lua_resume              = ldo.lua_resume;
module.exports.lua_rotate              = lapi.lua_rotate;
module.exports.lua_setallof            = ldo.lua_setallof;
module.exports.lua_setfield            = lapi.lua_setfield;
module.exports.lua_setglobal           = lapi.lua_setglobal;
module.exports.lua_sethook             = ldebug.lua_sethook;
module.exports.lua_seti                = lapi.lua_seti;
module.exports.lua_setlocal            = ldebug.lua_setlocal;
module.exports.lua_setmetatable        = lapi.lua_setmetatable;
module.exports.lua_settable            = lapi.lua_settable;
module.exports.lua_settop              = lapi.lua_settop;
module.exports.lua_setupvalue          = lapi.lua_setupvalue;
module.exports.lua_setuservalue        = lapi.lua_setuservalue;
module.exports.lua_status              = lapi.lua_status;
module.exports.lua_stringtonumber      = lapi.lua_stringtonumber;
module.exports.lua_toboolean           = lapi.lua_toboolean;
module.exports.lua_todataview          = lapi.lua_todataview;
module.exports.lua_tointeger           = lapi.lua_tointeger;
module.exports.lua_tointegerx          = lapi.lua_tointegerx;
module.exports.lua_tojsstring          = lapi.lua_tojsstring;
module.exports.lua_toljsstring         = lapi.lua_toljsstring;
module.exports.lua_tolstring           = lapi.lua_tolstring;
module.exports.lua_tonumber            = lapi.lua_tonumber;
module.exports.lua_topointer           = lapi.lua_topointer;
module.exports.lua_toproxy             = lapi.lua_toproxy;
module.exports.lua_tostring            = lapi.lua_tostring;
module.exports.lua_tothread            = lapi.lua_tothread;
module.exports.lua_touserdata          = lapi.lua_touserdata;
module.exports.lua_type                = lapi.lua_type;
module.exports.lua_typename            = lapi.lua_typename;
module.exports.lua_upvalueid           = lapi.lua_upvalueid;
module.exports.lua_upvaluejoin         = lapi.lua_upvaluejoin;
module.exports.lua_version             = lapi.lua_version;
module.exports.lua_xmove               = lapi.lua_xmove;
module.exports.lua_yield               = ldo.lua_yield;
module.exports.lua_yieldk              = ldo.lua_yieldk;
module.exports.lua_tocfunctoin         = ldo.lua_tocfunctoin;
