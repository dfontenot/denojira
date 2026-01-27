FROM busybox:stable-uclibc as busybox

FROM denoland/deno:distroless-1.36.4

COPY --from=busybox /bin/sh /bin/sh
ADD . .

ENTRYPOINT ["/bin/sh"]
CMD ["run.sh"]
