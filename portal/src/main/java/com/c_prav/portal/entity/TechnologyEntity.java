package com.c_prav.portal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "technologies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TechnologyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int n_technology_id;
    private String c_technology;

}
