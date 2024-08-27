FROM eclipse-temurin:17-jdk-alpine
WORKDIR /src
COPY --from=builder target/orderService.jar ./
EXPOSE 8080
CMD ["java", "jar", "orderService.jar"]