import {
  Path,
} from './deps.ts'
const {
  basename,
  SEP,
  toFileUrl,
} = Path

const projectBasename = new URL('.', import.meta.url).pathname
const isFileUrlString = (filename: string) => filename.startsWith('file://')
const ensureFileUrlString = (filename: string | URL): string =>
  filename instanceof URL ? filename.toString() : (isFileUrlString(filename) ? filename : toFileUrl(filename).toString())

// source: https://stackoverflow.com/a/47956767/854854
export const trimFileExtension = (filename: string) => filename.substring(0, filename.lastIndexOf('.')) || filename
export const getFilename = (metaUrl: string | URL) => basename(new URL('', ensureFileUrlString(metaUrl)).pathname)
export const getDirectoryName = (metaUrl: string | URL) => new URL('.', ensureFileUrlString(metaUrl)).pathname
export const getModuleName = (metaUrl: string | URL) => {
  const callersDirectory = getDirectoryName(metaUrl)
  const asRelative = callersDirectory.replace(projectBasename, '')
  const pathParts = asRelative.split(SEP)
  pathParts.pop() // remove trailing slash
  pathParts.push(trimFileExtension(getFilename(metaUrl).toLowerCase()))

  return pathParts.join('-')
}

