package net.javaguides.orderService.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "buyer")
    private String buyer;

    @Column(name = "product")
    private String product;

    @Column(name = "cnt")
    private int cnt;

    @Column(name = "total_price")
    private double totalPrice;
}