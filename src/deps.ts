export * as DenoDB from 'https://deno.land/x/denodb@v1.1.0/mod.ts'
export * as DenoEmit from 'https://deno.land/x/emit@0.11.0/mod.ts'
export * as Mustache from 'https://deno.land/x/mustache@v0.3.0/mod.ts'
export * as Oak from 'https://deno.land/x/oak@v11.1.0/mod.ts'
export * as Path from 'https://deno.land/std/path/mod.ts'
import React from 'https://esm.sh/react@18'
export { React }
export * as ReactDOMServer from 'https://esm.sh/react-dom@18/server'
export * as ReactDOM from 'https://esm.sh/react-dom@18'
export * as ReactRedux from 'https://esm.sh/react-redux@8.0'
// TODO: fix, how to import optional addon @reduxjs/toolkit/query/react ?
export * as ReduxToolkit from 'https://esm.sh/@reduxjs/toolkit@1.9'

// TODO: not necessary? appears to bring in @reduxjs/toolkit/dist/query instead of @reduxjs/toolkit/query/react
// https://stackoverflow.com/a/68569190/854854
//export * as RTK from 'https://esm.sh/@reduxjs/toolkit@1.9/query/react'

// NOTE: does not work?
//export * as RTK from 'https://cdn.skypack.dev/@reduxjs/toolkit@^1.9/query/react?dts'
