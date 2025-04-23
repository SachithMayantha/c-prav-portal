package com.c_prav.portal.controller;

import com.c_prav.portal.entity.ProductTechEntity;
import com.c_prav.portal.entity.TechnologyEntity;
import com.c_prav.portal.service.impl.ProductTechServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("technologies")
@AllArgsConstructor
public class ProductTechController {

    private ProductTechServiceImpl productTechService;

    // API to get all technologies for a product using n_product_id
    @GetMapping("{productId}")
    public ResponseEntity<List<ProductTechEntity>> getTechnologiesByProduct(@PathVariable int productId) {
        List<ProductTechEntity> technologies = productTechService.getTechnologiesByProductId(productId);
        return ResponseEntity.ok(technologies);
    }

    // API to update technologies for a product using n_product_id
    @PutMapping("{productId}")
    public ResponseEntity<String> updateTechnologiesForProduct(@PathVariable int productId,
                                                               @RequestBody List<Integer> technologyIds) {
        productTechService.updateProductTechnologies(productId, technologyIds);
        return ResponseEntity.ok("Technologies updated successfully for product " + productId);
    }
}
