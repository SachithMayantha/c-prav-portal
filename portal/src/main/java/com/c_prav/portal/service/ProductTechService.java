package com.c_prav.portal.service;

import com.c_prav.portal.entity.ProductTechEntity;

import java.util.List;

public interface ProductTechService {

    List<ProductTechEntity> getTechnologiesByProductId(int productId);

    void updateProductTechnologies(int productId, List<Integer> technologyIds);

}
