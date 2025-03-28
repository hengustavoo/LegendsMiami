# Usa a imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para dentro do container
COPY package.json package-lock.json* ./
RUN npm install

# Copia os arquivos restantes
COPY . .

# Define a porta do servidor
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
