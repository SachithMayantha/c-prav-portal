package com.c_prav.portal.service.impl;

import com.c_prav.portal.dto.ProductDto;
import com.c_prav.portal.entity.ProductEntity;
import com.c_prav.portal.mapper.ProductMapper;
import com.c_prav.portal.repository.ProductRepository;
import com.c_prav.portal.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    @Override
    public String saveProduct(ProductDto productDto) {
        try {
            productRepository.save(ProductMapper.mapToProductEntity(productDto));
            return "Product saved successfully";
        }catch (Exception e){
            return e.getMessage();
        }
    }

    @Override
    public ProductDto getProductById(Integer id) {
        ProductEntity productEntity = productRepository.findById(id).get();
        return ProductMapper.mapToProductDto(productEntity);
    }

    @Override
    public List<ProductDto> getAllProducts() {
        List<ProductEntity> productEntities = productRepository.findAll();
        return productEntities.stream().map(ProductMapper::mapToProductDto).collect(Collectors.toList());
    }

    @Override
    public String deleteProduct(Integer id) {
        try {
            productRepository.deleteById(id);
            return "Product deleted successfully";
        }catch (Exception e){
            return e.getMessage();
        }
    }

    @Override
    public ProductDto updateProduct(ProductDto productDto) {
        ProductEntity productEntity = productRepository.save(ProductMapper.mapToProductEntity(productDto));
        return ProductMapper.mapToProductDto(productEntity);
    }
}
