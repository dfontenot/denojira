FROM denoland/deno:debian-1.36.4

RUN mkdir /app
ADD . /app

ENTRYPOINT ["/bin/sh"]
CMD ["/app/run.sh"]
