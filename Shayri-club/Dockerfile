# build stage

FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# EXPOSE 5173

# CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Production Stage (Aquiring dist folder)
# FROM node:24-alpine

# WORKDIR /app

# RUN npm i -g serve
# ENV PATH="/usr/local/bin:$PATH"
# COPY --from=build /app/dist ./dist

# EXPOSE 3000

# CMD [ "serve", "-s", "dist", "-l", "3000"]

# NGINX based serving

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]