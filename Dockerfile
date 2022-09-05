FROM node:16

WORKDIR /usr/src/nyoomy/

COPY package.json ./
COPY yarn.lock ./

RUN yarn set version berry
RUN yarn plugin import constraints
RUN yarn plugin import workspace-tools

COPY packages/cli/package.json ./packages/cli/
COPY packages/client/package.json ./packages/client/
COPY packages/common/package.json ./packages/common/
COPY packages/eslint-config/package.json ./packages/eslint-config/
COPY packages/extension/package.json ./packages/extension/
COPY packages/prettier-config/package.json ./packages/prettier-config/
COPY packages/server/package.json ./packages/server/
COPY packages/web/package.json ./packages/web/

RUN yarn install

COPY ./ ./

EXPOSE 4000
EXPOSE 8080
EXPOSE 6379

CMD ["yarn", "start"]
