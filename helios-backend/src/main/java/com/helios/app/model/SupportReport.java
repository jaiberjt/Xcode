package com.helios.app.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "support_reports")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SupportReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 1000)
    private String descripcion;

    @Column(nullable = false)
    private LocalDateTime fecha;

    private String pantallazo;

    @Column(name = "user_id")
    private Long userId;
} 