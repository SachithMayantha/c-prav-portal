package com.c_prav.portal.controller;

import com.c_prav.portal.dto.ClientDto;
import com.c_prav.portal.dto.TestReportDto;
import com.c_prav.portal.service.TestReportService;
import com.c_prav.portal.service.impl.TestReportServiceImpl;
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
@RequestMapping("report")
@CrossOrigin
public class TestReportController {

    private TestReportServiceImpl testReportService;

    @GetMapping("getReports")
    public ResponseEntity<List<TestReportDto>> getTestReports() {
        return new ResponseEntity<>(testReportService.getTestReports(), HttpStatus.OK);
    }
}
