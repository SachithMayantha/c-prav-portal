package com.c_prav.portal.repository;

import com.c_prav.portal.entity.CertificateEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CertificateRepository extends JpaRepository<CertificateEntity, Integer> {
    @Query("SELECT c FROM CertificateEntity c WHERE c.n_product_id = :productId")
    List<CertificateEntity> getCertificatesByN_product_id(@Param("productId") Integer productId);
}