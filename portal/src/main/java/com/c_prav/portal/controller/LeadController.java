package com.c_prav.portal.controller;

import com.c_prav.portal.dto.LeadDto;
import com.c_prav.portal.service.LeadService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("lead")
@AllArgsConstructor
public class LeadController {

    private LeadService leadService;

    @PostMapping("save")
    public void saveLead(@RequestBody LeadDto leadDto) {

        leadService.saveLead(leadDto);
    }
}
