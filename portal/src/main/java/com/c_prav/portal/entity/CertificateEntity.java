package com.c_prav.portal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "certificates")
public class CertificateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int n_certificate_id;
    private int n_product_id;
    private int n_country_id;
    private String c_cert_date;
    private String c_exp_date;
    private String c_status;
    private String c_comments;
}
