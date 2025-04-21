package com.c_prav.portal.service;
import com.c_prav.portal.dto.CertificateDto;

import java.util.List;

public interface CertificateService {
    List<CertificateDto> getCertificates();
}