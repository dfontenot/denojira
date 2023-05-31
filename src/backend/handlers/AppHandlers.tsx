import React from 'react'
import * as Mustache from 'mustache'
import { Context } from 'oak'
import { renderToString } from 'react-dom-server'
import { App } from '../../frontend/App.tsx'

export const appHandler = async (ctx: Context) => {
  const reactSSRApp = renderToString(<App />)
  const content = await Mustache.renderFile('./public/index.html.mustache', { reactApp: reactSSRApp })
  ctx.response.headers.set('Content-Type', 'text/html')

  ctx.response.body = content
}
