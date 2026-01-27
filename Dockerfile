FROM busybox:stable-uclibc as busybox

FROM denoland/deno:distroless-1.36.4

COPY --from=busybox /bin/sh /bin/sh
COPY --from=busybox /bin/mkdir /bin/mkdir
COPY --from=busybox /usr/bin/env /usr/bin/env

RUN mkdir /app
ADD . /app

ENTRYPOINT ["/bin/sh"]
CMD ["run.sh"]
