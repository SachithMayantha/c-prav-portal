package com.c_prav.portal.mapper;

import com.c_prav.portal.dto.TestReportDto;
import com.c_prav.portal.entity.TestReportEntity;

public class TestReportMapper {

    public static TestReportDto mapTestReportToTestReportDto(TestReportEntity testReportEntity) {

        return new TestReportDto(
                testReportEntity.getN_test_rep_id(),
                testReportEntity.getN_user_id(),
                testReportEntity.getC_file_cat_name(),
                testReportEntity.getC_rep_name(),
                testReportEntity.getC_file_type(),
                testReportEntity.getD_date(),
                testReportEntity.getC_file_path()
        );
    }

    public static TestReportEntity mapTestReportToTestReportEntity(TestReportDto testReportDto) {

        return new TestReportEntity(
                testReportDto.getN_test_rep_id(),
                testReportDto.getN_user_id(),
                testReportDto.getC_file_cat_name(),
                testReportDto.getC_rep_name(),
                testReportDto.getC_file_type(),
                testReportDto.getD_date(),
                testReportDto.getC_file_path()
        );
    }
}
