#!/bin/sh

exec ~/.deno/bin/esbuild src/frontend/App.tsx --bundle --minify --sourcemap
