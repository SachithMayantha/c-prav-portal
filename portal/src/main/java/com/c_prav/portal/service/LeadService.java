package com.c_prav.portal.service;

import com.c_prav.portal.dto.LeadDto;
import com.c_prav.portal.entity.LeadEntity;
import com.c_prav.portal.repository.LeadRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

public interface LeadService {

    void saveLead(LeadDto leadDto);

    LeadDto getLeadDtoById(Integer id);
}
