import { Context } from 'oak'
import * as ESBuild from 'esbuild'
import * as ESBuildDenoLoader from 'esbuild-deno-loader'
import {
  resolve,
  toFileUrl,
} from 'path'

export const jsBundleHandler = async (ctx: Context) => {
  const built = await ESBuild.build({
    entryPoints: ['./src/frontend/index.tsx'],
    format: 'iife',
    treeShaking: true,
    target: ['es2020', 'firefox107', 'chrome107'],
    platform: 'browser',
    logLevel: 'warning',
    tsconfig: './tsconfig.json',
    write: false,
    bundle: true,
    loader: { '.tsx': 'tsx' },
    plugins: [
      ESBuildDenoLoader.denoPlugin({
        // TODO: detect import-map being used in run.sh and use the same one here
        importMapURL: toFileUrl(resolve('./test-import-map.json')),
      })
    ],
  })

  ctx.response.headers.set('Content-Type', 'text/javascript')
  ctx.response.body = built.outputFiles[0].contents
}
