FROM node:16-alpine3.15 as main
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/
ENV CHOKIDAR_USEPOLLING=true
# El "*" es necesario para que la app se muestre en el navegador (sino, funciona pero rechaza la conexion)
# Así copia el package.json y package-lock.json, el cual es importante
COPY package*.json .
RUN npm install
COPY . .

# DEVELOP ENVIRONMENT STAGE
FROM main as dev
EXPOSE 3000
CMD [ "npm", "run", "dev" ]

# PRODUCTION ENVIRONMENT STAGE
FROM main as prod
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]
