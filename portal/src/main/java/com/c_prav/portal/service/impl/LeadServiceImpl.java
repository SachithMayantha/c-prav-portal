package com.c_prav.portal.service.impl;

import com.c_prav.portal.dto.LeadDto;
import com.c_prav.portal.entity.LeadEntity;
import com.c_prav.portal.mapper.LeadMapper;
import com.c_prav.portal.repository.LeadRepository;
import com.c_prav.portal.service.LeadService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LeadServiceImpl implements LeadService {

    private LeadRepository leadRepository;

    @Override
    public void saveLead(LeadDto leadDto) {

        try {
            leadRepository.save(LeadMapper.maptoLeadEntity(leadDto));
        }catch (Exception e){
            e.printStackTrace();
        }
//        LeadDto dto = LeadMapper.maptoLeadDto(leadEntity);
//        return dto;
    }

    @Override
    public LeadDto getLeadDtoById(Integer id) {
        return null;
    }
}
