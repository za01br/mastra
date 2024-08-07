import { omitBy } from 'lodash-es';

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}

var CORE_PLUGIN_NAME = 'SYSTEM';
var IntegrationFramework = /*#__PURE__*/function () {
  function IntegrationFramework() {
    //global events grouped by plugin
    this.globalEvents = new Map();
    // global event handlers
    this.globalEventHandlers = [];
    // global actions grouped by plugin
    this.globalActions = new Map();
    this.plugins = new Map();
  }
  var _proto = IntegrationFramework.prototype;
  _proto.registerPlugin = function registerPlugin(pluginDefinition) {
    var _this$globalEventHand;
    var name = pluginDefinition.name;
    this.plugins.set(name, pluginDefinition);
    pluginDefinition.defineEvents();
    this.registerEvents({
      events: Object.values(pluginDefinition.getEvents()),
      pluginName: name
    });
    (_this$globalEventHand = this.globalEventHandlers).push.apply(_this$globalEventHand, pluginDefinition.getEventHandlers());
    this.registerActions({
      actions: Object.values(pluginDefinition.getActions()),
      pluginName: name
    });
  };
  _proto.registerEvents = function registerEvents(_ref) {
    var events = _ref.events,
      _ref$pluginName = _ref.pluginName,
      pluginName = _ref$pluginName === void 0 ? CORE_PLUGIN_NAME : _ref$pluginName;
    var pluginEvents = this.globalEvents.get(pluginName) || {};
    this.globalEvents.set(pluginName, _extends({}, pluginEvents, events.reduce(function (acc, event) {
      var _extends2;
      return _extends({}, acc, (_extends2 = {}, _extends2[event.key] = event, _extends2));
    }, {})));
  };
  _proto.registerActions = function registerActions(_ref2) {
    var actions = _ref2.actions,
      _ref2$pluginName = _ref2.pluginName,
      pluginName = _ref2$pluginName === void 0 ? CORE_PLUGIN_NAME : _ref2$pluginName;
    var pluginActions = this.globalActions.get(pluginName) || {};
    this.globalActions.set(pluginName, _extends({}, pluginActions, actions.reduce(function (acc, action) {
      var _extends3;
      return _extends({}, acc, (_extends3 = {}, _extends3[action.type] = action, _extends3));
    }, {})));
  };
  _proto.availablePlugins = function availablePlugins() {
    return Array.from(this.plugins.entries()).map(function (_ref3) {
      var name = _ref3[0],
        plugin = _ref3[1];
      return {
        name: name,
        plugin: plugin
      };
    });
  };
  _proto.getPlugin = function getPlugin(name) {
    return this.plugins.get(name);
  };
  _proto.getGlobalEvents = function getGlobalEvents() {
    return this.globalEvents;
  };
  _proto.getSystemEvents = function getSystemEvents() {
    var events = this.globalEvents.get(CORE_PLUGIN_NAME);
    return omitBy(events, function (value) {
      var _value$triggerPropert;
      return (_value$triggerPropert = value.triggerProperties) == null ? void 0 : _value$triggerPropert.isHidden;
    });
  };
  _proto.getEventsByPlugin = function getEventsByPlugin(name) {
    return this.globalEvents.get(name);
  };
  _proto.getGlobalEventHandlers = function getGlobalEventHandlers() {
    return this.globalEventHandlers;
  };
  _proto.getActions = function getActions() {
    return this.globalActions;
  };
  _proto.getSystemActions = function getSystemActions() {
    return this.globalActions.get(CORE_PLUGIN_NAME);
  };
  _proto.getActionsByPlugin = function getActionsByPlugin(name, includeHidden) {
    var pluginActions = this.globalActions.get(name);
    if (includeHidden) {
      return pluginActions;
    }
    return omitBy(pluginActions, function (value) {
      return value.isHidden;
    });
  };
  _proto.executeAction = /*#__PURE__*/function () {
    var _executeAction = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref4) {
      var _plugin$getActions;
      var _ref4$pluginName, pluginName, action, payload, _this$globalActions$g, _actionExecutor, plugin, actionExecutor;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _ref4$pluginName = _ref4.pluginName, pluginName = _ref4$pluginName === void 0 ? CORE_PLUGIN_NAME : _ref4$pluginName, action = _ref4.action, payload = _ref4.payload;
            if (!(pluginName === CORE_PLUGIN_NAME)) {
              _context.next = 6;
              break;
            }
            _actionExecutor = (_this$globalActions$g = this.globalActions.get(CORE_PLUGIN_NAME)) == null ? void 0 : _this$globalActions$g[action];
            if (_actionExecutor) {
              _context.next = 5;
              break;
            }
            throw new Error("No global action exists for " + action);
          case 5:
            return _context.abrupt("return", _actionExecutor.executor(payload));
          case 6:
            plugin = this.getPlugin(pluginName);
            if (plugin) {
              _context.next = 9;
              break;
            }
            throw new Error("No plugin exists for " + pluginName);
          case 9:
            actionExecutor = (_plugin$getActions = plugin.getActions()) == null ? void 0 : _plugin$getActions[action];
            if (actionExecutor) {
              _context.next = 12;
              break;
            }
            throw new Error("No action exists for " + action + " in " + pluginName);
          case 12:
            return _context.abrupt("return", actionExecutor.executor(payload));
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function executeAction(_x) {
      return _executeAction.apply(this, arguments);
    }
    return executeAction;
  }();
  return IntegrationFramework;
}();
function createFramework(config) {
  console.log('Hello from FRAMEWORK');
  console.log(JSON.stringify(config, null, 2));
  var framework = new IntegrationFramework();
  // Register plugins
  config.plugins.forEach(function (plugin) {
    framework.registerPlugin(plugin);
  });
  // Register System actions
  framework.registerActions({
    actions: config.SystemActions
  });
  // Register System events
  framework.registerEvents({
    events: config.SystemEvents
  });
  return framework;
}

export { createFramework };
//# sourceMappingURL=core.esm.js.map
