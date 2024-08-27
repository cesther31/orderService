FROM openjdk:17-jdk-alpine
WORKDIR /src
COPY target/orderService.jar orderService.jar
EXPOSE 8080
CMD ["java", "jar", "orderService.jar"]