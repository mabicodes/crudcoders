package com.example.femtechlist.controller;

import java.util.List;
import com.example.femtechlist.model.User;
import com.example.femtechlist.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{id}")
    public List<User> getUsers() {
        return this.userRepository.findAll();
    }

    @PostMapping("/users")
    public ResponseEntity<User> create(@RequestBody User newUser) {
        User user = userRepository.save(newUser);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        userRepository.deleteById(id);
    }

}

