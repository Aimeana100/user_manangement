FROM node:18

WORKDIR /opt/docker

RUN npm install i npm@latest -g

COPY package.json package-lock*.json

COPY . .

RUN ls .

RUN npm install

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]