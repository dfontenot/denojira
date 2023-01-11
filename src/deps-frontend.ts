import React from 'https://esm.sh/react@18?target=es2020'
export { React }
export * as ReactDnD from 'https://esm.sh/react-dnd@16?target=es2020'
export * as ReactDnDHTML5 from 'https://esm.sh/react-dnd-html5-backend@16?target=es2020'
export * as ReactDOMServer from 'https://esm.sh/react-dom@18/server?target=es2020'
export * as ReactDOM from 'https://esm.sh/react-dom@18?target=es2020'
export * as ReactRedux from 'https://esm.sh/react-redux@8.0?target=es2020'
// TODO: fix, how to import optional addon @reduxjs/toolkit/query/react ?
export * as ReduxToolkit from 'https://esm.sh/@reduxjs/toolkit@1.9?target=es2020'

// TODO: not necessary? appears to bring in @reduxjs/toolkit/dist/query instead of @reduxjs/toolkit/query/react
// https://stackoverflow.com/a/68569190/854854
//export * as RTK from 'https://esm.sh/@reduxjs/toolkit@1.9/query/react'

// NOTE: does not work?
//export * as RTK from 'https://cdn.skypack.dev/@reduxjs/toolkit@^1.9/query/react?dts'
