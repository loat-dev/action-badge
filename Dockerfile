FROM denoland/deno:latest

WORKDIR /app

COPY . ./

RUN apt-get update && apt-get install tree && tree .

RUN deno cache src/index.ts

ENTRYPOINT ["deno", "task", "index"]
