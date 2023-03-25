import {
  React,
  ReactDOM,
} from '../deps.ts'

import { App } from './App.tsx'

ReactDOM.hydrate(<App/>, document.getElementById('root'))
