package net.javaguides.orderService.mapper;

import net.javaguides.orderService.dto.OrderDto;
import net.javaguides.orderService.entity.Order;

public class OrderMapper {

    public static OrderDto mapToOrderDto(Order order){
        return new OrderDto(
            order.getId(), 
            order.getBuyer(), 
            order.getProduct(),
            order.getCnt(),
            order.getTotalPrice()
        );
    }

    public static Order mapToOrder(OrderDto orderDto){
        return new Order(
            orderDto.getId(), 
            orderDto.getBuyer(),
            orderDto.getProduct(),
            orderDto.getCnt(),
            orderDto.getTotalPrice()
        );
    }
}
