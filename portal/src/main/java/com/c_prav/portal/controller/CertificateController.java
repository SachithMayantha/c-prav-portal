package com.c_prav.portal.controller;

import com.c_prav.portal.dto.CertificateDto;
import com.c_prav.portal.service.impl.CertificateServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("certificate")
@CrossOrigin
public class CertificateController {

    private CertificateServiceImpl certificateServiceImpl;

    @GetMapping("getCertificates")
    public ResponseEntity<List<CertificateDto>> getCertificates() {
        return new ResponseEntity<>(certificateServiceImpl.getCertificates(), HttpStatus.OK);
    }
}