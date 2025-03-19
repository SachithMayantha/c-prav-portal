package com.c_prav.portal.service;

import com.c_prav.portal.dto.LeadDto;
import com.c_prav.portal.entity.LeadEntity;
import com.c_prav.portal.repository.LeadRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

public interface LeadService {

    String saveLead(LeadDto leadDto);

    LeadDto getLeadById(Integer id);

    List<LeadDto> getAllLeads();

    String deleteLead(Integer id);

    LeadDto updateLead(LeadDto leadDto);
}
