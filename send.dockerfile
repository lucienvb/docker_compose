FROM node:14

RUN apt-get update && apt-get install -y build-essential

WORKDIR /app

COPY src /app/src

RUN npm install
RUN npm install axios

# EXPOSE 3000

CMD ["node", "src/send.js"]

# HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -f http://localhost:3000 || exit 1