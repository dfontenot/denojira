export * as DenoDB from 'https://deno.land/x/denodb@v1.2.0/mod.ts'
export * as DenoEmit from 'https://deno.land/x/emit@0.11.0/mod.ts'
export * as ESBuild from 'https://deno.land/x/esbuild@v0.15.16/mod.js'
export * as ESBuildDenoLoader from 'https://deno.land/x/esbuild_deno_loader@0.6.0/mod.ts'
export * as Mustache from 'https://deno.land/x/mustache@v0.3.0/mod.ts'
export * as Oak from 'https://deno.land/x/oak@v11.1.0/mod.ts'
export * as Path from 'https://deno.land/std/path/mod.ts'
import tailwind from 'https://esm.sh/tailwindcss@3'
import postcss from 'https://esm.sh/v102/postcss@8.4.20/lib/postcss'
import autoprefixer from 'https://esm.sh/autoprefixer@10'
export {
  autoprefixer,
  postcss,
  tailwind,
}

// considered backend only for renderToString
import React from 'https://esm.sh/react@18'
export { React }
export * as ReactDOMServer from 'https://esm.sh/react-dom@18/server'
