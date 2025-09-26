FROM denoland/deno:latest

WORKDIR /app

COPY . ./

RUN ls -al

RUN deno cache src/index.ts

ENTRYPOINT ["deno", "task", "index"]
