package net.javaguides.orderService.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.orderService.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
