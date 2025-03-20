package com.c_prav.portal.service;

import com.c_prav.portal.dto.LeadDto;
import com.c_prav.portal.entity.LeadEntity;
import com.c_prav.portal.repository.LeadRepository;
import com.c_prav.portal.service.impl.LeadServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class LeadServiceImplTest {

    @Mock
    private LeadRepository leadRepository;

    @InjectMocks
    private LeadServiceImpl leadService;

    private LeadEntity leadEntity;
    private LeadDto leadDto;

    @BeforeEach
    void setUp() {
        leadEntity = new LeadEntity(1, 1, "Client Name","Company Name","Company Address","Company Details"
                ,BigInteger.valueOf(436667745),"Test Lead", new Date());
        leadDto = new LeadDto(1,1, "Test Name","Company Name","Company Address","Company Details"
                ,"546475745876","Test Lead", "2024-09-09");
    }

    @Test
    void saveLead_ShouldReturnSuccessMessage() {
        when(leadRepository.save(Mockito.any(LeadEntity.class))).thenReturn(leadEntity);
        String result = leadService.saveLead(leadDto);
        assertEquals("Lead Saved!", result);
    }

    @Test
    void getLeadById_ShouldReturnLeadDto() {
        when(leadRepository.findById(1)).thenReturn(Optional.of(leadEntity));
        LeadDto result = leadService.getLeadById(1);
        assertNotNull(result);
        assertEquals(leadDto.getLeadDescription(), result.getLeadDescription());
    }

    @Test
    void getAllLeads_ShouldReturnListOfLeads() {
        when(leadRepository.findAll()).thenReturn(Arrays.asList(leadEntity));
        List<LeadDto> leads = leadService.getAllLeads();
        assertFalse(leads.isEmpty());
        assertEquals(1, leads.size());
    }

    @Test
    void deleteLead_ShouldReturnSuccessMessage() {
        doNothing().when(leadRepository).deleteById(1);
        String result = leadService.deleteLead(1);
        assertEquals("Lead Deleted!", result);
    }

    @Test
    void updateLead_ShouldReturnUpdatedLeadDto() {
        when(leadRepository.save(Mockito.any(LeadEntity.class))).thenReturn(leadEntity);
        LeadDto result = leadService.updateLead(leadDto);
        assertEquals(leadDto.getLeadDescription(), result.getLeadDescription());
    }
}
