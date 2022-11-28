# denojira

another jira clone. uses deno, denodb, react, and oak. built for deno 1.28.2.

## Ops

### Create a swim lane
`curl -X POST -H "Content-Type:application/json" http://localhost:8000/api/lane -d '{"name":"test lane"}'`

### Get the current swim lanes
`curl http://localhost:8000/api/lanes`
