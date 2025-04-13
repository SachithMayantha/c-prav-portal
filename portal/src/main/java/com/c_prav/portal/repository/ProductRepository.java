package com.c_prav.portal.repository;

import com.c_prav.portal.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {
    @Query("SELECT p FROM ProductEntity p JOIN ClientProductEntity pc ON p.n_product_id = pc.n_product_id WHERE pc.n_client_id = :clientId")
    List<ProductEntity> findProductsByClientId(@Param("clientId") Integer clientId);
}
