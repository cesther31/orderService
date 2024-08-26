package net.javaguides.orderService.service;

import java.util.List;

import net.javaguides.orderService.dto.OrderDto;

public interface OrderService {
    
    OrderDto createOrder(OrderDto orderDto);

    OrderDto getOrderById(Long orderId);

    List<OrderDto> getEveryOrders();

    OrderDto updateOrder(Long orderId, OrderDto updatedOrderDto);

    void deleteOrder(Long orderId);
}
