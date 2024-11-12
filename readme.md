# Base Images Repository

This repository contains a collection of base Docker images optimized for different runtime environments and use cases. Each image is designed with security, performance, and minimal size in mind.

## Repository Structure

Each directory contains:

- `dotnet8/example/Dockerfile`: Source for building the base image example

## Available Images

| Directory | Image Name        | Description               | Tag    |
| --------- | ----------------- | ------------------------- | ------ |
| dotnet8   | baseimage-dotnet8 | .NET 8 minimal base image | v1.0.2 |

## Usage

### Pulling Images

Images are hosted on GitHub Container Registry (ghcr.io). To pull an image:

```bash
docker pull ghcr.io/getupcloud/base-images/<image-name>:<tag>
```

## Security

- Images are regularly scanned for vulnerabilities
- Security updates are applied promptly
- Base images are kept minimal to reduce attack surface
