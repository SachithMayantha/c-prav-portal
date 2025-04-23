package com.c_prav.portal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "report_categories")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReportCategoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int n_category_id;
    private String c_category_name;
}
