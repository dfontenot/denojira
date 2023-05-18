// @ts-ignore: working around issues with react test library
// source: https://github.com/testing-library/react-testing-library/issues/1061#issuecomment-1119435440
globalThis.IS_REACT_ACT_ENVIRONMENT = true
// @ts-ignore: appears no support for iFrames in denodom, but we don't use them here anyway
window.HTMLIFrameElement = function () {}
