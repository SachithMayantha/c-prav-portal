package com.c_prav.portal.controller;

import com.c_prav.portal.dto.ClientDto;
import com.c_prav.portal.dto.TestReportDto;
import com.c_prav.portal.service.TestReportService;
import com.c_prav.portal.service.impl.TestReportServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("report")
@CrossOrigin
public class TestReportController {

    private TestReportServiceImpl testReportService;

    @GetMapping("{n_product_id}")
    public ResponseEntity<List<TestReportDto>> getTestReports(@PathVariable("n_product_id") int n_product_id) throws ParseException {
        return new ResponseEntity<>(testReportService.getTestReportsByProductID(n_product_id), HttpStatus.OK);
    }

    @PostMapping("save")
    public ResponseEntity<TestReportDto> saveTestReport(@RequestBody TestReportDto testReportDto) throws ParseException {
        return new ResponseEntity<>(testReportService.saveTestReport(testReportDto), HttpStatus.OK);
    }
}