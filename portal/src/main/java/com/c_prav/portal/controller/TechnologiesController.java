package com.c_prav.portal.controller;

import com.c_prav.portal.entity.TechnologyEntity;
import com.c_prav.portal.service.impl.TechnologyServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("technology")
@AllArgsConstructor
public class TechnologiesController {

    private TechnologyServiceImpl technologyService;

    @GetMapping("getAll")
    public List<TechnologyEntity> getTechnologies(){
        return technologyService.getTechnologies();
    }
}
