package com.example.femtechlist;

import com.example.femtechlist.model.User;
import com.example.femtechlist.repository.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class CrudlistApplication {


    public static void main(String[] args) {

        ConfigurableApplicationContext configurableApplicationContext =
            SpringApplication.run(CrudlistApplication.class, args);
        UserRepository userRepository =
                configurableApplicationContext.getBean(UserRepository.class);
    }
}

