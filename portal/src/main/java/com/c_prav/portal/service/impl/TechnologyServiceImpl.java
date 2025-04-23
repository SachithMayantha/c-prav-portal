package com.c_prav.portal.service.impl;

import com.c_prav.portal.entity.TechnologyEntity;
import com.c_prav.portal.repository.TechnologyRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TechnologyServiceImpl {

    private TechnologyRepository technologyRepository;

    public List<TechnologyEntity> getTechnologies(){
        return technologyRepository.findAll();
    }
}
