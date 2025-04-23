package com.c_prav.portal.controller;

import com.c_prav.portal.dto.CertificateDto;
import com.c_prav.portal.service.impl.CertificateServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("certificate")
@CrossOrigin
public class CertificateController {

    private CertificateServiceImpl certificateServiceImpl;

    @GetMapping("{productId}")
    public ResponseEntity<List<CertificateDto>> getCertificatesByProductId(@PathVariable("productId") int productId) {
        return new ResponseEntity<>(certificateServiceImpl.getCertificatesByProductId(productId), HttpStatus.OK);
    }

    @PostMapping("save")
    public ResponseEntity<CertificateDto> addCertificate(@RequestBody CertificateDto certificateDto) {
certificateServiceImpl.saveCertificate(certificateDto);
return new ResponseEntity<>(certificateDto, HttpStatus.OK);
    }
}