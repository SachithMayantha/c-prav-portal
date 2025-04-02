package com.c_prav.portal.mapper;

import com.c_prav.portal.dto.CountryDto;
import com.c_prav.portal.entity.CountryEntity;

public class CountryMapper {

    public static CountryDto mapToCountryDto(CountryEntity countryEntity) {
        return new CountryDto(
                countryEntity.getN_country_id(),
                countryEntity.getC_country()
        );
    }

    public static CountryEntity mapToCountryEntity(CountryDto countryDto) {
        return new CountryEntity(
                countryDto.getCountryId(),
                countryDto.getCountry()
        );
    }
}
