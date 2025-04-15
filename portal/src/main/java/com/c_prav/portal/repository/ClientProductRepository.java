package com.c_prav.portal.repository;

import com.c_prav.portal.entity.ClientProductEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientProductRepository extends JpaRepository<ClientProductEntity,Integer> {

    @Modifying
    @Transactional // add this here too (or use service-level @Transactional)
    @Query("DELETE FROM ClientProductEntity cp WHERE cp.n_product_id = :productId")
    void deleteByProductID(@Param("productId") int productId);
}
