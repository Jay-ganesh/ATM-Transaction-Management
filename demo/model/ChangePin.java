package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity

public class ChangePin {


    @Id
    @GeneratedValue
    private Long id;



    private Long pin;
    private Long newPin;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPin() {
        return pin;
    }

    public void setPin(Long pin) {
        this.pin = pin;
    }

    public Long getNewPin() {
        return newPin;
    }

    public void setNewPin(Long newPin) {
        this.newPin =newPin;
    }
}