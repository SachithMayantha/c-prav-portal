package com.c_prav.portal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "product_client")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int n_client_product;
    private int n_client_id;
    private int n_product_id;
}
