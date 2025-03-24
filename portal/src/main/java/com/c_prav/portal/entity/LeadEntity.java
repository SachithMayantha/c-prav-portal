package com.c_prav.portal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "lead_master")
public class LeadEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    private int nLeadId;
    private int nClientId;
    
    private String cClientName;
    private String cCompanyName;
    private String cCompanyAddress;
    private String cCompanyDetail;
    private BigInteger nCompanyABN;
    private String cLeadDescription;
    private Date dStartDate;

}
