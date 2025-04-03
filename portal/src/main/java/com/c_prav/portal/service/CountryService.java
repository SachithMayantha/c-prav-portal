package com.c_prav.portal.service;

import com.c_prav.portal.dto.CountryDto;
import com.c_prav.portal.dto.LeadDto;

import java.util.List;

public interface CountryService {

    String saveCountry(CountryDto countryDto);

    CountryDto getCountryById(Integer id);

    List<CountryDto> getAllCountries();

    String deleteCountry(Integer id);

    CountryDto updateCountry(CountryDto countryDto);
}
