package net.javaguides.orderService.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.javaguides.orderService.dto.OrderDto;
import net.javaguides.orderService.entity.Order;
import net.javaguides.orderService.exception.ResourceNotFoundException;
import net.javaguides.orderService.mapper.OrderMapper;
import net.javaguides.orderService.repository.OrderRepository;
import net.javaguides.orderService.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository OrderRepository;

    @Override
    public OrderDto createOrder(OrderDto orderDto) {
        
        Order order = OrderMapper.mapToOrder(orderDto);
        Order savedOrder = OrderRepository.save(order);

        return OrderMapper.mapToOrderDto(savedOrder);
    }

    @Override
    public OrderDto getOrderById(Long orderId) {
        Order order = OrderRepository.findById(orderId)
            .orElseThrow(() ->
                new ResourceNotFoundException("order is not exist with given id: " + orderId));
        
        return OrderMapper.mapToOrderDto(order);
    }

    @Override
    public List<OrderDto> getEveryOrders() {
        List<Order> orders= OrderRepository.findAll();
        return orders.stream().map((order) -> OrderMapper.mapToOrderDto(order)).collect(Collectors.toList());
    }

    @Override
    public OrderDto updateOrder(Long orderId, OrderDto updatedOrder) {
        Order order = OrderRepository.findById(orderId).orElseThrow(() ->
            new ResourceNotFoundException("order is not exist with given id: " + orderId));
        
        order.setProduct(updatedOrder.getProduct());
        order.setCnt(updatedOrder.getCnt());
        order.setPrice(updatedOrder.getPrice());

        Order updatedOrderObj = OrderRepository.save(order);

        return OrderMapper.mapToOrderDto(updatedOrderObj);
    }

    @Override
    public void deleteOrder(Long orderId) {
        Order order = OrderRepository.findById(orderId).orElseThrow(() ->
            new ResourceNotFoundException("order is not exist with given id: " + orderId));
        
        OrderRepository.deleteById(orderId);
    }

}
