package com.c_prav.portal.repository;

import com.c_prav.portal.entity.TestReportEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestReportRepository extends JpaRepository <TestReportEntity, Integer>{
}
