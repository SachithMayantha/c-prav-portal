package com.c_prav.portal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TestReportDto {

    private int n_test_rep_id;
    private int n_user_id;
    private String c_file_cat_name;
    private String c_rep_name;
    private String c_file_type;
    private Date d_date;
    private String c_file_path;
}
