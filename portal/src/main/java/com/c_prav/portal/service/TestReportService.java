package com.c_prav.portal.service;


import com.c_prav.portal.dto.TestReportDto;

import java.text.ParseException;
import java.util.List;

public interface TestReportService {
    List<TestReportDto> getTestReportsByProductID(int productID);

    TestReportDto saveTestReport(TestReportDto testReportDto) throws ParseException;
}
