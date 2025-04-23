package com.c_prav.portal.repository;

import com.c_prav.portal.entity.ProductTechEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductTechRepository extends JpaRepository<ProductTechEntity, Integer> {


    // Custom query to find all technologies associated with a product using n_product_id
    @Query("SELECT pt FROM ProductTechEntity pt WHERE pt.n_product_id = :productId")
    List<ProductTechEntity> findByNProductId(int productId);

    // Custom query to delete all technologies associated with a product using n_product_id
    @Modifying
    @Query("DELETE FROM ProductTechEntity pt WHERE pt.n_product_id = :productId")
    void deleteByNProductId(int productId);
}
