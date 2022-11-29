#!/bin/sh

# NOTE: --allow-env for deno_emit, --allow-read for mustache templates --allow-run for esbuild
exec deno run --allow-net --allow-read --allow-env --allow-run server.tsx
