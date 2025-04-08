package com.c_prav.portal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {

    private int productId;
    private String companyName;
    private String comments;
    private String productManager;
    private String photos;
    private String status;
}
