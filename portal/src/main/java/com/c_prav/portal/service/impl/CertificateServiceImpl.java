package com.c_prav.portal.service.impl;

import com.c_prav.portal.dto.CertificateDto;
import com.c_prav.portal.entity.CertificateEntity;
import com.c_prav.portal.entity.TestReportEntity;
import com.c_prav.portal.mapper.CertificateMapper;
import com.c_prav.portal.mapper.TestReportMapper;
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
}