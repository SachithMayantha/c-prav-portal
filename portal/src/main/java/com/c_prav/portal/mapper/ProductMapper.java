package com.c_prav.portal.mapper;

import com.c_prav.portal.dto.ProductDto;
import com.c_prav.portal.dto.UserDto;
import com.c_prav.portal.entity.ProductEntity;
import com.c_prav.portal.entity.UserEntity;

public class ProductMapper {

    public static ProductDto mapToProductDto(ProductEntity productEntity) {
        return new ProductDto(
                productEntity.getN_product_id(),
                productEntity.getC_company_name(),
                productEntity.getC_comments(),
                productEntity.getC_product_manager(),
                productEntity.getC_product_photos(),
                productEntity.getC_product_status()
        );
    }

    public static ProductEntity mapToProductEntity(ProductDto productDto) {
        ProductEntity productEntity = new ProductEntity();
        productEntity.setN_product_id(productDto.getProductId());
        productEntity.setC_company_name(productDto.getCompanyName());
        productEntity.setC_comments(productDto.getComments());
        productEntity.setC_product_manager(productDto.getProductManager());
        productEntity.setC_product_photos(productDto.getPhotos());
        productEntity.setC_product_status(productDto.getStatus());
        return productEntity;
    }
}
