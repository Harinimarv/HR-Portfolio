###################################################################################################################################################################
# Dockerfile for building a Docker image for the react application
###################################################################################################################################################################
#stage 1
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
#stage 2
FROM node:18 AS serve
WORKDIR /app
COPY --from=build /app/build ./build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]