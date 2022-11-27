#!/bin/sh

# NOTE: --allow-env for deno_emit, --allow-read for mustache templates
exec deno run --allow-net --allow-read --allow-env server.tsx
