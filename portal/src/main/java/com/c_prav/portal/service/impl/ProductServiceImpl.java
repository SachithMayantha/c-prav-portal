package com.c_prav.portal.service.impl;

import com.c_prav.portal.dto.ProductDto;
import com.c_prav.portal.entity.ClientProductEntity;
import com.c_prav.portal.entity.ProductEntity;
import com.c_prav.portal.mapper.ProductMapper;
import com.c_prav.portal.repository.ClientProductRepository;
import com.c_prav.portal.repository.ProductRepository;
import com.c_prav.portal.service.ProductService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {

    private ClientProductRepository clientProductRepository;

    private ProductRepository productRepository;

    @Override
    public String saveProduct(ProductDto productDto, String clientId) {
        try {
            ProductEntity productEntity = productRepository.save(ProductMapper.mapToProductEntity(productDto));
            System.out.println("Client ID: " + Integer.parseInt(clientId));
            ClientProductEntity clientProductEntity = new ClientProductEntity(
                    Integer.parseInt(clientId),
                    productEntity.getN_product_id()
            );
            System.out.println("Product ID "+productEntity.getN_product_id());
            clientProductRepository.save(clientProductEntity);

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

    @Transactional
    @Override
    public String deleteProduct(Integer id) {
        try {
            System.out.println("Product ID: " + id);
            productRepository.deleteById(id);
            clientProductRepository.deleteByProductID(id);
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

    @Override
    public List<ProductDto> getAllProductsByClientId(Integer clientId) {
        List<ProductEntity> entities = productRepository.findProductsByClientId(clientId);
        return entities.stream().map(ProductMapper::mapToProductDto).collect(Collectors.toList());
    }

    public List<ProductDto> getProductsByEmail(String email) {
        List<ProductEntity> entities = productRepository.findProductsByClientEmail(email);
    return entities.stream().map(ProductMapper::mapToProductDto).collect(Collectors.toList());
    }
}
