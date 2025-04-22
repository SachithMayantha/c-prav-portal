package com.c_prav.portal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CertificateDto {

    private int n_certificate_id;
    private int n_product_id;
    private int n_country_id;
    private String c_cert_date;
    private String c_exp_date;
    private String c_status;
    private String c_comments;
}