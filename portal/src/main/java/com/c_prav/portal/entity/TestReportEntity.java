package com.c_prav.portal.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "test_reports")
public class TestReportEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int n_test_rep_id;
    private int n_product_id;
    private String c_uploaded_by;
    private String c_file_cat_name;
    private String c_rep_name;
    private String c_file_type;
    private Date d_date;
    private String c_file_path;


}