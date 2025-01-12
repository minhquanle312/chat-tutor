FROM node:22-alpine

WORKDIR /app

# This work with prisma inside nextjs
RUN apk add --no-cache openssl

RUN corepack enable

COPY package.json yarn.lock .yarnrc.yml ./

# RUN yarn workspaces focus --production
RUN yarn

COPY . .

RUN npx prisma generate

RUN yarn build

EXPOSE 3012

CMD ["yarn", "start"]
