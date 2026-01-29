#!/bin/sh

# superoak requires allow-read and allow-net
exec deno test --allow-read --allow-net --import-map=./vendor/test/import_map.json $@
