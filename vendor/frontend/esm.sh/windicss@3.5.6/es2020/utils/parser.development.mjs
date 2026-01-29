/* esm.sh - windicss@3.5.6/utils/parser */
// node_modules/windicss/utils/parser/index.mjs
var HTMLParser = (
  /** @class */
  (function() {
    function HTMLParser2(html) {
      this.html = html;
    }
    HTMLParser2.prototype.parseAttrs = function() {
      if (!this.html)
        return [];
      var output = [];
      var regex = /\S+\s*=\s*"[^"]+"|\S+\s*=\s*'[^']+'|\S+\s*=\s*[^>\s]+/igm;
      var match;
      while (match = regex.exec(this.html)) {
        if (match) {
          var raw = match[0];
          var sep = raw.indexOf("=");
          var key = raw.slice(0, sep).trim();
          var value = raw.slice(sep + 1).trim();
          if (['"', "'"].includes(value.charAt(0)))
            value = value.slice(1, -1);
          value = value.split(/\s/).filter(function(i) {
            return i;
          });
          value = value[0] === void 0 ? "" : value[1] === void 0 ? value[0] : value;
          output.push({
            raw,
            key,
            value,
            start: match.index,
            end: regex.lastIndex
          });
        }
      }
      return output;
    };
    HTMLParser2.prototype.parseClasses = function() {
      var _a, _b;
      if (!this.html)
        return [];
      var output = [];
      var regex = /class(Name)?\s*=\s*{`[^`]+`}|class(Name)?\s*=\s*"[^"]+"|class(Name)?\s*=\s*'[^']+'|class(Name)?\s*=\s*[^>\s]+/igm;
      var match;
      while (match = regex.exec(this.html)) {
        if (match) {
          var raw = match[0];
          var sep = raw.indexOf("=");
          var value = raw.slice(sep + 1).trim();
          var start = match.index + sep + 1 + ((_b = (_a = this.html.slice(sep + 1).match(/[^'"]/)) === null || _a === void 0 ? void 0 : _a.index) !== null && _b !== void 0 ? _b : 0);
          var end = regex.lastIndex;
          var first = value.charAt(0);
          while (['"', "'", "`", "{"].includes(first)) {
            value = value.slice(1, -1);
            first = value.charAt(0);
            end--;
            start++;
          }
          output.push({
            result: value,
            start,
            end
          });
        }
      }
      return output;
    };
    HTMLParser2.prototype.parseTags = function() {
      if (!this.html)
        return [];
      return Array.from(new Set(this.html.match(/<\w+/g))).map(function(i) {
        return i.substring(1);
      });
    };
    return HTMLParser2;
  })()
);
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function toArray(v) {
  if (Array.isArray(v))
    return v;
  return [v];
}
function hash(str) {
  str = str.replace(/\r/g, "");
  var hash2 = 5381;
  var i = str.length;
  while (i--)
    hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
  return (hash2 >>> 0).toString(36);
}
function indent(code, tab) {
  if (tab === void 0) {
    tab = 2;
  }
  var spaces = Array(tab).fill(" ").join("");
  return code.split("\n").map(function(line) {
    return spaces + line;
  }).join("\n");
}
function wrapit(code, start, end, tab, minify) {
  if (start === void 0) {
    start = "{";
  }
  if (end === void 0) {
    end = "}";
  }
  if (tab === void 0) {
    tab = 2;
  }
  if (minify === void 0) {
    minify = false;
  }
  if (minify)
    return "".concat(start).concat(code).concat(end);
  return "".concat(start, "\n").concat(indent(code, tab), "\n").concat(end);
}
function isSpace(str) {
  return /^\s*$/.test(str);
}
function camelToDash(str) {
  return str.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase();
}
function searchFrom(text, target, startIndex, endIndex) {
  if (startIndex === void 0) {
    startIndex = 0;
  }
  var subText = text.substring(startIndex, endIndex);
  var relativeIndex = subText.search(target);
  return relativeIndex === -1 ? -1 : startIndex + relativeIndex;
}
function connectList(a, b, append) {
  if (append === void 0) {
    append = true;
  }
  return append ? __spreadArray(__spreadArray([], a !== null && a !== void 0 ? a : [], true), b !== null && b !== void 0 ? b : [], true) : __spreadArray(__spreadArray([], b !== null && b !== void 0 ? b : [], true), a !== null && a !== void 0 ? a : [], true);
}
function deepCopy(source) {
  return Array.isArray(source) ? source.map(function(item) {
    return deepCopy(item);
  }) : source instanceof Date ? new Date(source.getTime()) : source && typeof source === "object" ? Object.getOwnPropertyNames(source).reduce(function(o, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(source, prop);
    if (descriptor) {
      Object.defineProperty(o, prop, descriptor);
      if (source && typeof source === "object") {
        o[prop] = deepCopy(source[prop]);
      }
    }
    return o;
  }, Object.create(Object.getPrototypeOf(source))) : source;
}
function isTagName(name) {
  return ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embd", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"].includes(name);
}
function searchPropEnd(text, startIndex) {
  if (startIndex === void 0) {
    startIndex = 0;
  }
  var index = startIndex;
  var output = -1;
  var openSingleQuote = false;
  var openDoubleQuote = false;
  var openBracket = false;
  var isEscaped = false;
  while (index < text.length) {
    switch (text.charAt(index)) {
      case "\\":
        isEscaped = !isEscaped;
        break;
      case "'":
        if (!openDoubleQuote && !openBracket && !isEscaped)
          openSingleQuote = !openSingleQuote;
        isEscaped = false;
        break;
      case '"':
        if (!openSingleQuote && !openBracket && !isEscaped)
          openDoubleQuote = !openDoubleQuote;
        isEscaped = false;
        break;
      case "(":
        if (!openBracket && !openSingleQuote && !openDoubleQuote && !isEscaped)
          openBracket = true;
        isEscaped = false;
        break;
      case ")":
        if (openBracket && !isEscaped)
          openBracket = false;
        isEscaped = false;
        break;
      case ";":
        if (!isEscaped && !openSingleQuote && !openDoubleQuote && !openBracket)
          output = index;
        isEscaped = false;
        break;
      default:
        isEscaped = false;
        break;
    }
    if (output !== -1)
      break;
    index++;
  }
  return output;
}
var Property = (
  /** @class */
  (function() {
    function Property2(name, value, comment, important) {
      if (important === void 0) {
        important = false;
      }
      this.meta = { type: "utilities", group: "plugin", order: 0, offset: 0, corePlugin: false };
      this.name = name;
      this.value = value;
      this.comment = comment;
      this.important = important;
    }
    Property2._singleParse = function(css) {
      css = css.trim();
      if (!css)
        return;
      if (css.charAt(0) === "@")
        return InlineAtRule.parse(css);
      var split = css.search(":");
      var end = searchPropEnd(css);
      if (split === -1)
        return;
      var important = false;
      var prop = css.substring(split + 1, end === -1 ? void 0 : end).trim();
      if (/!important;?$/.test(prop)) {
        important = true;
        prop = prop.replace(/!important/, "").trimRight();
      }
      return new Property2(css.substring(0, split).trim(), prop, void 0, important);
    };
    Property2.parse = function(css) {
      if (!/;\s*$/.test(css))
        css += ";";
      var properties = [];
      var index = 0;
      var end = searchPropEnd(css, index);
      while (end !== -1) {
        var parsed = this._singleParse(css.substring(searchFrom(css, /\S/, index), end + 1));
        if (parsed)
          properties.push(parsed);
        index = end + 1;
        end = searchPropEnd(css, index);
      }
      var count = properties.length;
      if (count > 1)
        return properties;
      if (count === 1)
        return properties[0];
    };
    Property2.prototype.clone = function() {
      return deepCopy(this);
    };
    Property2.prototype.toStyle = function(selector) {
      var style = new Style(selector, this, this.important);
      style.meta = this.meta;
      return style;
    };
    Property2.prototype.build = function(minify) {
      var _this = this;
      if (minify === void 0) {
        minify = false;
      }
      var createProperty = function(name, value) {
        if (minify) {
          return "".concat(name, ":").concat(value).concat(_this.important ? "!important" : "", ";");
        } else {
          var p = "".concat(name, ": ").concat(value).concat(_this.important ? " !important" : "", ";");
          return _this.comment ? p + " /* ".concat(_this.comment, " */") : p;
        }
      };
      if (!this.value)
        return "";
      return typeof this.name === "string" ? createProperty(this.name, this.value) : this.name.map(function(i) {
        return createProperty(i, _this.value);
      }).join(minify ? "" : "\n");
    };
    Property2.prototype.updateMeta = function(type, group, order, offset, corePlugin) {
      if (offset === void 0) {
        offset = 0;
      }
      if (corePlugin === void 0) {
        corePlugin = false;
      }
      this.meta = {
        type,
        group,
        order,
        offset,
        corePlugin
      };
      return this;
    };
    return Property2;
  })()
);
var InlineAtRule = (
  /** @class */
  (function(_super) {
    __extends(InlineAtRule2, _super);
    function InlineAtRule2(name, value, important) {
      if (important === void 0) {
        important = false;
      }
      var _this = _super.call(this, name, value, void 0, important) || this;
      _this.name = name;
      return _this;
    }
    InlineAtRule2.parse = function(css) {
      var _a;
      var matchName = css.match(/@[^\s;{}]+/);
      if (matchName) {
        var name_1 = matchName[0].substring(1);
        var important = false;
        var expression = matchName.index !== void 0 ? (_a = css.substring(matchName.index + name_1.length + 1).match(/(?:(['"]).*?\1|[^;])*/)) === null || _a === void 0 ? void 0 : _a[0].trim() : void 0;
        if (expression && /!important;?$/.test(expression)) {
          important = true;
          expression = expression.replace(/!important/, "").trimRight();
        }
        return new InlineAtRule2(name_1, expression === "" ? void 0 : expression, important);
      }
    };
    InlineAtRule2.prototype.build = function() {
      return this.value ? "@".concat(this.name, " ").concat(this.value).concat(this.important ? " !important" : "", ";") : "@".concat(this.name).concat(this.important ? " !important" : "", ";");
    };
    return InlineAtRule2;
  })(Property)
);
var Style = (
  /** @class */
  (function() {
    function Style2(selector, property, important) {
      if (important === void 0) {
        important = false;
      }
      this.meta = { type: "components", group: "plugin", order: 0, offset: 0, corePlugin: false };
      this.selector = selector;
      this.important = important;
      this.property = toArray(property || []);
    }
    Object.defineProperty(Style2.prototype, "rule", {
      get: function() {
        var _this = this;
        var _a, _b, _c;
        var selectors = ((_a = this.selector) !== null && _a !== void 0 ? _a : "").trim().split(/\s*,\s*/g);
        this._parentSelectors && (selectors = selectors.map(function(i) {
          var _a2;
          return "".concat((_a2 = _this._parentSelectors) === null || _a2 === void 0 ? void 0 : _a2.join(" "), " ").concat(i);
        }));
        ((_b = this._wrapSelectors) !== null && _b !== void 0 ? _b : []).forEach(function(func) {
          return selectors = selectors.map(function(i) {
            return func(i);
          });
        });
        this._pseudoClasses && (selectors = selectors.map(function(i) {
          var _a2;
          return i + ":".concat((_a2 = _this._pseudoClasses) === null || _a2 === void 0 ? void 0 : _a2.join(":"));
        }));
        this._pseudoElements && (selectors = selectors.map(function(i) {
          var _a2;
          return i + "::".concat((_a2 = _this._pseudoElements) === null || _a2 === void 0 ? void 0 : _a2.join("::"));
        }));
        this._brotherSelectors && (selectors = selectors.map(function(i) {
          var _a2;
          return i + ".".concat((_a2 = _this._brotherSelectors) === null || _a2 === void 0 ? void 0 : _a2.join("."));
        }));
        this._childSelectors && (selectors = selectors.map(function(i) {
          var _a2;
          return i + " ".concat((_a2 = _this._childSelectors) === null || _a2 === void 0 ? void 0 : _a2.join(" "));
        }));
        ((_c = this._wrapRules) !== null && _c !== void 0 ? _c : []).forEach(function(func) {
          return selectors = selectors.map(function(i) {
            return func(i);
          });
        });
        return selectors.join(", ");
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Style2.prototype, "pseudoClasses", {
      get: function() {
        return this._pseudoClasses;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Style2.prototype, "pseudoElements", {
      get: function() {
        return this._pseudoElements;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Style2.prototype, "parentSelectors", {
      get: function() {
        return this._parentSelectors;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Style2.prototype, "childSelectors", {
      get: function() {
        return this._childSelectors;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Style2.prototype, "brotherSelectors", {
      get: function() {
        return this._brotherSelectors;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Style2.prototype, "wrapProperties", {
      get: function() {
        return this._wrapProperties;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Style2.prototype, "wrapSelectors", {
      get: function() {
        return this._wrapSelectors;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Style2.prototype, "wrapRules", {
      get: function() {
        return this._wrapRules;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Style2.prototype, "simple", {
      get: function() {
        return !(this.atRules || this._pseudoClasses || this._pseudoElements || this._parentSelectors || this._childSelectors || this._brotherSelectors || this._wrapProperties || this._wrapSelectors || this._wrapRules);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Style2.prototype, "isAtrule", {
      get: function() {
        return !(this.atRules === void 0 || this.atRules.length === 0);
      },
      enumerable: false,
      configurable: true
    });
    Style2.generate = function(parent, property, root) {
      if (!root)
        root = (parent === null || parent === void 0 ? void 0 : parent.startsWith("@")) ? new Style2().atRule(parent) : new Style2(parent);
      var output = [];
      var _loop_1 = function(key2, value2) {
        var propertyValue = value2;
        if (Array.isArray(propertyValue) && propertyValue.every(function(e) {
          return typeof e === "object";
        })) {
          propertyValue = Object.assign.apply(Object, __spreadArray([{}], propertyValue, false));
        }
        if (typeof propertyValue === "string") {
          root.add(new Property(camelToDash(key2), propertyValue));
        } else if (Array.isArray(propertyValue)) {
          propertyValue.map(function(i) {
            return root === null || root === void 0 ? void 0 : root.add(new Property(camelToDash(key2), i));
          });
        } else {
          var wrap = deepCopy(root);
          wrap.property = [];
          var child = void 0;
          if (key2.startsWith("@")) {
            child = wrap.atRule(key2, false);
          } else {
            if (wrap.selector === void 0) {
              wrap.selector = key2;
              child = wrap;
            } else {
              if (/^[a-z]+$/.test(key2) && !isTagName(key2)) {
                wrap.wrapProperty(function(property2) {
                  return "".concat(key2, "-").concat(property2);
                });
                child = wrap;
              } else {
                var _hKey_1 = function(selector, key3) {
                  return (/&/.test(key3) ? key3 : "& ".concat(key3)).replace("&", selector);
                };
                wrap.wrapSelector(function(selector) {
                  return selector.trim().split(/\s*,\s*/g).map(function(s) {
                    return key2.split(/\s*,\s*/g).map(function(i) {
                      return _hKey_1(s, i);
                    }).join(", ");
                  }).join(", ");
                });
                child = wrap;
              }
            }
          }
          output = output.concat(Style2.generate(key2.startsWith("@") ? void 0 : key2, propertyValue, child));
        }
      };
      for (var _i = 0, _a = Object.entries(property !== null && property !== void 0 ? property : {}); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
      }
      if (root.property.length > 0)
        output.unshift(root);
      return output;
    };
    Style2.prototype.atRule = function(atrule, append) {
      if (append === void 0) {
        append = true;
      }
      if (!atrule)
        return this;
      if (this.atRules) {
        append ? this.atRules.push(atrule) : this.atRules.unshift(atrule);
      } else {
        this.atRules = [atrule];
      }
      return this;
    };
    Style2.prototype.pseudoClass = function(string) {
      if (this._pseudoClasses) {
        this._pseudoClasses.push(string);
      } else {
        this._pseudoClasses = [string];
      }
      return this;
    };
    Style2.prototype.pseudoElement = function(string) {
      if (this._pseudoElements) {
        this._pseudoElements.push(string);
      } else {
        this._pseudoElements = [string];
      }
      return this;
    };
    Style2.prototype.brother = function(string) {
      if (this._brotherSelectors) {
        this._brotherSelectors.push(string);
      } else {
        this._brotherSelectors = [string];
      }
      return this;
    };
    Style2.prototype.parent = function(string) {
      if (this._parentSelectors) {
        this._parentSelectors.push(string);
      } else {
        this._parentSelectors = [string];
      }
      return this;
    };
    Style2.prototype.child = function(string) {
      if (this._childSelectors) {
        this._childSelectors.push(string);
      } else {
        this._childSelectors = [string];
      }
      return this;
    };
    Style2.prototype.wrapProperty = function(func) {
      if (this._wrapProperties) {
        this._wrapProperties.push(func);
      } else {
        this._wrapProperties = [func];
      }
      return this;
    };
    Style2.prototype.wrapSelector = function(func) {
      if (this._wrapSelectors) {
        this._wrapSelectors.push(func);
      } else {
        this._wrapSelectors = [func];
      }
      return this;
    };
    Style2.prototype.wrapRule = function(func) {
      if (this._wrapRules) {
        this._wrapRules.push(func);
      } else {
        this._wrapRules = [func];
      }
      return this;
    };
    Style2.prototype.add = function(item) {
      item = toArray(item);
      if (this.important)
        item.forEach(function(i) {
          return i.important = true;
        });
      this.property = __spreadArray(__spreadArray([], this.property, true), item, true);
      return this;
    };
    Style2.prototype.extend = function(item, onlyProperty, append) {
      if (onlyProperty === void 0) {
        onlyProperty = false;
      }
      if (append === void 0) {
        append = true;
      }
      if (!item)
        return this;
      if (item.wrapProperties) {
        var props_1 = [];
        item.property.forEach(function(p) {
          var _a;
          var pc = new Property(p.name, p.value, p.comment);
          (_a = item.wrapProperties) === null || _a === void 0 ? void 0 : _a.forEach(function(wrap) {
            pc.name = Array.isArray(pc.name) ? pc.name.map(function(i) {
              return wrap(i);
            }) : wrap(pc.name);
          });
          if (item.important)
            pc.important = true;
          props_1.push(pc);
        });
        this.property = connectList(this.property, props_1, append);
      } else {
        if (item.important)
          item.property.forEach(function(i) {
            return i.important = true;
          });
        this.property = connectList(this.property, item.property, append);
      }
      if (onlyProperty)
        return this;
      item.selector && (this.selector = item.selector);
      this.meta = item.meta;
      item.atRules && (this.atRules = connectList(item.atRules, this.atRules, append));
      item._brotherSelectors && (this._brotherSelectors = connectList(this._brotherSelectors, item._brotherSelectors, append));
      item._childSelectors && (this._childSelectors = connectList(this._childSelectors, item._childSelectors, append));
      item._parentSelectors && (this._parentSelectors = connectList(this._parentSelectors, item._parentSelectors, append));
      item._pseudoClasses && (this._pseudoClasses = connectList(this._pseudoClasses, item._pseudoClasses, append));
      item._pseudoElements && (this._pseudoElements = connectList(this._pseudoElements, item._pseudoElements, append));
      item._wrapRules && (this._wrapRules = connectList(this._wrapRules, item._wrapRules, append));
      item._wrapSelectors && (this._wrapSelectors = connectList(this._wrapSelectors, item._wrapSelectors, append));
      return this;
    };
    Style2.prototype.clean = function() {
      var property = [];
      var cache = [];
      this.property.forEach(function(i) {
        var inline = i.build();
        if (!cache.includes(inline)) {
          cache.push(inline);
          property.push(i);
        }
      });
      this.property = property;
      return this;
    };
    Style2.prototype.flat = function() {
      var properties = [];
      this.property.forEach(function(p) {
        if (Array.isArray(p.name)) {
          p.name.forEach(function(i) {
            properties.push(new Property(i, p.value, p.comment));
          });
        } else {
          properties.push(p);
        }
      });
      this.property = properties;
      return this;
    };
    Style2.prototype.clone = function(selector, property) {
      var newStyle = deepCopy(this);
      if (selector)
        newStyle.selector = selector;
      if (property)
        newStyle.property = Array.isArray(property) ? property : [property];
      return newStyle;
    };
    Style2.prototype.sort = function() {
      this.property = this.property.sort(function(a, b) {
        return "".concat(a.name).substring(0, 2) > "".concat(b.name).substring(0, 2) ? 1 : -1;
      });
      return this;
    };
    Style2.prototype.build = function(minify, prefixer) {
      var _this = this;
      if (minify === void 0) {
        minify = false;
      }
      if (prefixer === void 0) {
        prefixer = true;
      }
      var properties = this.property;
      if (!prefixer)
        properties = properties.filter(function(p) {
          if (p.value && /-(webkit|ms|moz|o)-/.test(p.value))
            return false;
          if (Array.isArray(p.name)) {
            p.name = p.name.filter(function(i) {
              return !/^-(webkit|ms|moz|o)-/.test(i);
            });
            return true;
          }
          return !/^-(webkit|ms|moz|o)-/.test(p.name);
        });
      var result = properties.map(function(p) {
        if (_this._wrapProperties) {
          var name_2 = p.name;
          _this._wrapProperties.forEach(function(w) {
            return name_2 = Array.isArray(name_2) ? name_2.map(function(n) {
              return w(n);
            }) : w(name_2);
          });
          return new Property(name_2, p.value, p.comment, _this.important ? true : p.important).build(minify);
        }
        return _this.important ? new Property(p.name, p.value, p.comment, true).build(minify) : p.build(minify);
      }).join(minify ? "" : "\n");
      if (!this.selector && !this.atRules)
        return result.replace(/;}/g, "}");
      if (this.selector)
        result = (minify ? this.rule.replace(/,\s/g, ",") : this.rule + " ") + wrapit(result, void 0, void 0, void 0, result !== "" ? minify : true);
      if (this.atRules) {
        for (var _i = 0, _a = this.atRules; _i < _a.length; _i++) {
          var rule = _a[_i];
          result = minify ? "".concat(rule.replace(/\s/g, "")).concat(wrapit(result, void 0, void 0, void 0, minify)) : "".concat(rule, " ").concat(wrapit(result, void 0, void 0, void 0, result !== "" ? minify : true));
        }
      }
      return minify ? result.replace(/;}/g, "}") : result;
    };
    Style2.prototype.updateMeta = function(type, group, order, offset, corePlugin, respectSelector) {
      if (offset === void 0) {
        offset = 0;
      }
      if (corePlugin === void 0) {
        corePlugin = false;
      }
      if (respectSelector === void 0) {
        respectSelector = false;
      }
      this.meta = {
        type,
        group,
        order,
        offset,
        corePlugin,
        respectSelector
      };
      return this;
    };
    return Style2;
  })()
);
(function(_super) {
  __extends(GlobalStyle, _super);
  function GlobalStyle(selector, property, important) {
    return _super.call(this, selector, property, important) || this;
  }
  return GlobalStyle;
})(Style);
var Keyframes = (
  /** @class */
  (function(_super) {
    __extends(Keyframes2, _super);
    function Keyframes2(selector, property, important) {
      return _super.call(this, selector, property, important) || this;
    }
    Keyframes2.generate = function(name, children, root, prefixer) {
      if (prefixer === void 0) {
        prefixer = true;
      }
      var styles = [];
      var webkitStyles = [];
      for (var _i = 0, _a = Object.entries(children); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var style = new Keyframes2(key).atRule("@keyframes ".concat(name));
        var webkitStyle = new Keyframes2(key).atRule("@-webkit-keyframes ".concat(name));
        for (var _c = 0, _d = Object.entries(value); _c < _d.length; _c++) {
          var _e = _d[_c], pkey = _e[0], pvalue = _e[1];
          var prop = pkey;
          if (pkey === "transform") {
            prop = prefixer ? ["-webkit-transform", "transform"] : "transform";
          } else if (["animationTimingFunction", "animation-timing-function"].includes(pkey)) {
            prop = prefixer ? [
              "-webkit-animation-timing-function",
              "animation-timing-function"
            ] : "animation-timing-function";
          }
          style.add(new Property(prop, pvalue));
          webkitStyle.add(new Property(prop, pvalue));
        }
        styles.push(style);
        if (prefixer)
          webkitStyles.push(webkitStyle);
      }
      return __spreadArray(__spreadArray([], styles, true), webkitStyles, true);
    };
    return Keyframes2;
  })(Style)
);
(function(_super) {
  __extends(Container, _super);
  function Container(selector, property, important) {
    return _super.call(this, selector, property, important) || this;
  }
  return Container;
})(Style);
var minMaxWidth = /(!?\(\s*min(-device-)?-width).+\(\s*max(-device)?-width/i;
var minWidth = /\(\s*min(-device)?-width/i;
var maxMinWidth = /(!?\(\s*max(-device)?-width).+\(\s*min(-device)?-width/i;
var maxWidth = /\(\s*max(-device)?-width/i;
var isMinWidth = _testQuery(minMaxWidth, maxMinWidth, minWidth);
var isMaxWidth = _testQuery(maxMinWidth, minMaxWidth, maxWidth);
var minMaxHeight = /(!?\(\s*min(-device)?-height).+\(\s*max(-device)?-height/i;
var minHeight = /\(\s*min(-device)?-height/i;
var maxMinHeight = /(!?\(\s*max(-device)?-height).+\(\s*min(-device)?-height/i;
var maxHeight = /\(\s*max(-device)?-height/i;
var isMinHeight = _testQuery(minMaxHeight, maxMinHeight, minHeight);
var isMaxHeight = _testQuery(maxMinHeight, minMaxHeight, maxHeight);
var isPrint = /print/i;
var isPrintOnly = /^print\$/i;
var isAtRule = /^\s*@/i;
var isMedia = /^\s*@media/i;
var maxValue = Number.MAX_VALUE;
function _getQueryLength(length) {
  var result = /(-?\d*\.?\d+)(ch|em|ex|px|rpx|rem)/.exec(length);
  if (result === null) {
    return maxValue;
  }
  var number = result[1];
  var unit = result[2];
  switch (unit) {
    case "ch":
      return parseFloat(number) * 8.8984375;
    case "em":
    case "rem":
      return parseFloat(number) * 16;
    case "ex":
      return parseFloat(number) * 8.296875;
    case "px":
    case "rpx":
      return parseFloat(number);
  }
  return +number;
}
function _testQuery(doubleTestTrue, doubleTestFalse, singleTest) {
  return function(query) {
    if (doubleTestTrue.test(query)) {
      return true;
    } else if (doubleTestFalse.test(query)) {
      return false;
    }
    return singleTest.test(query);
  };
}
function _testAtRule(a, b) {
  var isMediaA = isMedia.test(a);
  var isMediaB = isMedia.test(b);
  if (isMediaA && isMediaB)
    return null;
  var isAtRuleA = isAtRule.test(a);
  var isAtRuleB = isAtRule.test(b);
  if (isAtRuleA)
    return 1;
  if (isAtRuleB)
    return -1;
  return 0;
}
function _testIsPrint(a, b) {
  var isPrintA = isPrint.test(a);
  var isPrintOnlyA = isPrintOnly.test(a);
  var isPrintB = isPrint.test(b);
  var isPrintOnlyB = isPrintOnly.test(b);
  if (isPrintA && isPrintB) {
    if (!isPrintOnlyA && isPrintOnlyB) {
      return 1;
    }
    if (isPrintOnlyA && !isPrintOnlyB) {
      return -1;
    }
    return a.localeCompare(b);
  }
  if (isPrintA) {
    return 1;
  }
  if (isPrintB) {
    return -1;
  }
  return null;
}
function sortMediaQuery(a, b) {
  var testAtRule = _testAtRule(a, b);
  if (testAtRule !== null)
    return testAtRule;
  var testIsPrint = _testIsPrint(a, b);
  if (testIsPrint !== null)
    return testIsPrint;
  var minA = isMinWidth(a) || isMinHeight(a);
  var maxA = isMaxWidth(a) || isMaxHeight(a);
  var minB = isMinWidth(b) || isMinHeight(b);
  var maxB = isMaxWidth(b) || isMaxHeight(b);
  if (minA && maxB) {
    return -1;
  }
  if (maxA && minB) {
    return 1;
  }
  var lengthA = _getQueryLength(a);
  var lengthB = _getQueryLength(b);
  if (lengthA === maxValue && lengthB === maxValue) {
    return a.localeCompare(b);
  } else if (lengthA === maxValue) {
    return 1;
  } else if (lengthB === maxValue) {
    return -1;
  }
  if (lengthA > lengthB) {
    if (maxA) {
      return -1;
    }
    return 1;
  }
  if (lengthA < lengthB) {
    if (maxA) {
      return 1;
    }
    return -1;
  }
  return a.localeCompare(b);
}
function getWeights(a) {
  var first = a.charAt(0);
  var second = a.charAt(1);
  if (first === ":" && second === ":")
    return 59;
  if (first === "#")
    return 500;
  if (first !== ".")
    return first.charCodeAt(0);
  return 499;
}
function sortMeta(a, b) {
  var _a, _b, _c, _d;
  if (a.meta.type === "base" && b.meta.type === "base")
    return getWeights((_a = a.selector) !== null && _a !== void 0 ? _a : "") - getWeights((_b = b.selector) !== null && _b !== void 0 ? _b : "");
  return sortMediaQuery(((_c = a.meta.variants) === null || _c === void 0 ? void 0 : _c[0]) || "", ((_d = b.meta.variants) === null || _d === void 0 ? void 0 : _d[0]) || "") || a.meta.order - b.meta.order || a.meta.offset - b.meta.offset || +b.meta.corePlugin - +a.meta.corePlugin;
}
function _buildAtrule(atrule, children, minify, prefixer) {
  if (minify === void 0) {
    minify = false;
  }
  if (prefixer === void 0) {
    prefixer = true;
  }
  return "".concat(atrule).concat(minify ? "" : " ").concat(wrapit(_buildStyleList(children, minify, prefixer), void 0, void 0, void 0, minify));
}
function _buildStyleList(styleList, minify, prefixer) {
  if (minify === void 0) {
    minify = false;
  }
  if (prefixer === void 0) {
    prefixer = true;
  }
  var currentAtrule;
  var currentStyle;
  var styleStack = [];
  var output = [];
  var _loop_1 = function(style2) {
    if (style2.isAtrule) {
      if (currentStyle) {
        output.push(currentStyle.clean().build(minify, prefixer));
        currentStyle = void 0;
      }
      var newAtrule = style2.atRules.pop();
      if (currentAtrule) {
        if (currentAtrule === newAtrule && newAtrule !== "@font-face") {
          styleStack.push(style2);
        } else {
          output.push(_buildAtrule(currentAtrule, styleStack, minify, prefixer));
          currentAtrule = newAtrule;
          styleStack = [style2];
        }
      } else {
        currentAtrule = newAtrule;
        styleStack = [style2];
      }
    } else {
      if (currentAtrule) {
        output.push(_buildAtrule(currentAtrule, styleStack, minify, prefixer));
        currentAtrule = void 0;
        styleStack = [];
      }
      if (currentStyle) {
        if (style2.rule === currentStyle.rule) {
          if (style2.important)
            style2.property.forEach(function(p) {
              return p.important = true;
            });
          if (style2.wrapProperties)
            style2.property.forEach(function(p) {
              var _a;
              return (_a = style2.wrapProperties) === null || _a === void 0 ? void 0 : _a.forEach(function(wrap) {
                return p.name = Array.isArray(p.name) ? p.name.map(function(i) {
                  return wrap(i);
                }) : wrap(p.name);
              });
            });
          currentStyle.add(style2.property);
        } else {
          output.push(currentStyle.clean().build(minify, prefixer));
          currentStyle = style2;
        }
      } else {
        currentStyle = style2;
      }
    }
  };
  for (var _i = 0, styleList_1 = styleList; _i < styleList_1.length; _i++) {
    var style = styleList_1[_i];
    _loop_1(style);
  }
  if (currentAtrule)
    output.push(_buildAtrule(currentAtrule, styleStack, minify, prefixer));
  if (currentStyle)
    output.push(currentStyle.clean().build(minify, prefixer));
  return output.join(minify ? "" : "\n");
}
function compileStyleSheet(styleList, minify, prefixer) {
  if (minify === void 0) {
    minify = false;
  }
  if (prefixer === void 0) {
    prefixer = true;
  }
  return _buildStyleList(deepCopy(styleList), minify, prefixer);
}
var StyleSheet = (
  /** @class */
  (function() {
    function StyleSheet2(children) {
      this.prefixer = true;
      this.children = children || [];
    }
    StyleSheet2.prototype.add = function(item) {
      if (!item)
        return this;
      if (Array.isArray(item)) {
        this.children = __spreadArray(__spreadArray([], this.children, true), item, true);
      } else {
        this.children.push(item);
      }
      return this;
    };
    StyleSheet2.prototype.extend = function(styleSheet, append, dedup) {
      if (append === void 0) {
        append = true;
      }
      if (dedup === void 0) {
        dedup = false;
      }
      if (styleSheet) {
        var extended = styleSheet.children;
        if (dedup) {
          var hashes_1 = extended.map(function(i) {
            return hash(i.build());
          });
          extended = extended.filter(function(i) {
            return !hashes_1.includes(hash(i.build()));
          });
        }
        this.prefixer = styleSheet.prefixer;
        this.children = append ? __spreadArray(__spreadArray([], this.children, true), extended, true) : __spreadArray(__spreadArray([], extended, true), this.children, true);
      }
      return this;
    };
    StyleSheet2.prototype.combine = function() {
      var styleMap = {};
      this.children.forEach(function(style, index) {
        var _a;
        var hashValue = hash(style.atRules + style.meta.type + style.rule);
        if (hashValue in styleMap) {
          if ((_a = style.atRules) === null || _a === void 0 ? void 0 : _a.includes("@font-face")) {
            styleMap[hashValue + index] = style;
          } else {
            styleMap[hashValue] = styleMap[hashValue].extend(style, true);
          }
        } else {
          styleMap[hashValue] = style;
        }
      });
      this.children = Object.values(styleMap).map(function(i) {
        return i.clean();
      });
      return this;
    };
    StyleSheet2.prototype.layer = function(type) {
      var styleSheet = new StyleSheet2(this.children.filter(function(i) {
        return i.meta.type === type;
      }));
      styleSheet.prefixer = this.prefixer;
      return styleSheet;
    };
    StyleSheet2.prototype.split = function() {
      return {
        base: this.layer("base"),
        components: this.layer("components"),
        utilities: this.layer("utilities")
      };
    };
    StyleSheet2.prototype.clone = function() {
      return deepCopy(this);
    };
    StyleSheet2.prototype.sort = function() {
      this.children = this.children.sort(sortMeta);
      return this;
    };
    StyleSheet2.prototype.sortby = function(compareFn) {
      this.children = this.children.sort(compareFn);
      return this;
    };
    StyleSheet2.prototype.build = function(minify) {
      if (minify === void 0) {
        minify = false;
      }
      return compileStyleSheet(this.children, minify, this.prefixer);
    };
    return StyleSheet2;
  })()
);
var pseudoClassNames = [
  "hover",
  "focus",
  "active",
  "visited",
  "link",
  "target",
  "focus-visible",
  "focus-within",
  "checked",
  "default",
  "disabled",
  "enabled",
  "indeterminate",
  "invalid",
  "valid",
  "optional",
  "required",
  "placeholder-shown",
  "read-only",
  "read-write",
  "first-of-type",
  "last-of-type",
  "only-child",
  "only-of-type",
  "root",
  "empty"
];
__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], pseudoClassNames, true), [
  "not-checked",
  "not-disabled",
  "not-first-of-type",
  "not-last-of-type",
  "first",
  "not-first",
  "last",
  "not-last",
  "not-only-child",
  "not-only-of-type",
  "even",
  "odd",
  "even-of-type",
  "odd-of-type",
  "before",
  "after",
  "first-letter",
  "first-line",
  "file-selector-button",
  "file",
  "selection",
  "marker",
  "svg",
  "all",
  "children",
  "siblings",
  "sibling",
  "ltr",
  "rtl"
], false), pseudoClassNames.map(function(pseudoClassName) {
  return "group-".concat(pseudoClassName);
}), true), [
  "motion-safe",
  "motion-reduce"
], false), pseudoClassNames.map(function(pseudoClassName) {
  return "peer-".concat(pseudoClassName);
}), true), pseudoClassNames.map(function(pseudoClassName) {
  return "peer-not-".concat(pseudoClassName);
}), true);
var layerOrder;
(function(layerOrder2) {
  layerOrder2[layerOrder2["base"] = 10] = "base";
  layerOrder2[layerOrder2["components"] = 150] = "components";
  layerOrder2[layerOrder2["shortcuts"] = 160] = "shortcuts";
  layerOrder2[layerOrder2["utilities"] = 2e4] = "utilities";
})(layerOrder || (layerOrder = {}));
var pluginOrder;
(function(pluginOrder2) {
  pluginOrder2[pluginOrder2["columns"] = 80] = "columns";
  pluginOrder2[pluginOrder2["container"] = 100] = "container";
  pluginOrder2[pluginOrder2["space"] = 200] = "space";
  pluginOrder2[pluginOrder2["divideWidth"] = 300] = "divideWidth";
  pluginOrder2[pluginOrder2["divideColor"] = 400] = "divideColor";
  pluginOrder2[pluginOrder2["divideStyle"] = 500] = "divideStyle";
  pluginOrder2[pluginOrder2["divideOpacity"] = 600] = "divideOpacity";
  pluginOrder2[pluginOrder2["accessibility"] = 700] = "accessibility";
  pluginOrder2[pluginOrder2["appearance"] = 800] = "appearance";
  pluginOrder2[pluginOrder2["backgroundAttachment"] = 900] = "backgroundAttachment";
  pluginOrder2[pluginOrder2["backgroundClip"] = 1e3] = "backgroundClip";
  pluginOrder2[pluginOrder2["backgroundColor"] = 1100] = "backgroundColor";
  pluginOrder2[pluginOrder2["backgroundImage"] = 1200] = "backgroundImage";
  pluginOrder2[pluginOrder2["gradientColorStops"] = 1300] = "gradientColorStops";
  pluginOrder2[pluginOrder2["backgroundOpacity"] = 1400] = "backgroundOpacity";
  pluginOrder2[pluginOrder2["backgroundPosition"] = 1500] = "backgroundPosition";
  pluginOrder2[pluginOrder2["backgroundRepeat"] = 1600] = "backgroundRepeat";
  pluginOrder2[pluginOrder2["backgroundSize"] = 1700] = "backgroundSize";
  pluginOrder2[pluginOrder2["backgroundOrigin"] = 1750] = "backgroundOrigin";
  pluginOrder2[pluginOrder2["borderCollapse"] = 1800] = "borderCollapse";
  pluginOrder2[pluginOrder2["borderColor"] = 1900] = "borderColor";
  pluginOrder2[pluginOrder2["borderOpacity"] = 2e3] = "borderOpacity";
  pluginOrder2[pluginOrder2["borderRadius"] = 2100] = "borderRadius";
  pluginOrder2[pluginOrder2["borderStyle"] = 2200] = "borderStyle";
  pluginOrder2[pluginOrder2["borderWidth"] = 2300] = "borderWidth";
  pluginOrder2[pluginOrder2["boxDecorationBreak"] = 2350] = "boxDecorationBreak";
  pluginOrder2[pluginOrder2["boxSizing"] = 2400] = "boxSizing";
  pluginOrder2[pluginOrder2["cursor"] = 2500] = "cursor";
  pluginOrder2[pluginOrder2["captionSide"] = 2550] = "captionSide";
  pluginOrder2[pluginOrder2["emptyCells"] = 2560] = "emptyCells";
  pluginOrder2[pluginOrder2["display"] = 2600] = "display";
  pluginOrder2[pluginOrder2["flexBasis"] = 2699] = "flexBasis";
  pluginOrder2[pluginOrder2["flexDirection"] = 2700] = "flexDirection";
  pluginOrder2[pluginOrder2["flexWrap"] = 2800] = "flexWrap";
  pluginOrder2[pluginOrder2["placeItems"] = 2900] = "placeItems";
  pluginOrder2[pluginOrder2["placeContent"] = 3e3] = "placeContent";
  pluginOrder2[pluginOrder2["placeSelf"] = 3100] = "placeSelf";
  pluginOrder2[pluginOrder2["alignItems"] = 3200] = "alignItems";
  pluginOrder2[pluginOrder2["alignContent"] = 3300] = "alignContent";
  pluginOrder2[pluginOrder2["alignSelf"] = 3400] = "alignSelf";
  pluginOrder2[pluginOrder2["justifyItems"] = 3500] = "justifyItems";
  pluginOrder2[pluginOrder2["justifyContent"] = 3600] = "justifyContent";
  pluginOrder2[pluginOrder2["justifySelf"] = 3700] = "justifySelf";
  pluginOrder2[pluginOrder2["flex"] = 3800] = "flex";
  pluginOrder2[pluginOrder2["flexGrow"] = 3900] = "flexGrow";
  pluginOrder2[pluginOrder2["flexShrink"] = 4e3] = "flexShrink";
  pluginOrder2[pluginOrder2["order"] = 4100] = "order";
  pluginOrder2[pluginOrder2["float"] = 4200] = "float";
  pluginOrder2[pluginOrder2["clear"] = 4300] = "clear";
  pluginOrder2[pluginOrder2["fontFamily"] = 4400] = "fontFamily";
  pluginOrder2[pluginOrder2["fontWeight"] = 4500] = "fontWeight";
  pluginOrder2[pluginOrder2["height"] = 4600] = "height";
  pluginOrder2[pluginOrder2["fontSize"] = 4700] = "fontSize";
  pluginOrder2[pluginOrder2["lineHeight"] = 4800] = "lineHeight";
  pluginOrder2[pluginOrder2["listStylePosition"] = 4900] = "listStylePosition";
  pluginOrder2[pluginOrder2["listStyleType"] = 5e3] = "listStyleType";
  pluginOrder2[pluginOrder2["margin"] = 5100] = "margin";
  pluginOrder2[pluginOrder2["maxHeight"] = 5200] = "maxHeight";
  pluginOrder2[pluginOrder2["maxWidth"] = 5300] = "maxWidth";
  pluginOrder2[pluginOrder2["minHeight"] = 5400] = "minHeight";
  pluginOrder2[pluginOrder2["minWidth"] = 5500] = "minWidth";
  pluginOrder2[pluginOrder2["objectFit"] = 5600] = "objectFit";
  pluginOrder2[pluginOrder2["objectPosition"] = 5700] = "objectPosition";
  pluginOrder2[pluginOrder2["opacity"] = 5800] = "opacity";
  pluginOrder2[pluginOrder2["outline"] = 5900] = "outline";
  pluginOrder2[pluginOrder2["overflow"] = 6e3] = "overflow";
  pluginOrder2[pluginOrder2["overscrollBehavior"] = 6100] = "overscrollBehavior";
  pluginOrder2[pluginOrder2["padding"] = 6200] = "padding";
  pluginOrder2[pluginOrder2["placeholderColor"] = 6300] = "placeholderColor";
  pluginOrder2[pluginOrder2["placeholderOpacity"] = 6400] = "placeholderOpacity";
  pluginOrder2[pluginOrder2["caretColor"] = 6450] = "caretColor";
  pluginOrder2[pluginOrder2["caretOpacity"] = 6460] = "caretOpacity";
  pluginOrder2[pluginOrder2["tabSize"] = 6470] = "tabSize";
  pluginOrder2[pluginOrder2["pointerEvents"] = 6500] = "pointerEvents";
  pluginOrder2[pluginOrder2["position"] = 6600] = "position";
  pluginOrder2[pluginOrder2["inset"] = 6700] = "inset";
  pluginOrder2[pluginOrder2["resize"] = 6800] = "resize";
  pluginOrder2[pluginOrder2["boxShadow"] = 6900] = "boxShadow";
  pluginOrder2[pluginOrder2["boxShadowColor"] = 6950] = "boxShadowColor";
  pluginOrder2[pluginOrder2["ringWidth"] = 7e3] = "ringWidth";
  pluginOrder2[pluginOrder2["ringOffsetColor"] = 7100] = "ringOffsetColor";
  pluginOrder2[pluginOrder2["ringOffsetWidth"] = 7200] = "ringOffsetWidth";
  pluginOrder2[pluginOrder2["ringColor"] = 7300] = "ringColor";
  pluginOrder2[pluginOrder2["ringOpacity"] = 7400] = "ringOpacity";
  pluginOrder2[pluginOrder2["fill"] = 7500] = "fill";
  pluginOrder2[pluginOrder2["stroke"] = 7600] = "stroke";
  pluginOrder2[pluginOrder2["strokeWidth"] = 7700] = "strokeWidth";
  pluginOrder2[pluginOrder2["strokeDashArray"] = 7750] = "strokeDashArray";
  pluginOrder2[pluginOrder2["strokeDashOffset"] = 7760] = "strokeDashOffset";
  pluginOrder2[pluginOrder2["tableLayout"] = 7800] = "tableLayout";
  pluginOrder2[pluginOrder2["textAlign"] = 7900] = "textAlign";
  pluginOrder2[pluginOrder2["textColor"] = 8e3] = "textColor";
  pluginOrder2[pluginOrder2["textOpacity"] = 8100] = "textOpacity";
  pluginOrder2[pluginOrder2["textOverflow"] = 8200] = "textOverflow";
  pluginOrder2[pluginOrder2["textShadow"] = 8250] = "textShadow";
  pluginOrder2[pluginOrder2["fontStyle"] = 8300] = "fontStyle";
  pluginOrder2[pluginOrder2["textTransform"] = 8400] = "textTransform";
  pluginOrder2[pluginOrder2["textDecorationStyle"] = 8450] = "textDecorationStyle";
  pluginOrder2[pluginOrder2["textDecorationLength"] = 8455] = "textDecorationLength";
  pluginOrder2[pluginOrder2["textDecorationColor"] = 8460] = "textDecorationColor";
  pluginOrder2[pluginOrder2["textDecorationOpacity"] = 8470] = "textDecorationOpacity";
  pluginOrder2[pluginOrder2["textDecorationOffset"] = 8480] = "textDecorationOffset";
  pluginOrder2[pluginOrder2["textDecorationThickness"] = 8490] = "textDecorationThickness";
  pluginOrder2[pluginOrder2["textDecoration"] = 8500] = "textDecoration";
  pluginOrder2[pluginOrder2["textIndent"] = 8550] = "textIndent";
  pluginOrder2[pluginOrder2["textStrokeColor"] = 8560] = "textStrokeColor";
  pluginOrder2[pluginOrder2["textStrokeWidth"] = 8570] = "textStrokeWidth";
  pluginOrder2[pluginOrder2["content"] = 8580] = "content";
  pluginOrder2[pluginOrder2["fontSmoothing"] = 8600] = "fontSmoothing";
  pluginOrder2[pluginOrder2["fontVariantNumeric"] = 8700] = "fontVariantNumeric";
  pluginOrder2[pluginOrder2["letterSpacing"] = 8800] = "letterSpacing";
  pluginOrder2[pluginOrder2["userSelect"] = 8900] = "userSelect";
  pluginOrder2[pluginOrder2["verticalAlign"] = 9e3] = "verticalAlign";
  pluginOrder2[pluginOrder2["visibility"] = 9100] = "visibility";
  pluginOrder2[pluginOrder2["backfaceVisibility"] = 9150] = "backfaceVisibility";
  pluginOrder2[pluginOrder2["whitespace"] = 9200] = "whitespace";
  pluginOrder2[pluginOrder2["wordBreak"] = 9300] = "wordBreak";
  pluginOrder2[pluginOrder2["writingMode"] = 9340] = "writingMode";
  pluginOrder2[pluginOrder2["hyphens"] = 9350] = "hyphens";
  pluginOrder2[pluginOrder2["width"] = 9400] = "width";
  pluginOrder2[pluginOrder2["zIndex"] = 9500] = "zIndex";
  pluginOrder2[pluginOrder2["isolation"] = 9550] = "isolation";
  pluginOrder2[pluginOrder2["gap"] = 9600] = "gap";
  pluginOrder2[pluginOrder2["gridAutoFlow"] = 9700] = "gridAutoFlow";
  pluginOrder2[pluginOrder2["gridTemplateColumns"] = 9800] = "gridTemplateColumns";
  pluginOrder2[pluginOrder2["gridAutoColumns"] = 9900] = "gridAutoColumns";
  pluginOrder2[pluginOrder2["gridColumn"] = 1e4] = "gridColumn";
  pluginOrder2[pluginOrder2["gridColumnStart"] = 10100] = "gridColumnStart";
  pluginOrder2[pluginOrder2["gridColumnEnd"] = 10200] = "gridColumnEnd";
  pluginOrder2[pluginOrder2["gridTemplateRows"] = 10300] = "gridTemplateRows";
  pluginOrder2[pluginOrder2["gridAutoRows"] = 10400] = "gridAutoRows";
  pluginOrder2[pluginOrder2["gridRow"] = 10500] = "gridRow";
  pluginOrder2[pluginOrder2["gridRowStart"] = 10600] = "gridRowStart";
  pluginOrder2[pluginOrder2["gridRowEnd"] = 10700] = "gridRowEnd";
  pluginOrder2[pluginOrder2["transform"] = 10800] = "transform";
  pluginOrder2[pluginOrder2["transformOrigin"] = 10900] = "transformOrigin";
  pluginOrder2[pluginOrder2["scale"] = 11e3] = "scale";
  pluginOrder2[pluginOrder2["rotate"] = 11100] = "rotate";
  pluginOrder2[pluginOrder2["translate"] = 11200] = "translate";
  pluginOrder2[pluginOrder2["skew"] = 11300] = "skew";
  pluginOrder2[pluginOrder2["perspective"] = 11350] = "perspective";
  pluginOrder2[pluginOrder2["perspectiveOrigin"] = 11360] = "perspectiveOrigin";
  pluginOrder2[pluginOrder2["transitionProperty"] = 11400] = "transitionProperty";
  pluginOrder2[pluginOrder2["transitionTimingFunction"] = 11500] = "transitionTimingFunction";
  pluginOrder2[pluginOrder2["transitionDuration"] = 11600] = "transitionDuration";
  pluginOrder2[pluginOrder2["transitionDelay"] = 11700] = "transitionDelay";
  pluginOrder2[pluginOrder2["keyframes"] = 11800] = "keyframes";
  pluginOrder2[pluginOrder2["animation"] = 11900] = "animation";
  pluginOrder2[pluginOrder2["imageRendering"] = 11950] = "imageRendering";
  pluginOrder2[pluginOrder2["mixBlendMode"] = 12e3] = "mixBlendMode";
  pluginOrder2[pluginOrder2["backgroundBlendMode"] = 12100] = "backgroundBlendMode";
  pluginOrder2[pluginOrder2["filter"] = 12200] = "filter";
  pluginOrder2[pluginOrder2["blur"] = 12300] = "blur";
  pluginOrder2[pluginOrder2["brightness"] = 12400] = "brightness";
  pluginOrder2[pluginOrder2["contrast"] = 12500] = "contrast";
  pluginOrder2[pluginOrder2["dropShadow"] = 12600] = "dropShadow";
  pluginOrder2[pluginOrder2["grayscale"] = 12700] = "grayscale";
  pluginOrder2[pluginOrder2["hueRotate"] = 12800] = "hueRotate";
  pluginOrder2[pluginOrder2["invert"] = 12900] = "invert";
  pluginOrder2[pluginOrder2["saturate"] = 13e3] = "saturate";
  pluginOrder2[pluginOrder2["sepia"] = 13100] = "sepia";
  pluginOrder2[pluginOrder2["backdropFilter"] = 13200] = "backdropFilter";
  pluginOrder2[pluginOrder2["backdropBlur"] = 13300] = "backdropBlur";
  pluginOrder2[pluginOrder2["backdropBrightness"] = 13400] = "backdropBrightness";
  pluginOrder2[pluginOrder2["backdropContrast"] = 13500] = "backdropContrast";
  pluginOrder2[pluginOrder2["backdropGrayscale"] = 13600] = "backdropGrayscale";
  pluginOrder2[pluginOrder2["backdropHueRotate"] = 13700] = "backdropHueRotate";
  pluginOrder2[pluginOrder2["backdropInvert"] = 13800] = "backdropInvert";
  pluginOrder2[pluginOrder2["backdropOpacity"] = 13900] = "backdropOpacity";
  pluginOrder2[pluginOrder2["backdropSaturate"] = 14e3] = "backdropSaturate";
  pluginOrder2[pluginOrder2["backdropSepia"] = 14100] = "backdropSepia";
  pluginOrder2[pluginOrder2["willChange"] = 14200] = "willChange";
  pluginOrder2[pluginOrder2["touchAction"] = 14300] = "touchAction";
  pluginOrder2[pluginOrder2["scrollBehavior"] = 14400] = "scrollBehavior";
  pluginOrder2[pluginOrder2["accentColor"] = 14500] = "accentColor";
})(pluginOrder || (pluginOrder = {}));
var CSSParser = (
  /** @class */
  (function() {
    function CSSParser2(css, processor) {
      this.variables = {};
      this._cache = {};
      this.css = css;
      this.processor = processor;
    }
    CSSParser2.prototype._addCache = function(style) {
      var rule = style.rule;
      if ([".", "#"].includes(rule.charAt(0)))
        this._cache[rule] = rule in this._cache ? __spreadArray(__spreadArray([], this._cache[rule], true), [deepCopy(style)], false) : [deepCopy(style)];
    };
    CSSParser2.prototype._searchGroup = function(text, startIndex) {
      if (startIndex === void 0) {
        startIndex = 0;
      }
      var level = 1;
      var endBracket = searchFrom(text, "}", startIndex);
      while (endBracket !== -1) {
        var nextBracket = searchFrom(text, "{", startIndex);
        if (endBracket < nextBracket || nextBracket === -1) {
          level--;
          startIndex = endBracket + 1;
          if (level === 0)
            return endBracket;
        } else {
          level++;
          startIndex = nextBracket + 1;
        }
        endBracket = searchFrom(text, "}", startIndex);
      }
      return -1;
    };
    CSSParser2.prototype._loadTheme = function(prop) {
      if (!prop)
        return;
      if (!this.processor)
        return prop;
      var index = 0;
      var output = [];
      while (index < prop.length) {
        var matched = prop.slice(index).match(/theme\([^)]*?\)/);
        if (!matched || matched.index === void 0)
          break;
        output.push(prop.slice(index, index + matched.index));
        var args = matched[0].slice(6, -1).split(/\s*,\s*/).map(function(i) {
          return i.trim().replace(/^['"]+|['"]+$/g, "");
        });
        output.push(this.processor.theme(args[0], args[1]));
        index += matched.index + matched[0].length;
      }
      output.push(prop.slice(index));
      return output.join("");
    };
    CSSParser2.prototype._handleDirectives = function(atrule) {
      var _a, _b, _c;
      if (!this.processor)
        return { atrule };
      var iatrule = InlineAtRule.parse(atrule);
      if (!iatrule)
        return;
      if (iatrule.name === "apply")
        return { apply: iatrule.value, important: iatrule.important };
      if (iatrule.name === "layer")
        return { layer: (_a = iatrule.value) !== null && _a !== void 0 ? _a : "components" };
      if (iatrule.name === "variants" && iatrule.value)
        return { variants: iatrule.value.split(",").map(function(i) {
          return i.trim().split(":");
        }) };
      if (iatrule.name === "screen" && iatrule.value) {
        var screens = this.processor.resolveVariants("screen");
        if (iatrule.value in screens)
          return { atrule: (_c = (_b = screens[iatrule.value]().atRules) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : atrule };
        if (["dark", "light"].includes(iatrule.value))
          return { atrule: "@media (prefers-color-scheme: ".concat(iatrule.value, ")") };
      }
      return { atrule };
    };
    CSSParser2.prototype._generateNestProperty = function(props, parent, parentType) {
      var style = new Style(void 0, props);
      if (!parent || !parentType)
        return style;
      if (parentType === "selector") {
        style.selector = parent;
        return style;
      }
      return style.atRule(parent);
    };
    CSSParser2.prototype._generateNestStyle = function(styles, parent, parentType) {
      var _this = this;
      var layer = "utilities";
      var order = layerOrder["utilities"] + 1;
      var group = "block";
      if (!parent)
        return styles;
      if (parentType === "selector") {
        styles.forEach(function(i) {
          if (i instanceof Keyframes)
            return;
          if (!i.selector) {
            i.selector = parent;
          } else {
            var selector_1 = i.selector;
            selector_1 = selector_1.trim().split(/\s*,\s*/g).map(function(i2) {
              return /&/.test(i2) ? i2 : "& ".concat(i2);
            }).join(", ");
            i.selector = /\s*,\s*/.test(parent) ? parent.trim().split(/\s*,\s*/g).map(function(i2) {
              return selector_1.replace(/&/g, i2);
            }).join(", ") : selector_1.replace(/&/g, parent);
          }
          i.updateMeta(layer, group, order);
          _this._addCache(i);
        });
      } else if (parentType === "atRule") {
        var atrule_1 = parent;
        if (this.processor) {
          var directives = this._handleDirectives(parent);
          if (directives) {
            if ("atrule" in directives) {
              atrule_1 = directives.atrule;
            } else if ("layer" in directives) {
              atrule_1 = void 0;
              layer = directives.layer;
              order = layerOrder[layer];
              group = "layer-block";
            } else if ("variants" in directives) {
              var output = [];
              for (var _i = 0, _a = directives.variants; _i < _a.length; _i++) {
                var variant = _a[_i];
                var wrapper = this.processor.wrapWithVariants(variant, styles);
                if (wrapper)
                  output = output.concat(wrapper);
              }
              output.map(function(i) {
                i.updateMeta(layer, group, order);
                _this._addCache(i);
              });
              return output;
            }
          }
        }
        styles.filter(function(i) {
          return !(i instanceof Keyframes);
        }).forEach(function(i) {
          i.atRule(atrule_1);
          i.updateMeta(layer, group, order);
          _this._addCache(i);
        });
      }
      return styles;
    };
    CSSParser2.prototype.parse = function(css, parent, parentType) {
      var _this = this;
      var _a;
      if (css === void 0) {
        css = this.css;
      }
      var styleSheet = new StyleSheet();
      if (!css || isSpace(css))
        return styleSheet;
      var index = 0;
      var firstLetter = searchFrom(css, /\S/, index);
      var len = css.length;
      var _loop_1 = function() {
        var propEnd = searchPropEnd(css, index);
        var nestStart = searchFrom(css, "{", firstLetter);
        var firstChar = css.charAt(firstLetter);
        if (firstChar === "/") {
          switch (css.charAt(firstLetter + 1)) {
            case "/":
              index = firstLetter + 2;
              while (index < len) {
                if (css.charAt(index) === "\n")
                  break;
                index++;
              }
              index += 1;
              break;
            case "*":
              index = firstLetter + 2;
              while (index < len) {
                if (css.charAt(index) === "*" && css.charAt(index + 1) === "/")
                  break;
                index++;
              }
              index += 2;
              break;
          }
        } else if (propEnd === -1 || nestStart !== -1 && propEnd > nestStart) {
          var selector = css.substring(firstLetter, nestStart).trim();
          index = nestStart + 1;
          var nestEnd = this_1._searchGroup(css, index);
          if (nestEnd === -1)
            return "break";
          var rule = css.slice(index, nestEnd);
          if (!/[};]\s*$/.test(rule))
            rule = rule + ";";
          var content = this_1.parse(rule, selector);
          index = nestEnd + 1;
          styleSheet.add(this_1._generateNestStyle(content.children, selector, firstChar === "@" ? "atRule" : "selector"));
        } else if (firstChar === "$") {
          var prop = Property.parse(css.slice(firstLetter, propEnd));
          if (prop && !Array.isArray(prop) && !Array.isArray(prop.name) && prop.value) {
            this_1.variables[prop.name.slice(1)] = prop.value;
          }
          index = propEnd + 1;
        } else if (firstChar === "@") {
          var data = css.slice(firstLetter, propEnd);
          if (this_1.processor) {
            var directives_1 = this_1._handleDirectives(data.trim());
            if (directives_1) {
              if ("atrule" in directives_1) {
                var atRule = InlineAtRule.parse(directives_1.atrule);
                if (atRule)
                  styleSheet.add(this_1._generateNestProperty(atRule, parent, parentType));
              } else if ("apply" in directives_1 && directives_1.apply) {
                var result = this_1.processor.compile(directives_1.apply, void 0, false, false, function(ignored) {
                  if ("." + ignored in _this._cache)
                    return _this._cache["." + ignored];
                });
                styleSheet.add(result.styleSheet.clone().children.map(function(i) {
                  if (!(i instanceof Keyframes)) {
                    i.selector = void 0;
                    if (directives_1.important) {
                      i.property.map(function(i2) {
                        return i2.important = true;
                      });
                    }
                  }
                  return i;
                }));
              }
            }
          } else {
            var atRule = InlineAtRule.parse(data);
            if (atRule)
              styleSheet.add(this_1._generateNestProperty(atRule, parent, parentType));
          }
          index = propEnd + 1;
        } else {
          var prop = Property.parse(css.slice(firstLetter, propEnd));
          index = propEnd + 1;
          if (prop) {
            if (Array.isArray(prop)) {
              prop.filter(function(p) {
                var _a2;
                return (_a2 = p.value) === null || _a2 === void 0 ? void 0 : _a2.match(/theme\([^)]*\)/);
              }).forEach(function(p) {
                return p.value = _this._loadTheme(p.value);
              });
            } else if ((_a = prop.value) === null || _a === void 0 ? void 0 : _a.match(/theme\([^)]*\)/)) {
              prop.value = this_1._loadTheme(prop.value);
            }
            styleSheet.add(this_1._generateNestProperty(prop, parent, parentType));
          }
        }
        firstLetter = searchFrom(css, /\S/, index);
      };
      var this_1 = this;
      while (firstLetter !== -1) {
        var state_1 = _loop_1();
        if (state_1 === "break")
          break;
      }
      if (!parent)
        this._cache = {};
      return styleSheet.combine();
    };
    return CSSParser2;
  })()
);
var ClassParser = (
  /** @class */
  (function() {
    function ClassParser2(classNames, separator, variants) {
      if (separator === void 0) {
        separator = ":";
      }
      this.classNames = classNames;
      this.separator = separator;
      this.variants = variants || [];
      this.index = 0;
    }
    ClassParser2.prototype._handle_group = function(removeDuplicated) {
      if (removeDuplicated === void 0) {
        removeDuplicated = true;
      }
      if (!this.classNames)
        return [];
      var preChar;
      var char;
      var group;
      var func;
      var variant;
      var variants = [];
      var variantStart = this.index + 1;
      var classStart = this.index + 1;
      var groupStart = this.index + 1;
      var important = false;
      var ignoreSpace = false;
      var ignoreBracket = false;
      var insideSquareBracket = false;
      var brackets = 0;
      var sepLength = this.separator.length;
      var parts = [];
      var length = this.classNames.length;
      while (this.index < length) {
        this.index++;
        char = this.classNames.charAt(this.index);
        if (insideSquareBracket) {
          if (" \n	\r".includes(char)) {
            insideSquareBracket = false;
          } else {
            if (char === "]")
              insideSquareBracket = false;
            continue;
          }
        }
        switch (char) {
          case "!":
            important = true;
            break;
          case this.separator[0]:
            if (this.classNames.slice(this.index, this.index + sepLength) === this.separator) {
              variant = this.classNames.slice(variantStart, this.index);
              if (variant.charAt(0) === "!")
                variant = variant.slice(1);
              if (this.variants.includes(variant)) {
                variants.push(variant);
                this.index += sepLength - 1;
                variantStart = this.index + 1;
                ignoreSpace = true;
              }
            }
            break;
          case "[":
            insideSquareBracket = true;
            break;
          case "(":
            preChar = this.classNames.charAt(this.index - 1);
            if (preChar === "-" || !ignoreSpace && preChar === " ") {
              ignoreBracket = true;
            } else if (ignoreSpace) {
              group = this._handle_group();
            } else {
              brackets += 1;
              func = this.classNames.slice(groupStart, this.index);
              while (!isSpace(this.classNames.charAt(this.index))) {
                this.index++;
              }
              this.index--;
            }
            ignoreSpace = false;
            break;
          case '"':
          case "`":
          case "'":
          case ")":
          case " ":
          case "\n":
          case "	":
          case "\r":
            if (!ignoreSpace) {
              if (groupStart !== this.index) {
                var raw = this.classNames.slice(classStart, this.index);
                var start = classStart - 1;
                var end = this.index - 1;
                if (Array.isArray(group)) {
                  parts.push({ raw, start, end, variants, content: group, type: "group", important });
                  group = void 0;
                } else if (func) {
                  var utility = this.classNames.slice(variantStart, this.index);
                  parts.push({ raw, start, end, variants, content: utility, type: "utility", important });
                  func = void 0;
                } else if (ignoreBracket && char === ")") {
                  var utility = this.classNames.slice(variantStart, this.index + 1);
                  parts.push({ raw: raw + ")", start, end: this.index, variants, content: important ? utility.slice(1) : utility, type: "utility", important });
                } else {
                  var utility = this.classNames.slice(variantStart, this.index);
                  if (utility.charAt(0) === "*") {
                    parts.push({ raw, start, end, variants, content: utility.slice(1), type: "alias", important });
                  } else {
                    parts.push({ raw, start, end, variants, content: utility.charAt(0) === "!" ? utility.slice(1) : utility, type: "utility", important });
                  }
                }
                variants = [];
                important = false;
              }
              groupStart = this.index + 1;
              classStart = this.index + 1;
            }
            variantStart = this.index + 1;
            break;
          default:
            ignoreSpace = false;
        }
        if (char === ")") {
          brackets -= 1;
          if (!ignoreBracket && brackets < 0)
            break;
          ignoreBracket = false;
        }
      }
      if (removeDuplicated) {
        var newParts_1 = [];
        var cache_1 = [];
        parts.forEach(function(item) {
          if (!cache_1.includes(item.raw)) {
            cache_1.push(item.raw);
            newParts_1.push(item);
          }
        });
        return newParts_1;
      }
      return parts;
    };
    ClassParser2.prototype.parse = function(removeDuplicated) {
      if (removeDuplicated === void 0) {
        removeDuplicated = true;
      }
      if (!this.classNames)
        return [];
      this.classNames = "(" + this.classNames + ")";
      var elements = this._handle_group(removeDuplicated);
      this.index = 0;
      this.classNames = this.classNames.slice(1, -1);
      return elements;
    };
    return ClassParser2;
  })()
);
export {
  CSSParser,
  ClassParser,
  HTMLParser
};
/*! Bundled license information:

windicss/utils/parser/index.mjs:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=parser.development.mjs.map