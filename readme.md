# denojira

another jira clone. uses deno, denodb, react, and oak. built for deno 1.28.2.

## Development setup

1. `deno install --allow-net --allow-read --allow-write -n esbuild https://deno.land/x/esbuild@v0.15.16/mod.js`

## Current issues

This line in the app.js bundle is causing Chrome to fail: `await setup1(DEFAULT_CONFIG1);`. Looks like some logger functionality, hopefully could be tree-shook out.

## Ops

### Create a swim lane
`curl -X POST -H "Content-Type:application/json" http://localhost:8000/api/lane -d '{"name":"test lane"}'`

### Get the current swim lanes
`curl http://localhost:8000/api/lanes`
