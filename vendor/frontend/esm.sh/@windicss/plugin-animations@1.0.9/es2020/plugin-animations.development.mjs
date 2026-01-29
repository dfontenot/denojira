/* esm.sh - @windicss/plugin-animations@1.0.9 */
import*as __0$ from"/windicss/plugin?target=es2020&dev";var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({__esModule:true},m);switch(n){case"windicss/plugin":return c(__0$);default:console.error('module "'+n+'" not found');return null;}};
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@windicss/plugin-animations/animate/keyframes/keyframes.js
var require_keyframes = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/keyframes.js"(exports) {
    var keyframeBounce = {
      "from, 20%, 53%, 80%, to": {
        animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        transform: "translate3d(0, 0, 0)"
      },
      "40%, 43%": {
        animationTimingFunction: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        transform: "translate3d(0, -30px, 0)"
      },
      "70%": {
        animationTimingFunction: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        transform: "translate3d(0, -15px, 0)"
      },
      "90%": {
        transform: "translate3d(0, -4px, 0)"
      }
    };
    var keyframeFlash = {
      "from, 50%, to": {
        opacity: "1"
      },
      "25%, 75%": {
        opacity: "0"
      }
    };
    var keyframePulse = {
      "from": {
        transform: "scale3d(1, 1, 1)"
      },
      "50%": {
        transform: "scale3d(1.05, 1.05, 1.05)"
      },
      "to": {
        transform: "scale3d(1, 1, 1)"
      }
    };
    var keyframeRubberBand = {
      "from": {
        transform: "scale3d(1, 1, 1)"
      },
      "30%": {
        transform: "scale3d(1.25, 0.75, 1)"
      },
      "40%": {
        transform: "scale3d(0.75, 1.25, 1)"
      },
      "50%": {
        transform: "scale3d(1.15, 0.85, 1)"
      },
      "65%": {
        transform: "scale3d(0.95, 1.05, 1)"
      },
      "75%": {
        transform: "scale3d(1.05, 0.95, 1)"
      },
      "to": {
        transform: "scale3d(1, 1, 1)"
      }
    };
    var keyframeShakeX = {
      "from, to": {
        transform: "translate3d(0, 0, 0)"
      },
      "10%, 30%, 50%, 70%, 90%": {
        transform: "translate3d(-10px, 0, 0)"
      },
      "20%, 40%, 60%, 80%": {
        transform: "translate3d(10px, 0, 0)"
      }
    };
    var keyframeShakeY = {
      "from, to": {
        transform: "translate3d(0, 0, 0)"
      },
      "10%, 30%, 50%, 70%, 90%": {
        transform: "translate3d(0, -10px, 0)"
      },
      "20%, 40%, 60%, 80%": {
        transform: "translate3d(0, 10px, 0)"
      }
    };
    var keyframeHeadShake = {
      "0%": {
        transform: "translateX(0)"
      },
      "6.5%": {
        transform: "translateX(-6px) rotateY(-9deg)"
      },
      "18.5%": {
        transform: "translateX(5px) rotateY(7deg)"
      },
      "31.5%": {
        transform: "translateX(-3px) rotateY(-5deg)"
      },
      "43.5%": {
        transform: "translateX(2px) rotateY(3deg)"
      },
      "50%": {
        transform: "translateX(0)"
      }
    };
    var keyframeSwing = {
      "20%": {
        transform: "rotate3d(0, 0, 1, 15deg)"
      },
      "40%": {
        transform: "rotate3d(0, 0, 1, -10deg)"
      },
      "60%": {
        transform: "rotate3d(0, 0, 1, 5deg)"
      },
      "80%": {
        transform: "rotate3d(0, 0, 1, -5deg)"
      },
      "to": {
        transform: "rotate3d(0, 0, 1, 0deg)"
      }
    };
    var keyframeTada = {
      "from": {
        transform: "scale3d(1, 1, 1)"
      },
      "10%, 20%": {
        transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"
      },
      "30%, 50%, 70%, 90%": {
        transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
      },
      "40%, 60%, 80%": {
        transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
      },
      "to": {
        transform: "scale3d(1, 1, 1)"
      }
    };
    var keyframeWobble = {
      "from": {
        transform: "translate3d(0, 0, 0)"
      },
      "15%": {
        transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"
      },
      "30%": {
        transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"
      },
      "45%": {
        transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"
      },
      "60%": {
        transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"
      },
      "75%": {
        transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"
      },
      "to": {
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeJello = {
      "from, 11.1% to": {
        transform: "translate3d(0, 0, 0)"
      },
      "22.2%": {
        transform: "skewX(-12.5deg) skewY(-12.5deg)"
      },
      "33.3%": {
        transform: "skewX(6.25deg) skewY(6.25deg)"
      },
      "44.4%": {
        transform: "skewX(-3.125deg) skewY(-3.125deg)"
      },
      "55.5%": {
        transform: "skewX(1.5625deg) skewY(1.5625deg)"
      },
      "66.6%": {
        transform: "skewX(-0.78125deg) skewY(-0.78125deg)"
      },
      "77.7%": {
        transform: "skewX(0.390625deg) skewY(0.390625deg)"
      },
      "88.8%": {
        transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)"
      }
    };
    var keyframeHeartBeat = {
      "0%": {
        transform: "scale(1)"
      },
      "14%": {
        transform: "scale(1.3)"
      },
      "28%": {
        transform: "scale(1)"
      },
      "42%": {
        transform: "scale(1.3)"
      },
      "70%": {
        transform: "scale(1)"
      }
    };
    var keyframeHinge = {
      "0%": {
        transformOrigin: "top left",
        animationTimingFunction: "ease-in-out"
      },
      "20%, 60%": {
        transform: "rotate3d(0, 0, 1, 80deg)",
        transformOrigin: "top left",
        animationTimingFunction: "ease-in-out"
      },
      "40%, 80%": {
        transform: "rotate3d(0, 0, 1, 60deg)",
        transformOrigin: "top left",
        animationTimingFunction: "ease-in-out"
      },
      "to": {
        transform: "translate3d(0, 700px, 0)",
        opacity: "0"
      }
    };
    var keyframeJackInTheBox = {
      "from": {
        opacity: "0",
        transformOrigin: "center bottom",
        transform: "scale(0.1) rotate(30deg)"
      },
      "50%": {
        transform: "rotate(-10deg)"
      },
      "70%": {
        transform: "rotate(3deg)"
      },
      "to": {
        transform: "scale(1)"
      }
    };
    exports.keyframeBounce = keyframeBounce;
    exports.keyframeFlash = keyframeFlash;
    exports.keyframePulse = keyframePulse;
    exports.keyframeRubberBand = keyframeRubberBand;
    exports.keyframeShakeX = keyframeShakeX;
    exports.keyframeShakeY = keyframeShakeY;
    exports.keyframeHeadShake = keyframeHeadShake;
    exports.keyframeSwing = keyframeSwing;
    exports.keyframeTada = keyframeTada;
    exports.keyframeWobble = keyframeWobble;
    exports.keyframeJello = keyframeJello;
    exports.keyframeHeartBeat = keyframeHeartBeat;
    exports.keyframeHinge = keyframeHinge;
    exports.keyframeJackInTheBox = keyframeJackInTheBox;
  }
});

// node_modules/@windicss/plugin-animations/animate/keyframes/lightspeed.js
var require_lightspeed = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/lightspeed.js"(exports) {
    var keyframeLightSpeedInRight = {
      "from": {
        opacity: "0",
        transform: "translate3d(100%, 0, 0) skewX(-30deg)"
      },
      "60%": {
        opacity: "1",
        transform: "skewX(20deg)"
      },
      "80%": {
        transform: "skewX(-5deg)"
      },
      "to": {
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeLightSpeedInLeft = {
      "from": {
        opacity: "0",
        transform: "translate3d(100%, 0, 0) skewX(-30deg)"
      },
      "60%": {
        opacity: "1",
        transform: "skewX(20deg)"
      },
      "80%": {
        transform: "skewX(-5deg)"
      },
      "to": {
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeLightSpeedOutLeft = {
      "from": {
        opacity: "1"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(100%, 0, 0) skewX(30deg)"
      }
    };
    var keyframeLightSpeedOutRight = {
      "from": {
        opacity: "1"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(100%, 0, 0) skewX(30deg)"
      }
    };
    exports.keyframeLightSpeedInLeft = keyframeLightSpeedInLeft;
    exports.keyframeLightSpeedInRight = keyframeLightSpeedInRight;
    exports.keyframeLightSpeedOutLeft = keyframeLightSpeedOutLeft;
    exports.keyframeLightSpeedOutRight = keyframeLightSpeedOutRight;
  }
});

// node_modules/@windicss/plugin-animations/animate/keyframes/flip.js
var require_flip = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/flip.js"(exports) {
    var keyframeFlip = {
      "from": {
        transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
        animationTimingFunction: "ease-out"
      },
      "40%": {
        transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",
        animationTimingFunction: "ease-out"
      },
      "50%": {
        transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",
        animationTimingFunction: "ease-in"
      },
      "80%": {
        transform: "perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
        animationTimingFunction: "ease-in"
      },
      "to": {
        transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
        animationTimingFunction: "ease-in"
      }
    };
    var keyframeFlipInX = {
      "from": {
        transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
        animationTimingFunction: "ease-in",
        opacity: "0"
      },
      "40%": {
        transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)",
        animationTimingFunction: "ease-in"
      },
      "60%": {
        transform: "perspective(400px) rotate3d(1, 0, 0, 10deg)",
        opacity: "1"
      },
      "80%": {
        transform: "perspective(400px) rotate3d(1, 0, 0, -5deg)"
      },
      "to": {
        transform: "perspective(400px)"
      }
    };
    var keyframeFlipInY = {
      "from": {
        transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)",
        animationTimingFunction: "ease-in",
        opacity: "0"
      },
      "40%": {
        transform: "perspective(400px) rotate3d(0, 1, 0, -20deg)",
        animationTimingFunction: "ease-in"
      },
      "60%": {
        transform: "perspective(400px) rotate3d(0, 1, 0, 10deg)",
        opacity: "1"
      },
      "80%": {
        transform: "perspective(400px) rotate3d(0, 1, 0, -5deg)"
      },
      "to": {
        transform: "perspective(400px)"
      }
    };
    var keyframeFlipOutX = {
      "from": {
        transform: "perspective(400px)"
      },
      "30%": {
        transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)",
        opacity: "1"
      },
      "to": {
        transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
        opacity: "0"
      }
    };
    var keyframeFlipOutY = {
      "from": {
        transform: "perspective(400px)"
      },
      "30%": {
        transform: "perspective(400px) rotate3d(0, 1, 0, -15deg)",
        opacity: "1"
      },
      "to": {
        transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)",
        opacity: "0"
      }
    };
    exports.keyframeFlip = keyframeFlip;
    exports.keyframeFlipInX = keyframeFlipInX;
    exports.keyframeFlipInY = keyframeFlipInY;
    exports.keyframeFlipOutX = keyframeFlipOutX;
    exports.keyframeFlipOutY = keyframeFlipOutY;
  }
});

// node_modules/@windicss/plugin-animations/animate/keyframes/rotateIn.js
var require_rotateIn = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/rotateIn.js"(exports) {
    var keyframeRotateIn = {
      "from": {
        transformOrigin: "center",
        transform: "rotate3d(0, 0, 1, -200deg)",
        opacity: "0"
      },
      "to": {
        transformOrigin: "center",
        transform: "translate3d(0, 0, 0)",
        opacity: "1"
      }
    };
    var keyframeRotateInDownLeft = {
      "from": {
        transformOrigin: "left bottom",
        transform: "rotate3d(0, 0, 1, -45deg)",
        opacity: "0"
      },
      "to": {
        transformOrigin: "left bottom",
        transform: "translate3d(0, 0, 0)",
        opacity: "1"
      }
    };
    var keyframeRotateInDownRight = {
      "from": {
        transformOrigin: "right bottom",
        transform: "rotate3d(0, 0, 1, 45deg)",
        opacity: "0"
      },
      "to": {
        transformOrigin: "right bottom",
        transform: "translate3d(0, 0, 0)",
        opacity: "1"
      }
    };
    var keyframeRotateInUpLeft = {
      "from": {
        transformOrigin: "left top",
        transform: "rotate3d(0, 0, 1, 45deg)",
        opacity: "0"
      },
      "to": {
        transformOrigin: "left top",
        transform: "translate3d(0, 0, 0)",
        opacity: "1"
      }
    };
    var keyframeRotateInUpRight = {
      "from": {
        transformOrigin: "right bottom",
        transform: "rotate3d(0, 0, 1, -90deg)",
        opacity: "0"
      },
      "to": {
        transformOrigin: "right bottom",
        transform: "translate3d(0, 0, 0)",
        opacity: "1"
      }
    };
    exports.keyframeRotateIn = keyframeRotateIn;
    exports.keyframeRotateInDownLeft = keyframeRotateInDownLeft;
    exports.keyframeRotateInDownRight = keyframeRotateInDownRight;
    exports.keyframeRotateInUpLeft = keyframeRotateInUpLeft;
    exports.keyframeRotateInUpRight = keyframeRotateInUpRight;
  }
});

// node_modules/@windicss/plugin-animations/animate/keyframes/rotateOut.js
var require_rotateOut = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/rotateOut.js"(exports) {
    var keyframeRotateOut = {
      "from": {
        transformOrigin: "center",
        opacity: "1"
      },
      "to": {
        transformOrigin: "center",
        transform: "rotate3d(0, 0, 1, 200deg)",
        opacity: "0"
      }
    };
    var keyframeRotateOutDownLeft = {
      "from": {
        transformOrigin: "left bottom",
        opacity: "1"
      },
      "to": {
        transformOrigin: "left bottom",
        transform: "rotate3d(0, 0, 1, 45deg)",
        opacity: "0"
      }
    };
    var keyframeRotateOutDownRight = {
      "from": {
        transformOrigin: "right bottom",
        opacity: "1"
      },
      "to": {
        transformOrigin: "right bottom",
        transform: "rotate3d(0, 0, 1, -45deg)",
        opacity: "0"
      }
    };
    var keyframeRotateOutUpLeft = {
      "from": {
        transformOrigin: "left bottom",
        opacity: "1"
      },
      "to": {
        transformOrigin: "left bottom",
        transform: "rotate3d(0, 0, 1, -45deg)",
        opacity: "0"
      }
    };
    var keyframeRotateOutUpRight = {
      "from": {
        transformOrigin: "right bottom",
        opacity: "1"
      },
      "to": {
        transformOrigin: "left bottom",
        transform: "rotate3d(0, 0, 1, 90deg)",
        opacity: "0"
      }
    };
    exports.keyframeRotateOut = keyframeRotateOut;
    exports.keyframeRotateOutDownLeft = keyframeRotateOutDownLeft;
    exports.keyframeRotateOutDownRight = keyframeRotateOutDownRight;
    exports.keyframeRotateOutUpLeft = keyframeRotateOutUpLeft;
    exports.keyframeRotateOutUpRight = keyframeRotateOutUpRight;
  }
});

// node_modules/@windicss/plugin-animations/animate/keyframes/roll.js
var require_roll = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/roll.js"(exports) {
    var keyframeRollIn = {
      "from": {
        opacity: "0",
        transform: "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"
      },
      "to": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeRollOut = {
      "from": {
        opacity: "1"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"
      }
    };
    exports.keyframeRollIn = keyframeRollIn;
    exports.keyframeRollOut = keyframeRollOut;
  }
});

// node_modules/@windicss/plugin-animations/animate/keyframes/zoomIn.js
var require_zoomIn = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/zoomIn.js"(exports) {
    var keyframeZoomIn = {
      "from": {
        opacity: "0",
        transform: "scale3d(0.3, 0.3, 0.3)"
      },
      "50%": {
        opacity: "1"
      }
    };
    var keyframeZoomInDown = {
      "from": {
        opacity: "0",
        transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",
        animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
      },
      "60%": {
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
        animationTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1)"
      }
    };
    var keyframeZoomInLeft = {
      "from": {
        opacity: "0",
        transform: "scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",
        animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
      },
      "60%": {
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",
        animationTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1)"
      }
    };
    var keyframeZoomInRight = {
      "from": {
        opacity: "0",
        transform: "scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",
        animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
      },
      "60%": {
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",
        animationTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1)"
      }
    };
    var keyframeZoomInUp = {
      "from": {
        opacity: "0",
        transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",
        animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
      },
      "60%": {
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
        animationTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1)"
      }
    };
    exports.keyframeZoomIn = keyframeZoomIn;
    exports.keyframeZoomInDown = keyframeZoomInDown;
    exports.keyframeZoomInLeft = keyframeZoomInLeft;
    exports.keyframeZoomInRight = keyframeZoomInRight;
    exports.keyframeZoomInUp = keyframeZoomInUp;
  }
});

// node_modules/@windicss/plugin-animations/animate/keyframes/zoomOut.js
var require_zoomOut = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/zoomOut.js"(exports) {
    var keyframeZoomOut = {
      "from": {
        opacity: "1"
      },
      "50%": {
        opacity: "0",
        transform: "scale3d(0.3, 0.3, 0.3)"
      },
      "to": {
        opacity: "0"
      }
    };
    var keyframeZoomOutDown = {
      "40%": {
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
        animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
      },
      "to": {
        opacity: "0",
        transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",
        transformOrigin: "center bottom",
        animationTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1)"
      }
    };
    var keyframeZoomOutLeft = {
      "40%": {
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"
      },
      "to": {
        opacity: "0",
        transform: "scale(0.1) translate3d(-2000px, 0, 0)",
        transformOrigin: "left center"
      }
    };
    var keyframeZoomOutRight = {
      "40%": {
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"
      },
      "to": {
        opacity: "0",
        transform: "scale(0.1) translate3d(2000px, 0, 0)",
        transformOrigin: "right center"
      }
    };
    var keyframeZoomOutUp = {
      "40%": {
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
        animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
      },
      "to": {
        opacity: "0",
        transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",
        transformOrigin: "center bottom",
        animationTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1)"
      }
    };
    exports.keyframeZoomOut = keyframeZoomOut;
    exports.keyframeZoomOutDown = keyframeZoomOutDown;
    exports.keyframeZoomOutLeft = keyframeZoomOutLeft;
    exports.keyframeZoomOutRight = keyframeZoomOutRight;
    exports.keyframeZoomOutUp = keyframeZoomOutUp;
  }
});

// node_modules/@windicss/plugin-animations/animate/keyframes/bounceIn.js
var require_bounceIn = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/bounceIn.js"(exports) {
    var keyframeBounceIn = {
      "from, 20%, 40%, 60%, 80%, to": {
        animationTimingFunction: "ease-in-out"
      },
      "0%": {
        opacity: "0",
        transform: "scale3d(0.3, 0.3, 0.3)"
      },
      "20%": {
        transform: "scale3d(1.1, 1.1, 1.1)"
      },
      "40%": {
        transform: "scale3d(0.9, 0.9, 0.9)"
      },
      "60%": {
        transform: "scale3d(1.03, 1.03, 1.03)",
        opacity: "1"
      },
      "80%": {
        transform: "scale3d(0.97, 0.97, 0.97)"
      },
      "to": {
        opacity: "1",
        transform: "scale3d(1, 1, 1)"
      }
    };
    var keyframeBounceInDown = {
      "from, 60%, 75%, 90%, to": {
        animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)"
      },
      "0%": {
        opacity: "0",
        transform: "translate3d(0, -3000px, 0)"
      },
      "60%": {
        opacity: "1",
        transform: "translate3d(0, 25px, 0)"
      },
      "75%": {
        transform: "translate3d(0, -10px, 0)"
      },
      "90%": {
        transform: "translate3d(0, 5px, 0)"
      },
      "to": {
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeBounceInLeft = {
      "from, 60%, 75%, 90%, to": {
        animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)"
      },
      "0%": {
        opacity: "0",
        transform: "translate3d(-3000px, 0, 0)"
      },
      "60%": {
        opacity: "1",
        transform: "translate3d(25px, 0, 0)"
      },
      "75%": {
        transform: "translate3d(-10px, 0, 0)"
      },
      "90%": {
        transform: "translate3d(5px, 0, 0)"
      },
      "to": {
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeBounceInRight = {
      "from, 60%, 75%, 90%, to": {
        animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)"
      },
      "0%": {
        opacity: "0",
        transform: "translate3d(3000px, 0, 0)"
      },
      "60%": {
        opacity: "1",
        transform: "translate3d(-25px, 0, 0)"
      },
      "75%": {
        transform: "translate3d(10px, 0, 0)"
      },
      "90%": {
        transform: "translate3d(-5px, 0, 0)"
      },
      "to": {
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeBounceInUp = {
      "from, 60%, 75%, 90%, to": {
        animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)"
      },
      "0%": {
        opacity: "0",
        transform: "translate3d(0, 3000px, 0)"
      },
      "60%": {
        opacity: "1",
        transform: "translate3d(0, -20px, 0)"
      },
      "75%": {
        transform: "translate3d(0, 10px, 0)"
      },
      "90%": {
        transform: "translate3d(0, -5px, 0)"
      },
      "to": {
        transform: "translate3d(0, 0, 0)"
      }
    };
    exports.keyframeBounceIn = keyframeBounceIn;
    exports.keyframeBounceInDown = keyframeBounceInDown;
    exports.keyframeBounceInLeft = keyframeBounceInLeft;
    exports.keyframeBounceInRight = keyframeBounceInRight;
    exports.keyframeBounceInUp = keyframeBounceInUp;
  }
});

// node_modules/@windicss/plugin-animations/animate/keyframes/bounceOut.js
var require_bounceOut = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/bounceOut.js"(exports) {
    var keyframeBounceOut = {
      "20%": {
        transform: "scale3d(0.9, 0.9, 0.9)"
      },
      "50%, 55%": {
        opacity: "1",
        transform: "scale3d(1.1, 1.1, 1.1)"
      },
      "to": {
        opacity: "0",
        transform: "scale3d(0.3, 0.3, 0.3)"
      }
    };
    var keyframeBounceOutDown = {
      "20%": {
        transform: "translate3d(0, 10px, 0)"
      },
      "40%, 45%": {
        opacity: "1",
        transform: "translate3d(0, -20px, 0)"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(0, 2000px, 0)"
      }
    };
    var keyframeBounceOutLeft = {
      "20%": {
        opacity: "1",
        transform: "translate3d(20px, 0, 0)"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(-2000px, 0, 0)"
      }
    };
    var keyframeBounceOutRight = {
      "20%": {
        opacity: "1",
        transform: "translate3d(-20px, 0, 0)"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(2000px, 0, 0)"
      }
    };
    var keyframeBounceOutUp = {
      "20%": {
        transform: "translate3d(0, -10px, 0)"
      },
      "40%, 45%": {
        opacity: "1",
        transform: "translate3d(0, 20px, 0)"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(0, -2000px, 0)"
      }
    };
    exports.keyframeBounceOut = keyframeBounceOut;
    exports.keyframeBounceOutDown = keyframeBounceOutDown;
    exports.keyframeBounceOutLeft = keyframeBounceOutLeft;
    exports.keyframeBounceOutRight = keyframeBounceOutRight;
    exports.keyframeBounceOutUp = keyframeBounceOutUp;
  }
});

// node_modules/@windicss/plugin-animations/animate/keyframes/slideIn.js
var require_slideIn = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/slideIn.js"(exports) {
    var keyframeSlideInDown = {
      "from": {
        transform: "translate3d(0, -100%, 0)",
        visibility: "visible"
      },
      "to": {
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeSlideInLeft = {
      "from": {
        transform: "translate3d(-100%, 0, 0)",
        visibility: "visible"
      },
      "to": {
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeSlideInRight = {
      "from": {
        transform: "translate3d(100%, 0, 0)",
        visibility: "visible"
      },
      "to": {
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeSlideInUp = {
      "from": {
        transform: "translate3d(0, 100%, 0)",
        visibility: "visible"
      },
      "to": {
        transform: "translate3d(0, 0, 0)"
      }
    };
    exports.keyframeSlideInDown = keyframeSlideInDown;
    exports.keyframeSlideInLeft = keyframeSlideInLeft;
    exports.keyframeSlideInRight = keyframeSlideInRight;
    exports.keyframeSlideInUp = keyframeSlideInUp;
  }
});

// node_modules/@windicss/plugin-animations/animate/keyframes/slideOut.js
var require_slideOut = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/slideOut.js"(exports) {
    var keyframeSlideOutDown = {
      "from": {
        transform: "translate3d(0, 0, 0)"
      },
      "to": {
        visibility: "hidden",
        transform: "translate3d(0, 100%, 0)"
      }
    };
    var keyframeSlideOutLeft = {
      "from": {
        transform: "translate3d(0, 0, 0)"
      },
      "to": {
        visibility: "hidden",
        transform: "translate3d(-100%, 0, 0)"
      }
    };
    var keyframeSlideOutRight = {
      "from": {
        transform: "translate3d(0, 0, 0)"
      },
      "to": {
        visibility: "hidden",
        transform: "translate3d(100%, 0, 0)"
      }
    };
    var keyframeSlideOutUp = {
      "from": {
        transform: "translate3d(0, 0, 0)"
      },
      "to": {
        visibility: "hidden",
        transform: "translate3d(0, -100%, 0)"
      }
    };
    exports.keyframeSlideOutDown = keyframeSlideOutDown;
    exports.keyframeSlideOutLeft = keyframeSlideOutLeft;
    exports.keyframeSlideOutRight = keyframeSlideOutRight;
    exports.keyframeSlideOutUp = keyframeSlideOutUp;
  }
});

// node_modules/@windicss/plugin-animations/animate/keyframes/fadeIn.js
var require_fadeIn = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/fadeIn.js"(exports) {
    var keyframeFadeIn = {
      "from": {
        opacity: "0"
      },
      "to": {
        opacity: "1"
      }
    };
    var keyframeFadeInDown = {
      "from": {
        opacity: "0",
        transform: "translate3d(0, -100%, 0)"
      },
      "to": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeFadeInDownBig = {
      "from": {
        opacity: "0",
        transform: "translate3d(0, -2000px, 0)"
      },
      "to": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeFadeInLeft = {
      "from": {
        opacity: "0",
        transform: "translate3d(-100%, 0, 0)"
      },
      "to": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeFadeInLeftBig = {
      "from": {
        opacity: "0",
        transform: "translate3d(-2000px, 0, 0)"
      },
      "to": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeFadeInRight = {
      "from": {
        opacity: "0",
        transform: "translate3d(100%, 0, 0)"
      },
      "to": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeFadeInRightBig = {
      "from": {
        opacity: "0",
        transform: "translate3d(2000px, 0, 0)"
      },
      "to": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeFadeInUp = {
      "from": {
        opacity: "0",
        transform: "translate3d(0, 100%, 0)"
      },
      "to": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeFadeInUpBig = {
      "from": {
        opacity: "0",
        transform: "translate3d(0, 2000px, 0)"
      },
      "to": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeFadeInTopLeft = {
      "from": {
        opacity: "0",
        transform: "translate3d(-100%, -100%, 0)"
      },
      "to": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeFadeInTopRight = {
      "from": {
        opacity: "0",
        transform: "translate3d(100%, -100%, 0)"
      },
      "to": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeFadeInBottomLeft = {
      "from": {
        opacity: "0",
        transform: "translate3d(-100%, 100%, 0)"
      },
      "to": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      }
    };
    var keyframeFadeInBottomRight = {
      "from": {
        opacity: "0",
        transform: "translate3d(100%, 100%, 0)"
      },
      "to": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      }
    };
    exports.keyframeFadeIn = keyframeFadeIn;
    exports.keyframeFadeInDown = keyframeFadeInDown;
    exports.keyframeFadeInDownBig = keyframeFadeInDownBig;
    exports.keyframeFadeInLeft = keyframeFadeInLeft;
    exports.keyframeFadeInLeftBig = keyframeFadeInLeftBig;
    exports.keyframeFadeInRight = keyframeFadeInRight;
    exports.keyframeFadeInRightBig = keyframeFadeInRightBig;
    exports.keyframeFadeInUp = keyframeFadeInUp;
    exports.keyframeFadeInUpBig = keyframeFadeInUpBig;
    exports.keyframeFadeInTopLeft = keyframeFadeInTopLeft;
    exports.keyframeFadeInTopRight = keyframeFadeInTopRight;
    exports.keyframeFadeInBottomLeft = keyframeFadeInBottomLeft;
    exports.keyframeFadeInBottomRight = keyframeFadeInBottomRight;
  }
});

// node_modules/@windicss/plugin-animations/animate/keyframes/fadeOut.js
var require_fadeOut = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/fadeOut.js"(exports) {
    var keyframeFadeOut = {
      "from": {
        opacity: "1"
      },
      "to": {
        opacity: "0"
      }
    };
    var keyframeFadeOutDown = {
      "from": {
        opacity: "1"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(0, 100%, 0)"
      }
    };
    var keyframeFadeOutDownBig = {
      "from": {
        opacity: "1"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(0, 2000px, 0)"
      }
    };
    var keyframeFadeOutLeft = {
      "from": {
        opacity: "1"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(-100%, 0, 0)"
      }
    };
    var keyframeFadeOutLeftBig = {
      "from": {
        opacity: "1"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(-2000px, 0, 0)"
      }
    };
    var keyframeFadeOutRight = {
      "from": {
        opacity: "1"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(100%, 0, 0)"
      }
    };
    var keyframeFadeOutRightBig = {
      "from": {
        opacity: "1"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(2000px, 0, 0)"
      }
    };
    var keyframeFadeOutUp = {
      "from": {
        opacity: "1"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(0, -100%, 0)"
      }
    };
    var keyframeFadeOutUpBig = {
      "from": {
        opacity: "1"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(0, -2000px, 0)"
      }
    };
    var keyframeFadeOutTopLeft = {
      "from": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(-100%, -100%, 0)"
      }
    };
    var keyframeFadeOutTopRight = {
      "from": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(100%, -100%, 0)"
      }
    };
    var keyframeFadeOutBottomLeft = {
      "from": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(-100%, 100%, 0)"
      }
    };
    var keyframeFadeOutBottomRight = {
      "from": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)"
      },
      "to": {
        opacity: "0",
        transform: "translate3d(100%, 100%, 0)"
      }
    };
    exports.keyframeFadeOut = keyframeFadeOut;
    exports.keyframeFadeOutDown = keyframeFadeOutDown;
    exports.keyframeFadeOutDownBig = keyframeFadeOutDownBig;
    exports.keyframeFadeOutLeft = keyframeFadeOutLeft;
    exports.keyframeFadeOutLeftBig = keyframeFadeOutLeftBig;
    exports.keyframeFadeOutRight = keyframeFadeOutRight;
    exports.keyframeFadeOutRightBig = keyframeFadeOutRightBig;
    exports.keyframeFadeOutUp = keyframeFadeOutUp;
    exports.keyframeFadeOutUpBig = keyframeFadeOutUpBig;
    exports.keyframeFadeOutTopLeft = keyframeFadeOutTopLeft;
    exports.keyframeFadeOutTopRight = keyframeFadeOutTopRight;
    exports.keyframeFadeOutBottomLeft = keyframeFadeOutBottomLeft;
    exports.keyframeFadeOutBottomRight = keyframeFadeOutBottomRight;
  }
});

// node_modules/@windicss/plugin-animations/animate/keyframes/backIn.js
var require_backIn = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/backIn.js"(exports) {
    var keyframeBackInUp = {
      "0%": {
        opacity: "0.7",
        transform: "translateY(1200px) scale(0.7)"
      },
      "80%": {
        opacity: "0.7",
        transform: "translateY(0px) scale(0.7)"
      },
      "100%": {
        opacity: "1",
        transform: "scale(1)"
      }
    };
    var keyframeBackInDown = {
      "0%": {
        opacity: "0.7",
        transform: "translateY(-1200px) scale(0.7)"
      },
      "80%": {
        opacity: "0.7",
        transform: "translateY(0px) scale(0.7)"
      },
      "100%": {
        opacity: "1",
        transform: "scale(1)"
      }
    };
    var keyframeBackInLeft = {
      "0%": {
        opacity: "0.7",
        transform: "translateX(-2000px) scale(0.7)"
      },
      "80%": {
        opacity: "0.7",
        transform: "translateX(0px) scale(0.7)"
      },
      "100%": {
        opacity: "1",
        transform: "scale(1)"
      }
    };
    var keyframeBackInRight = {
      "0%": {
        opacity: "0.7",
        transform: "translateX(2000px) scale(0.7)"
      },
      "80%": {
        opacity: "0.7",
        transform: "translateY(0px) scale(0.7)"
      },
      "100%": {
        opacity: "1",
        transform: "scale(1)"
      }
    };
    exports.keyframeBackInUp = keyframeBackInUp;
    exports.keyframeBackInDown = keyframeBackInDown;
    exports.keyframeBackInRight = keyframeBackInRight;
    exports.keyframeBackInLeft = keyframeBackInLeft;
  }
});

// node_modules/@windicss/plugin-animations/animate/keyframes/backOut.js
var require_backOut = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/keyframes/backOut.js"(exports) {
    var keyframeBackOutUp = {
      "0%": {
        opacity: "1",
        transform: "scale(1)"
      },
      "80%": {
        opacity: "0.7",
        transform: "translateY(0px) scale(0.7)"
      },
      "100%": {
        opacity: "0.7",
        transform: "translateY(-700px) scale(0.7)"
      }
    };
    var keyframeBackOutDown = {
      "0%": {
        opacity: "1",
        transform: "scale(1)"
      },
      "80%": {
        opacity: "0.7",
        transform: "translateY(0px) scale(0.7)"
      },
      "100%": {
        opacity: "0.7",
        transform: "translateY(700px) scale(0.7)"
      }
    };
    var keyframeBackOutLeft = {
      "0%": {
        opacity: "1",
        transform: "scale(1)"
      },
      "80%": {
        opacity: "0.7",
        transform: "translateX(-2000px) scale(0.7)"
      },
      "100%": {
        opacity: "0.7",
        transform: "translateY(-700px) scale(0.7)"
      }
    };
    var keyframeBackOutRight = {
      "0%": {
        opacity: "1",
        transform: "scale(1)"
      },
      "80%": {
        opacity: "0.7",
        transform: "translateY(0px) scale(0.7)"
      },
      "100%": {
        opacity: "0.7",
        transform: "translateX(2000px) scale(0.7)"
      }
    };
    exports.keyframeBackOutUp = keyframeBackOutUp;
    exports.keyframeBackOutDown = keyframeBackOutDown;
    exports.keyframeBackOutRight = keyframeBackOutRight;
    exports.keyframeBackOutLeft = keyframeBackOutLeft;
  }
});

// node_modules/@windicss/plugin-animations/animate/animate.js
var require_animate = __commonJS({
  "node_modules/@windicss/plugin-animations/animate/animate.js"(exports, module) {
    var plugin = __require("windicss/plugin");
    var keyframes = require_keyframes();
    var keyframesLightSpeed = require_lightspeed();
    var keyframesFlip = require_flip();
    var keyframesRotateIn = require_rotateIn();
    var keyframesRotateOut = require_rotateOut();
    var keyframesRoll = require_roll();
    var keyframesZoomIn = require_zoomIn();
    var keyframesZoomOut = require_zoomOut();
    var keyframesBounceIn = require_bounceIn();
    var keyframesBounceOut = require_bounceOut();
    var keyframesSlideIn = require_slideIn();
    var keyframesSlideOut = require_slideOut();
    var keyframesFadeIn = require_fadeIn();
    var keyframesFadeOut = require_fadeOut();
    var keyframesBackIn = require_backIn();
    var keyframesBackOut = require_backOut();
    module.exports = plugin.withOptions(function({
      classes = [],
      settings = {},
      variants = ["responsive"]
    }) {
      return function({ addDynamic }) {
        if (!settings) {
          settings = {};
        }
        const animatedSpeed = settings.animatedSpeed ? settings.animatedSpeed : 1e3;
        const heartBeatSpeed = settings.heartBeatSpeed ? settings.heartBeatSpeed : 1e3;
        const hingeSpeed = settings.hingeSpeed ? settings.hingeSpeed : 2e3;
        const bounceInSpeed = settings.bounceInSpeed ? settings.bounceInSpeed : 750;
        const bounceOutSpeed = settings.bounceOutSpeed ? settings.bounceOutSpeed : 750;
        const animationDelaySpeed = settings.animationDelaySpeed ? settings.animationDelaySpeed : 500;
        const opacity = settings.opacity ? settings.opacity : 1;
        const fallbackUtilities = {
          animated: {
            animationDuration: `${animatedSpeed}ms`,
            animationFillMode: "both"
          },
          infinite: {
            animationIterationCount: "infinite"
          },
          "repeat-1": {
            animationRepeat: 1
          },
          "repeat-2": {
            animationRepeat: 2
          },
          "repeat-3": {
            animationRepeat: 3
          },
          delay: {
            animationDelay: `${animationDelaySpeed}ms`
          },
          "delay-1s": {
            animationDelay: `1000ms`
          },
          "delay-2s": {
            animationDelay: `2000ms`
          },
          "delay-3s": {
            animationDelay: `3000ms`
          },
          "delay-4s": {
            animationDelay: `4000ms`
          },
          "delay-5s": {
            animationDelay: `5000ms`
          },
          fast: {
            animationDuration: `800ms`
          },
          faster: {
            animationDuration: `500ms`
          },
          slow: {
            animationDuration: `2000ms`
          },
          slower: {
            animationDuration: `3000ms`
          },
          bounce: {
            animationName: "bounce",
            transformOrigin: "center bottom"
          },
          flash: {
            animationName: "flash"
          },
          pulse: {
            animationName: "pulse"
          },
          rubberBand: {
            animationName: "rubberBand"
          },
          shakeX: {
            animationName: "shakeX"
          },
          shakeY: {
            animationName: "shakeY"
          },
          headShake: {
            animationTimingFunction: "ease-in-out",
            animationName: "headShake"
          },
          swing: {
            transformOrigin: "top center",
            animationName: "swing"
          },
          tada: {
            animationName: "tada"
          },
          wobble: {
            animationName: "wobble"
          },
          jello: {
            animationName: "jello"
          },
          heartBeat: {
            animationName: "heartBeat",
            animationDuration: `${heartBeatSpeed}ms`,
            animationTimingFunction: "ease-in-out"
          },
          hinge: {
            animationName: "hinge",
            animationDuration: `${hingeSpeed}ms`
          },
          jackInTheBox: {
            animationName: "jackInTheBox"
          },
          lightSpeedInLeft: {
            animationName: "lightSpeedInLeft"
          },
          lightSpeedInRight: {
            animationName: "lightSpeedInRight"
          },
          lightSpeedOutLeft: {
            animationName: "lightSpeedOutLeft"
          },
          lightSpeedOutRight: {
            animationName: "lightSpeedOutRight"
          },
          flip: {
            animationName: "flip",
            backfaceVisibility: "visible"
          },
          flipInX: {
            animationName: "flipInX",
            backfaceVisibility: "visible"
          },
          flipInY: {
            animationName: "flipInY",
            backfaceVisibility: "visible"
          },
          flipOutX: {
            animationName: "flipOutX",
            backfaceVisibility: "visible"
          },
          flipOutY: {
            animationName: "flipOutY",
            backfaceVisibility: "visible"
          },
          rotateIn: {
            animationName: "rotateIn"
          },
          rotateInDownLeft: {
            animationName: "rotateInDownLeft"
          },
          rotateInDownRight: {
            animationName: "rotateInDownRight"
          },
          rotateInUpLeft: {
            animationName: "rotateInUpLeft"
          },
          rotateInUpRight: {
            animationName: "rotateInUpRight"
          },
          rotateOut: {
            animationName: "rotateOut"
          },
          rotateOutDownLeft: {
            animationName: "rotateOutDownLeft"
          },
          rotateOutDownRight: {
            animationName: "rotateOutDownRight"
          },
          rotateOutUpLeft: {
            animationName: "rotateOutUpLeft"
          },
          rotateOutUpRight: {
            animationName: "rotateOutUpRight"
          },
          rollIn: {
            animationName: "rollIn"
          },
          rollOut: {
            animationName: "rollOut"
          },
          zoomIn: {
            animationName: "zoomIn"
          },
          zoomInDown: {
            animationName: "zoomInDown"
          },
          zoomInLeft: {
            animationName: "zoomInLeft"
          },
          zoomInRight: {
            animationName: "zoomInRight"
          },
          zoomInUp: {
            animationName: "zoomInUp"
          },
          bounceIn: {
            animationName: "bounceIn",
            animationDuration: `${bounceInSpeed}ms`
          },
          bounceInDown: {
            animationName: "bounceInDown"
          },
          bounceInLeft: {
            animationName: "bounceInLeft"
          },
          bounceInRight: {
            animationName: "bounceInRight"
          },
          bounceInUp: {
            animationName: "bounceInUp"
          },
          bounceOut: {
            animationName: "bounceOut",
            animationDuration: `${bounceOutSpeed}ms`
          },
          bounceOutDown: {
            animationName: "bounceOutDown"
          },
          bounceOutLeft: {
            animationName: "bounceOutLeft"
          },
          bounceOutRight: {
            animationName: "bounceOutRight"
          },
          bounceOutUp: {
            animationName: "bounceOutUp"
          },
          zoomOut: {
            animationName: "zoomOut"
          },
          zoomOutDown: {
            animationName: "zoomOutDown"
          },
          zoomOutLeft: {
            animationName: "zoomOutLeft"
          },
          zoomOutRight: {
            animationName: "zoomOutRight"
          },
          zoomOutUp: {
            animationName: "zoomOutUp"
          },
          slideInDown: {
            animationName: "slideInDown"
          },
          slideInLeft: {
            animationName: "slideInLeft"
          },
          slideInRight: {
            animationName: "slideInRight"
          },
          slideInUp: {
            animationName: "slideInUp"
          },
          slideOutDown: {
            animationName: "slideOutDown"
          },
          slideOutLeft: {
            animationName: "slideOutLeft"
          },
          slideOutRight: {
            animationName: "slideOutRight"
          },
          slideOutUp: {
            animationName: "slideOutUp"
          },
          fadeIn: {
            animationName: "fadeIn"
          },
          fadeInDown: {
            animationName: "fadeInDown"
          },
          fadeInDownBig: {
            animationName: "fadeInDownBig"
          },
          fadeInLeft: {
            animationName: "fadeInLeft"
          },
          fadeInLeftBig: {
            animationName: "fadeInLeftBig"
          },
          fadeInRight: {
            animationName: "fadeInRight"
          },
          fadeInRightBig: {
            animationName: "fadeInRightBig"
          },
          fadeInUp: {
            animationName: "fadeInUp"
          },
          fadeInUpBig: {
            animationName: "fadeInUpBig"
          },
          fadeInTopLeft: {
            animationName: "fadeInTopLeft"
          },
          fadeInTopRight: {
            animationName: "fadeInTopRight"
          },
          fadeInBottomLeft: {
            animationName: "fadeInBottomLeft"
          },
          fadeInBottomRight: {
            animationName: "fadeInBottomRight"
          },
          fadeOut: {
            animationName: "fadeOut"
          },
          fadeOutDown: {
            animationName: "fadeOutDown"
          },
          fadeOutDownBig: {
            animationName: "fadeOutDownBig"
          },
          fadeOutLeft: {
            animationName: "fadeOutLeft"
          },
          fadeOutLeftBig: {
            animationName: "fadeOutLeftBig"
          },
          fadeOutRight: {
            animationName: "fadeOutRight"
          },
          fadeOutRightBig: {
            animationName: "fadeOutRightBig"
          },
          fadeOutUp: {
            animationName: "fadeOutUp"
          },
          fadeOutUpBig: {
            animationName: "fadeOutUpBig"
          },
          backInUp: {
            animationName: "backInUp"
          },
          backInDown: {
            animationName: "backInDown"
          },
          backInLeft: {
            animationName: "backInLeft"
          },
          backInRight: {
            animationName: "backInRight"
          },
          backOutUp: {
            animationName: "backOutUp"
          },
          backOutDown: {
            animationName: "backOutDown"
          },
          backOutLeft: {
            animationName: "backOutLeft"
          },
          backOutRight: {
            animationName: "backOutRight"
          }
        };
        const fallbackKeyframes = {
          bounce: keyframes.keyframeBounce,
          flash: keyframes.keyframeFlash,
          pulse: keyframes.keyframePulse,
          rubberBand: keyframes.keyframeRubberBand,
          shakeX: keyframes.keyframeShakeX,
          shakeY: keyframes.keyframeShakeY,
          headShake: keyframes.keyframeHeadShake,
          swing: keyframes.keyframeSwing,
          tada: keyframes.keyframeTada,
          wobble: keyframes.keyframeWobble,
          jello: keyframes.keyframeJello,
          heartBeat: keyframes.keyframeHeartBeat,
          hinge: keyframes.keyframeHinge,
          jackInTheBox: keyframes.keyframeJackInTheBox,
          lightSpeedInLeft: keyframesLightSpeed.keyframeLightSpeedInLeft,
          lightSpeedInRight: keyframesLightSpeed.keyframeLightSpeedInRight,
          lightSpeedOutLeft: keyframesLightSpeed.keyframeLightSpeedOutLeft,
          lightSpeedOutRight: keyframesLightSpeed.keyframeLightSpeedOutRight,
          flip: keyframesFlip.keyframeFlip,
          flipInX: keyframesFlip.keyframeFlipInX,
          flipInY: keyframesFlip.keyframeFlipInY,
          flipOutX: keyframesFlip.keyframeFlipOutX,
          flipOutY: keyframesFlip.keyframeFlipOutY,
          rotateIn: keyframesRotateIn.keyframeRotateIn,
          rotateInDownLeft: keyframesRotateIn.keyframeRotateInDownLeft,
          rotateInDownRight: keyframesRotateIn.keyframeRotateInDownRight,
          rotateInUpLeft: keyframesRotateIn.keyframeRotateInUpLeft,
          rotateInUpRight: keyframesRotateIn.keyframeRotateInUpRight,
          rotateOut: keyframesRotateOut.keyframeRotateOut,
          rotateOutDownLeft: keyframesRotateOut.keyframeRotateOutDownLeft,
          rotateOutDownRight: keyframesRotateOut.keyframeRotateOutDownRight,
          rotateOutUpLeft: keyframesRotateOut.keyframeRotateOutUpLeft,
          rotateOutUpRight: keyframesRotateOut.keyframeRotateOutUpRight,
          rollIn: keyframesRoll.keyframeRollIn,
          rollOut: keyframesRoll.keyframeRollOut,
          zoomIn: keyframesZoomIn.keyframeZoomIn,
          zoomInDown: keyframesZoomIn.keyframeZoomInDown,
          zoomInLeft: keyframesZoomIn.keyframeZoomInLeft,
          zoomInRight: keyframesZoomIn.keyframeZoomInRight,
          zoomInUp: keyframesZoomIn.keyframeZoomInUp,
          bounceIn: keyframesBounceIn.keyframeBounceIn,
          bounceInDown: keyframesBounceIn.keyframeBounceInDown,
          bounceInLeft: keyframesBounceIn.keyframeBounceInLeft,
          bounceInRight: keyframesBounceIn.keyframeBounceInRight,
          bounceInUp: keyframesBounceIn.keyframeBounceInUp,
          bounceOut: keyframesBounceOut.keyframeBounceOut,
          bounceOutDown: keyframesBounceOut.keyframeBounceOutDown,
          bounceOutLeft: keyframesBounceOut.keyframeBounceOutLeft,
          bounceOutRight: keyframesBounceOut.keyframeBounceOutRight,
          bounceOutUp: keyframesBounceOut.keyframeBounceOutUp,
          zoomOut: keyframesZoomOut.keyframeZoomOut,
          zoomOutDown: keyframesZoomOut.keyframeZoomOutDown,
          zoomOutLeft: keyframesZoomOut.keyframeZoomOutLeft,
          zoomOutRight: keyframesZoomOut.keyframeZoomOutRight,
          zoomOutUp: keyframesZoomOut.keyframeZoomOutUp,
          slideInDown: keyframesSlideIn.keyframeSlideInDown,
          slideInLeft: keyframesSlideIn.keyframeSlideInLeft,
          slideInRight: keyframesSlideIn.keyframeSlideInRight,
          slideInUp: keyframesSlideIn.keyframeSlideInUp,
          slideOutDown: keyframesSlideOut.keyframeSlideOutDown,
          slideOutLeft: keyframesSlideOut.keyframeSlideOutLeft,
          slideOutRight: keyframesSlideOut.keyframeSlideOutRight,
          slideOutUp: keyframesSlideOut.keyframeSlideOutUp,
          fadeIn: keyframesFadeIn.keyframeFadeIn,
          fadeInDown: keyframesFadeIn.keyframeFadeInDown,
          fadeInDownBig: keyframesFadeIn.keyframeFadeInDownBig,
          fadeInLeft: keyframesFadeIn.keyframeFadeInLeft,
          fadeInLeftBig: keyframesFadeIn.keyframeFadeInLeftBig,
          fadeInRight: keyframesFadeIn.keyframeFadeInRight,
          fadeInRightBig: keyframesFadeIn.keyframeFadeInRightBig,
          fadeInTopLeft: keyframesFadeIn.keyframeFadeInTopLeft,
          fadeInTopRight: keyframesFadeIn.keyframeFadeInTopRight,
          fadeInBottomLeft: keyframesFadeIn.keyframeFadeInBottomLeft,
          fadeInBottomRight: keyframesFadeIn.keyframeFadeInBottomRight,
          fadeInUp: keyframesFadeIn.keyframeFadeInUp,
          fadeInUpBig: keyframesFadeIn.keyframeFadeInUpBig,
          fadeOut: keyframesFadeOut.keyframeFadeOut,
          fadeOutDown: keyframesFadeOut.keyframeFadeOutDown,
          fadeOutDownBig: keyframesFadeOut.keyframeFadeOutDownBig,
          fadeOutLeft: keyframesFadeOut.keyframeFadeOutLeft,
          fadeOutLeftBig: keyframesFadeOut.keyframeFadeOutLeftBig,
          fadeOutRight: keyframesFadeOut.keyframeFadeOutRight,
          fadeOutRightBig: keyframesFadeOut.keyframeFadeOutRightBig,
          fadeOutUp: keyframesFadeOut.keyframeFadeOutUp,
          fadeOutUpBig: keyframesFadeOut.keyframeFadeOutUpBig,
          fadeOutTopLeft: keyframesFadeOut.keyframeFadeOutTopLeft,
          fadeOutTopRight: keyframesFadeOut.keyframeFadeOutTopRight,
          fadeOutBottomLeft: keyframesFadeOut.keyframeFadeOutBottomLeft,
          fadeOutBottomRight: keyframesFadeOut.keyframeFadeOutBottomRight,
          backInDown: keyframesBackIn.keyframeBackInDown,
          backInUp: keyframesBackIn.keyframeBackInUp,
          backInLeft: keyframesBackIn.keyframeBackInLeft,
          backInRight: keyframesBackIn.keyframeBackInRight,
          backOutDown: keyframesBackOut.keyframeBackOutDown,
          backOutUp: keyframesBackOut.keyframeBackOutUp,
          backOutLeft: keyframesBackOut.keyframeBackOutLeft,
          backOutRight: keyframesBackOut.keyframeBackOutRight
        };
        addDynamic("animate", ({ Utility, Style, Keyframes }) => {
          if (Object.keys(fallbackUtilities).includes(Utility.body)) {
            const value = fallbackUtilities[Utility.body];
            let output = Style.generate(Utility.class, value);
            if (value.animationName) output = Keyframes.generate(value.animationName, fallbackKeyframes[value.animationName]).concat(output);
            return output;
          }
          ;
        }, {
          layer: "utilities",
          group: "animations",
          completions: Object.keys(fallbackUtilities).map((i) => `animate-${i}`)
        });
      };
    });
  }
});

// node_modules/@windicss/plugin-animations/index.js
var require_plugin_animations = __commonJS({
  "node_modules/@windicss/plugin-animations/index.js"(exports, module) {
    module.exports = require_animate();
  }
});

// endpoint.js
var cjsm = __toESM(require_plugin_animations());
var endpoint_default = cjsm.default ?? cjsm;
export {
  endpoint_default as default
};
//# sourceMappingURL=plugin-animations.development.mjs.map