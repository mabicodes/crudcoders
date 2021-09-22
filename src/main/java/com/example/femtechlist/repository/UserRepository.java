package com.example.femtechlist.repository;

import com.example.femtechlist.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByStudentPromotion(String studentPromotion);
}
