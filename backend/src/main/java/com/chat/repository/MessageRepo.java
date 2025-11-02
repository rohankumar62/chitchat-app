package com.chat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chat.entity.Message;


@Repository
public interface MessageRepo extends JpaRepository<Message, Integer>{

	
	List<Message> findBySenderAndReceiver(String sender, String receiver);
}
