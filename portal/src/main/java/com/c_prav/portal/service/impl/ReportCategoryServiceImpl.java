package com.c_prav.portal.service.impl;

import com.c_prav.portal.entity.ReportCategoryEntity;
import com.c_prav.portal.repository.ReportCategoryRepository;
import com.c_prav.portal.service.ReportCategoryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ReportCategoryServiceImpl implements ReportCategoryService {

    private ReportCategoryRepository reportCategoryRepository;


    @Override
    public List<ReportCategoryEntity> getAllCategories() {
        return reportCategoryRepository.findAll();
    }

    @Override
    public ReportCategoryEntity saveCategory(ReportCategoryEntity category) {
        return reportCategoryRepository.save(category);
    }
}
