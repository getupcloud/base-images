FROM ghcr.io/getupcloud/base-images/baseimage-dotnet8:v1

USER root

RUN apk add --no-cache \
  icu-libs \ 
  libgcc \
  libssl3 \
  libstdc++ \
  zlib \
  gcompat \
  curl \
  openssl \
  ca-certificates \
  tar \
  bash \
  musl-dev \
  build-base

RUN set -e && \
  mkdir -p /usr/share/dotnet && \
  cd /usr/share/dotnet && \
  ARCH=$(uname -m) && \
  if [ "$ARCH" = "aarch64" ]; then \
  DOTNET_ARCH="arm64"; \
  else \
  DOTNET_ARCH="x64"; \
  fi && \
  DOTNET_VERSION="8.0.10" && \
  curl -ksSL -o dotnet.tar.gz https://dotnetcli.azureedge.net/dotnet/Runtime/$DOTNET_VERSION/dotnet-runtime-$DOTNET_VERSION-linux-musl-$DOTNET_ARCH.tar.gz && \
  tar -xzf dotnet.tar.gz && \
  rm dotnet.tar.gz && \
  ln -sf /usr/share/dotnet/dotnet /usr/bin/dotnet && \
  chmod +x /usr/share/dotnet/dotnet && \
  chmod +x /usr/bin/dotnet

ENV DOTNET_RUNNING_IN_CONTAINER=true \
  DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=true \
  PATH="/usr/share/dotnet:${PATH}" \
  DOTNET_ROOT=/usr/share/dotnet \
  LD_LIBRARY_PATH=/usr/share/dotnet:/usr/share/dotnet/shared/Microsoft.NETCore.App/8.0.10 \
  ASPNETCORE_URLS=http://+:8080

WORKDIR /app

RUN chown -R dotnet:dotnet /app /usr/share/dotnet && \
  chmod -R 755 /usr/share/dotnet && \
  apk del curl tar

USER dotnet

CMD ["dotnet", "--info"]