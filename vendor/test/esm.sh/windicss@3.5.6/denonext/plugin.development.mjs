/* esm.sh - windicss@3.5.6/plugin */
// node_modules/windicss/plugin/index.mjs
var createPlugin = function(plugin, config) {
  return {
    handler: plugin,
    config
  };
};
createPlugin.withOptions = function(pluginFunction, configFunction) {
  if (configFunction === void 0) {
    configFunction = function() {
      return {};
    };
  }
  var optionsFunction = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      __options: options,
      handler: pluginFunction(options),
      config: configFunction(options)
    };
  };
  optionsFunction.__isOptionsFunction = true;
  optionsFunction.__pluginFunction = pluginFunction;
  optionsFunction.__configFunction = configFunction;
  return optionsFunction;
};
export {
  createPlugin as default
};
//# sourceMappingURL=plugin.development.mjs.map