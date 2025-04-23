package com.c_prav.portal.controller;

import com.c_prav.portal.entity.ReportCategoryEntity;
import com.c_prav.portal.service.impl.ReportCategoryServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("report-category")
@AllArgsConstructor
public class ReportCategoryController {

    private ReportCategoryServiceImpl reportCategoryService;

    @GetMapping
    public List<ReportCategoryEntity> getAllCategories() {
        return reportCategoryService.getAllCategories();
    }

    @PostMapping
    public ReportCategoryEntity saveCategory(@RequestBody ReportCategoryEntity category) {
        return reportCategoryService.saveCategory(category);
    }
}
