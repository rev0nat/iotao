FROM node:20-alpine

WORKDIR /app

# Copy only dependency manifests first (better caching)
COPY package.json package-lock.json* ./

RUN npm install 

# Copy the rest of the project
COPY . .

EXPOSE 4321

CMD ["npm", "run", "dev"]

