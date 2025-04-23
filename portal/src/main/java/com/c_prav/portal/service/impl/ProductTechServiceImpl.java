package com.c_prav.portal.service.impl;

import com.c_prav.portal.entity.ProductEntity;
import com.c_prav.portal.entity.ProductTechEntity;
import com.c_prav.portal.entity.TechnologyEntity;
import com.c_prav.portal.repository.ProductRepository;
import com.c_prav.portal.repository.ProductTechRepository;
import com.c_prav.portal.repository.TechnologyRepository;
import com.c_prav.portal.service.ProductTechService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProductTechServiceImpl implements ProductTechService {

    private ProductTechRepository productTechRepository;

    // Get all technologies associated with a product using n_product_id
    public List<ProductTechEntity> getTechnologiesByProductId(int productId) {
        return productTechRepository.findByNProductId(productId);
    }

    // Update technologies for a product using n_product_id
    @Transactional
    public void updateProductTechnologies(int productId, List<Integer> technologyIds) {
        // First, delete the existing technologies associated with the product
        productTechRepository.deleteByNProductId(productId);

        // Now, add the new technologies associated with the product
        for (int techId : technologyIds) {
            ProductTechEntity productTech = new ProductTechEntity();
            productTech.setN_product_id(productId);
            productTech.setN_technology_id(techId);
            productTechRepository.save(productTech);
        }
    }
}
