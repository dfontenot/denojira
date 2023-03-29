# denojira

A Jira clone. This project is an experiment to see what is involved with porting a legacy framework-less React application to the Deno runtime instead of Node.JS.

## Stack
Uses

* [Deno](https://deno.land)
* [Deno postgresql driver](https://deno-postgres.com/#/)
* [Esbuild](https://esbuild.github.io/)
* [Oak](https://oakserver.github.io/oak/) (similar to Koa)
* React (SSR)
* [WindiCSS](https://windicss.org/)


## Development

### Server

At the moment, the server is set up around supporting a dev setup where most assets are generated when requested. Future work will be to have the web server host a pre-built JS bundle and prebuilt CSS.

### Setup

1. `deno install --allow-net --allow-read --allow-write -n esbuild https://deno.land/x/esbuild@v0.15.16/mod.js`

## Ops

### Create a swim lane
`curl -X POST -H "Content-Type:application/json" http://localhost:8000/api/lane -d '{"name":"test lane"}'`

### Get the current swim lanes
`curl http://localhost:8000/api/lanes`
