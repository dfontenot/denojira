import { asynciter } from 'asynciter'
import { walk } from 'fs'
import { getLogger } from 'logger'
import { join } from 'path'
import { Context } from 'oak'
import { Processor } from 'windicss-lib'
import { HTMLParser } from 'windicss-parser'
import { getDirectoryName } from '../../meta.ts'
import { config as windiConfig } from '../../../../windi.config.ts'

export const cssHandler = async (ctx: Context) => {

  const logger = getLogger('server')

  // TODO: also include public html directory in the css utility scan

  // NOTE: assumes that all mentions of stylesheets in code occur in App.tsx or a components
  const frontendDirectoryBasename = join(getDirectoryName(import.meta.url), '..', '..', '..', 'frontend')
  logger.debug(`recursive scanning directory ${frontendDirectoryBasename} for style usages`)

  const tsxText = await asynciter(walk(frontendDirectoryBasename, { includeDirs: false, exts: ['.tsx'], match: [/components/, /App/] }))
    .concurrentUnorderedMap(async (entry) => { logger.debug(`reading file for windicss ${entry.path}`); return await Deno.readTextFile(entry.path) })
    .reduce('', (acc, item) => acc + item)

  const processor = new Processor(windiConfig)
  const htmlClasses = new HTMLParser(tsxText).parseClasses().map((i) => i.result).join(' ')
  logger.debug(`encountered CSS classes ${htmlClasses}`)
  const preflight = processor.preflight(tsxText)

  const interpreted = processor.interpret(htmlClasses).styleSheet
  const styles = interpreted.extend(preflight, false).build(false)

  ctx.response.headers.set('Content-Type', 'text/css')
  ctx.response.body = styles
}
