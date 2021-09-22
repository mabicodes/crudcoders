package com.example.femtechlist.controller;

import java.util.List;
import com.example.femtechlist.model.User;
import com.example.femtechlist.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }
    @GetMapping("/users/{studentPromotion}")
    public List<User> getUsersByProm(@PathVariable String studentPromotion){
        return userRepository.findByStudentPromotion(studentPromotion);
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

/*  TRY 2

    @PutMapping("/{id}")
    public ResponseEntity updateUser(@PathVariable Long id, @RequestBody User user)
        User currentUser= userRepository.findById(id).orElseThrow(RuntimeException::new);
            currentUser.setName(user.getName());
        currentUser.setEmail(user.getEmail());
    currentUser = userRepository.save(user);

        return ResponseEntity.ok(userClient);
    }
   @PostMapping("/save")
    public String saveUser(@RequestBody User user){
    userRepository.save(user);
    return "Guardado";
    }

*/
