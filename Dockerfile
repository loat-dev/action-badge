FROM denoland/deno:latest

WORKDIR /app

COPY . ./

RUN deno cache src/index.ts

ENTRYPOINT ["deno", "task", "index"]
