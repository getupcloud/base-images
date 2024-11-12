FROM  ghcr.io/getupcloud/base-images/baseimage-nodejs:v1.0.0

# Define o diretório de trabalho
WORKDIR /app

# Copia o arquivo package.json e package-lock.json (se disponível)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Define a porta em que a aplicação irá escutar (opcional)
EXPOSE 3000

# Define o comando para iniciar a aplicação
CMD ["node", "index.js"]