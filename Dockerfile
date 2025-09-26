FROM denoland/deno:latest

WORKDIR /app

COPY . ./

CMD ls -al

RUN deno cache src/index.ts

ENTRYPOINT ["deno", "task", "index"]
