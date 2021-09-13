package com.example.femtechlist;

import com.example.femtechlist.model.User;
import com.example.femtechlist.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FemtechlistApplication implements CommandLineRunner {


    public static void main(String[] args) {
        SpringApplication.run(FemtechlistApplication.class, args);
    }

    @Autowired
    private UserRepository userRepository;
    @Override
    public void run(String... args) throws Exception {
        this.userRepository.save(new User("Nicole","Flores", "22" , "España", "ESO", "Carrer Valencia, 34 Barcelona" , "Femtech" , "nanisore@gmail.com"));
        this.userRepository.save(new User("Nicole","Flores", "22" , "España", "ESO", "Carrer Valencia, 34 Barcelona" , "Femtech" , "nanisore@gmail.com"));
        this.userRepository.save(new User("Nicole","Flores", "22" , "España", "ESO", "Carrer Valencia, 34 Barcelona" , "Femtech" , "nanisore@gmail.com"));
        this.userRepository.save(new User("Nicole","Flores", "22" , "España", "ESO", "Carrer Valencia, 34 Barcelona" , "Femtech" , "nanisore@gmail.com"));
        this.userRepository.save(new User("Nicole","Flores", "22" , "España", "ESO", "Carrer Valencia, 34 Barcelona" , "Femtech" , "nanisore@gmail.com"));
        this.userRepository.save(new User("Nicole","Flores", "22" , "España", "ESO", "Carrer Valencia, 34 Barcelona" , "Femtech" , "nanisore@gmail.com"));
        this.userRepository.save(new User("Nicole","Flores", "22" , "España", "ESO", "Carrer Valencia, 34 Barcelona" , "Femtech" , "nanisore@gmail.com"));
        this.userRepository.save(new User("Nicole","Flores", "22" , "España", "ESO", "Carrer Valencia, 34 Barcelona" , "Femtech" , "nanisore@gmail.com"));
        this.userRepository.save(new User("Nicole","Flores", "22" , "España", "ESO", "Carrer Valencia, 34 Barcelona" , "Femtech" , "nanisore@gmail.com"));

    }
}

