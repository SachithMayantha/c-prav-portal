package com.c_prav.portal.service.impl;

import com.c_prav.portal.dto.CertificateDto;
import com.c_prav.portal.entity.CertificateEntity;
import com.c_prav.portal.mapper.CertificateMapper;
import com.c_prav.portal.repository.CertificateRepository;
import com.c_prav.portal.service.CertificateService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CertificateServiceImpl implements CertificateService {

    private CertificateRepository certificateRepository;

    @Override
    public List<CertificateDto> getCertificates() {
        List<CertificateEntity> certificateEntities = certificateRepository.findAll();
        return certificateEntities.stream().map(CertificateMapper::mapCertificateToCertificateDto).collect(Collectors.toList());
    }

    @Override
    public CertificateDto saveCertificate(CertificateDto certificateDto) {
        CertificateEntity certificateEntity = certificateRepository.save(CertificateMapper.mapCertificateToCertificateEntity(certificateDto));
        return CertificateMapper.mapCertificateToCertificateDto(certificateEntity);
    }

    @Override
    public List<CertificateDto> getCertificatesByProductId(int productId) {
        List<CertificateEntity> certificateEntities = certificateRepository.getCertificatesByN_product_id(productId);
        return certificateEntities.stream().map(CertificateMapper::mapCertificateToCertificateDto).collect(Collectors.toList());
    }
}