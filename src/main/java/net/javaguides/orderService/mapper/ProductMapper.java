package net.javaguides.orderService.mapper;

import net.javaguides.orderService.dto.ProductDto;
import net.javaguides.orderService.entity.Product;

public class ProductMapper {

    public static ProductDto mapToProductDto(Product Product){
        return new ProductDto(
            Product.getId(), 
            Product.getProduct(),
            Product.getPrice()
        );
    }

    public static Product mapToProduct(ProductDto ProductDto){
        return new Product(
            ProductDto.getId(), 
            ProductDto.getProduct(),
            ProductDto.getPrice()
        );
    }
}
