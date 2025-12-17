FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json .npmrc ./
COPY packages ./packages
COPY apps/svc-navigator/package.json ./apps/svc-navigator/package.json

RUN pnpm install --frozen-lockfile

COPY apps/svc-navigator ./apps/svc-navigator
RUN pnpm --filter svc-navigator build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/packages ./packages
COPY --from=base /app/apps/svc-navigator/dist ./dist
COPY --from=base /app/apps/svc-navigator/package.json ./package.json

EXPOSE 3001
CMD ["node", "dist/main"]