package net.javaguides.orderService.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.javaguides.orderService.dto.ProductDto;
import net.javaguides.orderService.entity.Product;
import net.javaguides.orderService.exception.ResourceNotFoundException;
import net.javaguides.orderService.mapper.ProductMapper;
import net.javaguides.orderService.repository.ProductRepository;
import net.javaguides.orderService.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository ProductRepository;

    @Override
    public ProductDto createProduct(ProductDto productDto) {
        
        Product product = ProductMapper.mapToProduct(productDto);
        Product savedProduct = ProductRepository.save(product);

        return ProductMapper.mapToProductDto(savedProduct);
    }

    @Override
    public ProductDto getProductById(Long productId) {
        Product product = ProductRepository.findById(productId)
            .orElseThrow(() ->
                new ResourceNotFoundException("product is not exist with given id: " + productId));
        
        return ProductMapper.mapToProductDto(product);
    }

    @Override
    public List<ProductDto> getEveryProducts() {
        List<Product> products= ProductRepository.findAll();
        return products.stream().map((product) -> ProductMapper.mapToProductDto(product)).collect(Collectors.toList());
    }

    @Override
    public ProductDto updateProduct(Long productId, ProductDto updatedProduct) {
        Product product = ProductRepository.findById(productId).orElseThrow(() ->
            new ResourceNotFoundException("product is not exist with given id: " + productId));
        
        product.setProduct(updatedProduct.getProduct());
        product.setPrice(updatedProduct.getPrice());

        Product updatedProductObj = ProductRepository.save(product);

        return ProductMapper.mapToProductDto(updatedProductObj);
    }

    @Override
    public void deleteProduct(Long productId) {
        Product product = ProductRepository.findById(productId).orElseThrow(() ->
            new ResourceNotFoundException("product is not exist with given id: " + productId));
        
        ProductRepository.deleteById(productId);
    }

}
