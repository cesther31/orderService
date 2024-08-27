FROM openjdk:17-jdk-alpine
WORKDIR /src
COPY target/springboot-example.jar springboot-example.jar
EXPOSE 8080
CMD ["java", "jar", "orderService.jar"]