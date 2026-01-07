FROM node:25-bullseye

RUN npm install -g http-server

RUN npx playwright install && \
    npx playwright install --with-deps

RUN apt-get update && \
    apt-get upgrade -y

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

COPY ./docker/container/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 5173

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# CMD ["tail", "-d", "/dev/null"]

# Live
CMD ["http-server", "/app/dist", "--port", "80"]