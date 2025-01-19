FROM node:22-alpine

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app/frontend

COPY ./frontend/package.json /app/frontend

RUN pnpm install --prefix /app/frontend

ENV PATH=./node_modules/.bin/:$PATH
