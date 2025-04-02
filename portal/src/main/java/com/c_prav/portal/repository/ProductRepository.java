package com.c_prav.portal.repository;

import com.c_prav.portal.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {
}
