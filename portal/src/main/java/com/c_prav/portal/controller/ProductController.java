package com.c_prav.portal.controller;

import com.c_prav.portal.dto.ProductDto;
import com.c_prav.portal.service.impl.ProductServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("product")
@AllArgsConstructor
@CrossOrigin
public class ProductController {

    private ProductServiceImpl productService;

    @PostMapping("save")
    public ResponseEntity<String> saveProduct(@RequestBody ProductDto productDto) {
        String msg = productService.saveProduct(productDto);
        return new ResponseEntity<>(msg, HttpStatus.CREATED);
    }

    @DeleteMapping("{productId}")
    public ResponseEntity<String> deleteProduct(@PathVariable("productId") Integer productId) {
        String msg = productService.deleteProduct(productId);
        return new ResponseEntity<>(msg, HttpStatus.OK);
    }

    @GetMapping("{productId}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable("productId") Integer productId) {
        return new ResponseEntity<>(productService.getProductById(productId), HttpStatus.OK);
    }

    @GetMapping("getProducts")
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }

    @PutMapping("update")
    public ResponseEntity<ProductDto> updateProduct(@RequestBody ProductDto productDto) {
        return new ResponseEntity<>(productService.updateProduct(productDto), HttpStatus.OK);
    }

    @GetMapping("getProducts/{clientId}")
    public ResponseEntity<List<ProductDto>> getProductsByClientId(@PathVariable("clientId") Integer clientId) {
       return new ResponseEntity<>(productService.getAllProductsByClientId(clientId), HttpStatus.OK);
    }
}
