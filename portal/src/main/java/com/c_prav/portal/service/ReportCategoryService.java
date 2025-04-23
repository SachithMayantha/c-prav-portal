package com.c_prav.portal.service;

import com.c_prav.portal.entity.ReportCategoryEntity;

import java.util.List;

public interface ReportCategoryService {

    List<ReportCategoryEntity> getAllCategories();

    ReportCategoryEntity saveCategory(ReportCategoryEntity category);
}
