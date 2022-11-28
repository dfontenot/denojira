#!/bin/sh

exec ~/.deno/bin/esbuild src/ssr/App.tsx --bundle --minify --sourcemap
