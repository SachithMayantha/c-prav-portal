package com.c_prav.portal.controller;

import com.c_prav.portal.dto.CountryDto;
import com.c_prav.portal.service.impl.CountryServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("country")
@AllArgsConstructor
@CrossOrigin
public class CountryController {

    private CountryServiceImpl countryService;

    @PostMapping("save")
    public ResponseEntity<String> saveCountry(@RequestBody CountryDto countryDto) {
        String msg = countryService.saveCountry(countryDto);
        return new ResponseEntity<>(msg, HttpStatus.CREATED);
    }

    @DeleteMapping("{countryId}")
    public ResponseEntity<String> deleteCountry(@PathVariable("countryId") Integer countryId) {
        String msg = countryService.deleteCountry(countryId);
        return new ResponseEntity<>(msg, HttpStatus.OK);
    }

    @GetMapping("{countryId}")
    public ResponseEntity<CountryDto> getCountryById(@PathVariable("countryId") Integer countryId) {
        CountryDto countryDto = countryService.getCountryById(countryId);
        return new ResponseEntity<>(countryDto, HttpStatus.OK);
    }

    @GetMapping("getCountries")
    public ResponseEntity<List<CountryDto>> getAllCountries() {
        return new ResponseEntity<>(countryService.getAllCountries(), HttpStatus.OK);
    }

    @PutMapping("update")
    public ResponseEntity<CountryDto> updateCountry(@RequestBody CountryDto countryDto) {
       return new ResponseEntity<>(countryService.updateCountry(countryDto), HttpStatus.OK);
    }
}
