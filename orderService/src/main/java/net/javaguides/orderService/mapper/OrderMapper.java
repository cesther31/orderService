package net.javaguides.orderService.mapper;

import net.javaguides.orderService.dto.OrderDto;
import net.javaguides.orderService.entity.Order;

public class OrderMapper {

    public static OrderDto mapToOrderDto(Order order){
        return new OrderDto(
            order.getId(), 
            order.getbuyer(), 
            order.getProduct(),
            order.getCnt(),
            order.gettotalPrice()
        );
    }

    public static Order mapToOrder(OrderDto orderDto){
        return new Order(
            orderDto.getId(), 
            orderDto.getbuyer(),
            orderDto.getProduct(),
            orderDto.getCnt(),
            orderDto.gettotalPrice()
        );
    }
}
