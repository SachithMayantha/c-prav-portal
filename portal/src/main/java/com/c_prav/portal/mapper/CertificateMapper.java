package com.c_prav.portal.mapper;

import com.c_prav.portal.dto.CertificateDto;
import com.c_prav.portal.entity.CertificateEntity;

public class CertificateMapper {

    public static CertificateDto mapCertificateToCertificateDto(CertificateEntity certificateEntity){

        return new CertificateDto(
                certificateEntity.getN_certificate_id(),
                certificateEntity.getN_product_id(),
                certificateEntity.getN_country_id(),
                certificateEntity.getC_cert_date(),
                certificateEntity.getC_exp_date(),
                certificateEntity.getC_status(),
                certificateEntity.getC_comments()
        );
    }

    public static CertificateEntity mapCertificateToCertificateEntity(CertificateDto certificateDto){
        return new CertificateEntity(
                certificateDto.getN_certificate_id(),
                certificateDto.getN_product_id(),
                certificateDto.getN_country_id(),
                certificateDto.getC_cert_date(),
                certificateDto.getC_exp_date(),
                certificateDto.getC_status(),
                certificateDto.getC_comments()
        );
    }
}