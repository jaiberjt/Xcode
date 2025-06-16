package com.helios.app.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "providers")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false, unique = true)
    private String ruc;

    private String direccion;
    private String telefono;
    private String email;
    private String productos;
    private String estado;
} 