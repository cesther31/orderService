FROM openjdk:17-jdk-alpine AS builder
WORKDIR /src
COPY --from=builder target/orderService.jar ./
EXPOSE 8080
CMD ["java", "jar", "orderService.jar"]