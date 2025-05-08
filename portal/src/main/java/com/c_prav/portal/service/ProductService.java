package com.c_prav.portal.service;

import com.c_prav.portal.dto.LeadDto;
import com.c_prav.portal.dto.ProductDto;
import org.springframework.http.HttpStatusCode;

import java.util.List;

public interface ProductService {

    String saveProduct(ProductDto productDto, String clientId);

    ProductDto getProductById(Integer id);

    List<ProductDto> getAllProducts();

    String deleteProduct(Integer id);

    ProductDto updateProduct(ProductDto productDto);

    List<ProductDto> getAllProductsByClientId(Integer id);

    List<ProductDto> getProductsByEmail(String email);
}
