package com.c_prav.portal.repository;

import com.c_prav.portal.entity.TestReportEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestReportRepository extends JpaRepository <TestReportEntity, Integer>{

    @Query("SELECT tr FROM TestReportEntity tr WHERE tr.n_product_id = :productId")
    List<TestReportEntity> getTestReportsByProductId(@Param("productId") int productId);
}