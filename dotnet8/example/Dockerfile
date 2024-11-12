# Use a imagem base que inclui o runtime do .NET 8
FROM ghcr.io/getupcloud/base-images/baseimage-dotnet8:v1.0.2

# Defina o diretório de trabalho
WORKDIR /app

# Copie o arquivo .csproj e restaure as dependências
COPY *.csproj ./
RUN dotnet restore --runtime linux-musl-x64

# Copie o resto do código-fonte
COPY . ./

# Build e publique a aplicação
RUN dotnet publish -c Release -o out --no-restore -r linux-musl-x64 /p:PublishTrimmed=true

# Defina o diretório de trabalho para a saída do publish
WORKDIR /app/out

# Defina a porta em que a aplicação irá escutar (opcional)
ENV ASPNETCORE_URLS=http://+:5000

# Defina o comando de entrada para executar a aplicação
ENTRYPOINT ["./TestApi"]