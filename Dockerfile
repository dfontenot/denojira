FROM denoland/deno:debian-1.36.4

RUN deno install --allow-net --allow-read --allow-write -n esbuild https://deno.land/x/esbuild@v0.15.16/mod.js \
  && mkdir /app
ADD . /app
WORKDIR /app

ENTRYPOINT ["/bin/sh"]
CMD ["/app/run.sh"]
