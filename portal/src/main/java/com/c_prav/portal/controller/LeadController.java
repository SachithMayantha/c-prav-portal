package com.c_prav.portal.controller;

import com.c_prav.portal.dto.LeadDto;
import com.c_prav.portal.service.LeadService;
import com.c_prav.portal.service.impl.LeadServiceImpl;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("lead")
@AllArgsConstructor
@CrossOrigin
public class LeadController {

    private LeadServiceImpl leadService;

    @PostMapping("save")
    public ResponseEntity<String> saveLead(@RequestBody LeadDto leadDto) {
        String msg = leadService.saveLead(leadDto);
        return new ResponseEntity<>(msg, HttpStatus.CREATED);
    }

    @DeleteMapping("{leadId}")
    public ResponseEntity<String> deleteLead(@PathVariable("leadId") Integer leadId) {
        String msg = leadService.deleteLead(leadId);
        return new ResponseEntity<>(msg, HttpStatus.OK);
    }

    @GetMapping("{leadId}")
    public ResponseEntity<LeadDto> getLeadByLeadId(@PathVariable("leadId") Integer leadId) {
        return new ResponseEntity<>(leadService.getLeadById(leadId), HttpStatus.OK);
    }

    @GetMapping("getLeads")
    public ResponseEntity<List<LeadDto>> getAllLeads() {
        return new ResponseEntity<>(leadService.getAllLeads(), HttpStatus.OK);
    }

    @PutMapping("update")
    public ResponseEntity<LeadDto> updateLead(@RequestBody LeadDto leadDto) {
        return new ResponseEntity<>(leadService.updateLead(leadDto), HttpStatus.OK);
    }
}
