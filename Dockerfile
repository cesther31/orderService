FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY orderService.jar orderService.jar
EXPOSE 8080
CMD ["java","-jar","orderService.jar"]