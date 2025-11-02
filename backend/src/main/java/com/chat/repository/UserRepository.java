package com.chat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chat.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{
	
	List<User> findByEmail(String email);
	
	List<User> findByEmailAndPassword(String email, String password);
}

