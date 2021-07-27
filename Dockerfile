# ============== build stage ==================
FROM node:14 as builder

COPY package.json yarn.lock ./

RUN yarn && mkdir /app && mv ./node_modules /app/

WORKDIR /app

# ============== compiler stage ===============
FROM builder as compiler

COPY . .

ENV NODE_ENV=production
RUN yarn build

# ============== runtime stage ================
FROM nginx:1.21-alpine as runtime

## Copy our default nginx config
COPY nginx/default.conf.template /etc/nginx/templates/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY --from=compiler /app/dist/ /usr/share/nginx/html

EXPOSE 8090

CMD ["nginx", "-g", "daemon off;"]