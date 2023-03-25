import {
  Path,
} from './deps-backend.ts'
const {
  basename,
  SEP,
} = Path

const projectBasename = new URL('.', import.meta.url).pathname

export const trimFileExtension = (filename: string) => filename.substring(0, filename.lastIndexOf('.')) || filename
export const getFilename = (metaUrl: string) => basename(new URL('', metaUrl).pathname)
export const getDirectoryName = (metaUrl: string) => new URL('.', metaUrl).pathname
export const getModuleName = (metaUrl: string) => {
  const callersDirectory = new URL('.', metaUrl).pathname
  const asRelative = callersDirectory.replace(projectBasename, '')
  const pathParts = asRelative.split(SEP)
  pathParts.pop() // remove trailing slash
  pathParts.push(trimFileExtension(getFilename(metaUrl).toLowerCase()))

  return pathParts.join('-')
}

