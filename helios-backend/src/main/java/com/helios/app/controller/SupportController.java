package com.helios.app.controller;

import com.helios.app.model.SupportReport;
import com.helios.app.repository.SupportReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/support")
public class SupportController {
    @Autowired
    private SupportReportRepository supportReportRepository;

    @PostMapping("/report")
    public ResponseEntity<SupportReport> createReport(
            @RequestParam("descripcion") String descripcion,
            @RequestParam("fecha") String fecha,
            @RequestParam(value = "pantallazo", required = false) MultipartFile pantallazo,
            @RequestParam(value = "userId", required = false) Long userId
    ) {
        String pantallazoFileName = null;
        if (pantallazo != null && !pantallazo.isEmpty()) {
            pantallazoFileName = pantallazo.getOriginalFilename();
            // Aquí deberías guardar el archivo en el sistema de archivos o almacenamiento
        }
        SupportReport report = SupportReport.builder()
                .descripcion(descripcion)
                .fecha(LocalDateTime.parse(fecha))
                .pantallazo(pantallazoFileName)
                .userId(userId)
                .build();
        return ResponseEntity.ok(supportReportRepository.save(report));
    }
} 