package com.c_prav.portal.mapper;

import com.c_prav.portal.dto.TestReportDto;
import com.c_prav.portal.entity.TestReportEntity;

import java.text.ParseException;
import java.text.SimpleDateFormat;

public class TestReportMapper {

    static SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    public static TestReportDto mapTestReportToTestReportDto(TestReportEntity testReportEntity) {

        return new TestReportDto(
                testReportEntity.getN_test_rep_id(),
                testReportEntity.getN_product_id(),
                testReportEntity.getC_uploaded_by(),
                testReportEntity.getC_file_cat_name(),
                testReportEntity.getC_rep_name(),
                testReportEntity.getC_file_type(),
                String.valueOf(testReportEntity.getD_date()),
                testReportEntity.getC_file_path()
        );
    }

    public static TestReportEntity mapTestReportToTestReportEntity(TestReportDto testReportDto) throws ParseException {

        return new TestReportEntity(
                testReportDto.getN_test_rep_id(),
                testReportDto.getN_product_id(),
                testReportDto.getC_uploaded_by(),
                testReportDto.getC_file_cat_name(),
                testReportDto.getC_rep_name(),
                testReportDto.getC_file_type(),
                dateFormat.parse(testReportDto.getD_date()),
                testReportDto.getC_file_path()
        );
    }
}