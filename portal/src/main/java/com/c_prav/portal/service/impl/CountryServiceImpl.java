package com.c_prav.portal.service.impl;

import com.c_prav.portal.dto.CountryDto;
import com.c_prav.portal.entity.CountryEntity;
import com.c_prav.portal.mapper.CountryMapper;
import com.c_prav.portal.mapper.LeadMapper;
import com.c_prav.portal.repository.CountryRepository;
import com.c_prav.portal.service.CountryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CountryServiceImpl implements CountryService {

    private CountryRepository countryRepository;

    @Override
    public String saveCountry(CountryDto countryDto) {
        try {
            countryRepository.save(CountryMapper.mapToCountryEntity(countryDto));
            return "Country saved";
        }catch (Exception e){
            return e.getMessage();
        }
    }

    @Override
    public CountryDto getCountryById(Integer id) {
        CountryEntity countryEntity = countryRepository.findById(id).get();
        return CountryMapper.mapToCountryDto(countryEntity);
    }

    @Override
    public List<CountryDto> getAllCountries() {
        List<CountryEntity> countryEntities = countryRepository.findAll();
        return countryEntities.stream().map(CountryMapper::mapToCountryDto).collect(Collectors.toList());
    }

    @Override
    public String deleteCountry(Integer id) {
        try {
            countryRepository.deleteById(id);
            return "Country deleted";
        }catch (Exception e){
            return e.getMessage();
        }
    }

    @Override
    public CountryDto updateCountry(CountryDto countryDto) {
        CountryEntity mappedCountryEntity =countryRepository.save(CountryMapper.mapToCountryEntity(countryDto));
        return CountryMapper.mapToCountryDto(mappedCountryEntity);
    }
}
