package net.javaguides.orderService.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import net.javaguides.orderService.dto.ProductDto;
import net.javaguides.orderService.service.ProductService;

@AllArgsConstructor
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private ProductService productService;

    //Build Add order REST API
    @PostMapping
    public ResponseEntity<ProductDto> createProduct(@RequestBody ProductDto productDto){
        ProductDto savedProduct = productService.createProduct(productDto);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    //Build Get Product REST API
    @GetMapping("{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable("id") Long orderId){
        ProductDto productDto = productService.getProductById(orderId);
        return ResponseEntity.ok(productDto);
    }

    //Build Get All Products REST API
    @GetMapping
    public ResponseEntity<List<ProductDto>> getAllProducts(){
        List<ProductDto> orders = productService.getEveryProducts();
        return ResponseEntity.ok(orders);
    }

    //Build Update Product REST API
    @PutMapping("{id}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable("id") Long orderId, @RequestBody ProductDto updatedProduct){
        ProductDto productDto = productService.updateProduct(orderId, updatedProduct);
        return ResponseEntity.ok(productDto);
    }

    //Build Delete Product REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long orderId){
        productService.deleteProduct(orderId);
        return ResponseEntity.ok("Product deleted successfully!");
    }

}
