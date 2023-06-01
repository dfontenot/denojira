#!/bin/sh

# superoak requires allow-read and allow-net
exec deno test --allow-read --allow-net --import-map=test-import-map.json $@
