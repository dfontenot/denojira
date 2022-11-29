import {
  React,
  ReactDOM,
} from '../deps-frontend.ts'

import { App } from './App.tsx'

ReactDOM.hydrate(<App/>, document.getElementById('root'))
