package com.c_prav.portal.service.impl;

import com.c_prav.portal.dto.TestReportDto;
import com.c_prav.portal.entity.ClientEntity;
import com.c_prav.portal.entity.TestReportEntity;
import com.c_prav.portal.mapper.ClientMapper;
import com.c_prav.portal.mapper.TestReportMapper;
import com.c_prav.portal.repository.TestReportRepository;
import com.c_prav.portal.service.TestReportService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TestReportServiceImpl implements TestReportService {

    private TestReportRepository testReportRepository;

    @Override
    public List<TestReportDto> getTestReports() {
        List<TestReportEntity> testReportEntities = testReportRepository.findAll();
        return testReportEntities.stream().map(TestReportMapper::mapTestReportToTestReportDto).collect(Collectors.toList());
    }
}
