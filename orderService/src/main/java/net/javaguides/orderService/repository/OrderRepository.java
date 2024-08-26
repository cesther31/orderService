package net.javaguides.orderService.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.orderService.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
