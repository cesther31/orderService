FROM openjdk:17-alpine AS builder

WORKDIR /app

COPY src ./src
COPY pom.xml ./

RUN apk add --no-cache maven && \
    mvn clean package

FROM openjdk:17-alpine

WORKDIR /app

COPY --from=builder target/orderService.jar ./

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "orderService.jar"]