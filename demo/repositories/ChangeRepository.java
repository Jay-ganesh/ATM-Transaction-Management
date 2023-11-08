package com.example.demo.repositories;

import com.example.demo.model.ChangePin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChangeRepository extends JpaRepository< ChangePin,Long> {
}
