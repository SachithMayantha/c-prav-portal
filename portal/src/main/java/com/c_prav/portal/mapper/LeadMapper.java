package com.c_prav.portal.mapper;

import com.c_prav.portal.dto.LeadDto;
import com.c_prav.portal.entity.LeadEntity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class LeadMapper {

    static SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    public static LeadDto maptoLeadDto(LeadEntity leadEntity) {

        return new LeadDto(
                leadEntity.getNLeadId(),
                leadEntity.getCLeadDescription(),
                String.valueOf(leadEntity.getDStartDate())
        );
    }

    public static LeadEntity maptoLeadEntity(LeadDto leadDto) {

        LeadEntity leadEntity;

        try {
            leadEntity = new LeadEntity(
                    leadDto.getLeadId(),
                    leadDto.getLeadDescription(),
                    dateFormat.parse(leadDto.getStartDate())
            );
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        return leadEntity;
    }
}
