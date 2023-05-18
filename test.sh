#!/bin/sh

exec deno test --import-map=test-import-map.json $@
