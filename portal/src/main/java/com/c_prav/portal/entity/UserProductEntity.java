package com.c_prav.portal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_product")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int n_id;
    private int n_user_id;
    private int n_product_id;
}
