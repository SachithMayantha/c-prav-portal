package com.c_prav.portal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "product_technology")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductTechEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int n_pro_tech_id;
    private int n_product_id;
    private int n_technology_id;
}
