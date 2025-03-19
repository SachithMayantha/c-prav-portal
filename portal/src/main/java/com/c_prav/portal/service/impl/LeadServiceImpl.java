package com.c_prav.portal.service.impl;

import com.c_prav.portal.dto.LeadDto;
import com.c_prav.portal.entity.LeadEntity;
import com.c_prav.portal.mapper.LeadMapper;
import com.c_prav.portal.repository.LeadRepository;
import com.c_prav.portal.service.LeadService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class LeadServiceImpl implements LeadService {

    private LeadRepository leadRepository;

    @Override
    public String saveLead(LeadDto leadDto) {

        try {
            leadRepository.save(LeadMapper.maptoLeadEntity(leadDto));
            return "Lead Saved!";
        }catch (Exception e){
            return e.getMessage();
        }
    }

    @Override
    public LeadDto getLeadById(Integer id) {

        LeadEntity leadEntity = leadRepository.findById(id).get();
        LeadDto leadDto = LeadMapper.maptoLeadDto(leadEntity);
        return leadDto;
    }

    @Override
    public List<LeadDto> getAllLeads() {
        List<LeadEntity> leadEntities = leadRepository.findAll();
        return leadEntities.stream().map(LeadMapper::maptoLeadDto).collect(Collectors.toList());
    }

    @Override
    public String deleteLead(Integer id) {
        try {
            leadRepository.deleteById(id);
            return "Lead Deleted!";
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    @Override
    public LeadDto updateLead(LeadDto leadDto) {

        leadRepository.save(LeadMapper.maptoLeadEntity(leadDto));
        return leadDto;
    }
}
