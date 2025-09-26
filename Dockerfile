FROM denoland/deno:latest

WORKDIR /app

COPY . ./

RUN tree .

RUN deno cache src/index.ts

ENTRYPOINT ["deno", "task", "index"]
