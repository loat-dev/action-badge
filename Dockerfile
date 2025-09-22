FROM denoland/deno:latest

WORKDIR /app

COPY . ./

ENTRYPOINT ["deno", "task", "--cwd", "/app", "index"]
