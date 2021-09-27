package com.example.femtechlist.controller;

import java.util.List;
import com.example.femtechlist.model.User;
import com.example.femtechlist.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
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
        return userRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
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
    @PutMapping("/users/{id}")
    public ResponseEntity updateUser(@PathVariable Long id, @RequestBody User user) {
        User currentUser = userRepository.findById(id).orElseThrow(RuntimeException::new);
        currentUser.setId(user.getId());
        currentUser.setStudentName(user.getStudentName());
        currentUser.setStudentSurname(user.getStudentSurname());
        currentUser.setStudentAge(user.getStudentAge());
        currentUser.setCountryOrigin(user.getCountryOrigin());
        currentUser.setEducationalLevel(user.getEducationalLevel());
        currentUser.setStudentAddress(user.getStudentAddress());
        currentUser.setStudentPromotion(user.getStudentPromotion());
        currentUser.setEmailAddress(user.getEmailAddress());
                return ResponseEntity.ok(currentUser);
    }
    @DeleteMapping("/users/{id}")
    public void delete(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}
// GET -> fetch data
// POST -> save data
// PUT | PATH -> update date
// DELETE -> delete data







