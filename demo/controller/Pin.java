package com.example.demo.controller;

import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.ChangePin;
import com.example.demo.repositories.ChangeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Pin {
    @Autowired
    private ChangeRepository changeRepository;
    @PostMapping("/addpin")
    ChangePin newUser(@RequestBody ChangePin newUser){
        return changeRepository.save(newUser);
    }
    @GetMapping("/getpins")
    List<ChangePin> getUser(){
        return changeRepository.findAll();
    }
    @PutMapping("/updatepin/{id}")
    ChangePin updateUser(@RequestBody ChangePin newUser, @PathVariable Long id){
        return changeRepository.findById(id).map(user -> {
            user.setPin(newUser.getPin());
            user.setNewPin(newUser.getNewPin());
            return changeRepository.save(user);
        }).orElseThrow(()->new UserNotFoundException(id));
    }
    @GetMapping("/findpin/{id}")
    ChangePin getPinById(@PathVariable Long id){
        return changeRepository.findById(id)

                .orElseThrow(()->new UserNotFoundException(id));
    }
    @DeleteMapping("/deletepin/{id}")
    String deletePin (@PathVariable Long id) {
        if (!changeRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        changeRepository.deleteById(id);
        return "deleted pin";
    }

}