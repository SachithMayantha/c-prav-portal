package com.c_prav.portal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LeadDto {
    private int leadId;
    private int clientId;
    private String clientName;
    private String companyName;
    private String companyAddress;
    private String companyDetail;
    private String companyABN;
    private String leadDescription;
    private String startDate;
}
