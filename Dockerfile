FROM node:24-alpine AS build
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts
COPY src ./src
COPY styles ./styles
COPY assets ./assets
COPY server ./server
COPY index.html 3d.html ./
COPY tools/build-web.mjs ./tools/build-web.mjs
RUN node tools/build-web.mjs

FROM node:24-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=8080 PUBLIC_ONLY=1
COPY --from=build --chown=node:node /build/dist/web/ ./
USER node
EXPOSE 8080
CMD ["node", "server/server.js"]
