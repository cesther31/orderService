package net.javaguides.orderService.service;

import java.util.List;

import net.javaguides.orderService.dto.ProductDto;

public interface ProductService {
    
    ProductDto createProduct(ProductDto productDto);

    ProductDto getProductById(Long productId);

    List<ProductDto> getEveryProducts();

    ProductDto updateProduct(Long productId, ProductDto updatedProductDto);

    void deleteProduct(Long productId);
}
