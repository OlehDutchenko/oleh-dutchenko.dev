# This file is used to build the local development image for the project

FROM node:20-alpine

ARG PNPM_HOME="/pnpm"

ENV PNPM_HOME="${PNPM_HOME}"
ENV PATH="$PNPM_HOME:$PATH"

RUN apk --no-cache add git libc6-compat
RUN corepack enable pnpm && corepack prepare pnpm --activate
RUN pnpm config set store-dir ${PNPM_HOME}/.pnpm-store

WORKDIR /app
