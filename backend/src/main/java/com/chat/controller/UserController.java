package com.chat.controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.chat.entity.Message;
import com.chat.entity.User;
import com.chat.repository.MessageRepo;
import com.chat.repository.UserRepository;

@RestController //now it will be accepting request from the frontend
@CrossOrigin(origins = "http://localhost:5173/")
public class UserController {
	
	@Autowired
	private UserRepository ur;
		
	@Autowired
	private MessageRepo mr;
	
	@PostMapping("/signup")      //this method will work whenever frontend is sending a request to /signup

	public boolean userSignup(@RequestBody User user) {
		boolean b = false;
		
		List<User> list = ur.findByEmail(user.getEmail());

		if(list.size()==0) {
			ur.save(user);
			b=true;
		}

		return b;
	}

	@PostMapping("/login")
	public User userLogin(@RequestParam String email, @RequestParam String password) {
		
	
		List<User> list = ur.findByEmailAndPassword(email, password);
		
		if(list.size()!=0) {
			return list.get(0);
		}
		else {
			return null;
		}
	}

	@GetMapping("/all-users")
	public List<User> allUsers(){
		return ur.findAll();
	}
	
	@PostMapping("/send-msg")
	public void msg(@RequestParam String sender,
					@RequestParam String receiver,
					@RequestParam String msg,
					@RequestParam String time
			) {
		
		
		Message message = new Message();
		
		message.setMsg(msg);
		message.setReceiver(receiver);
		message.setSender(sender);
		message.setTime(time);
		
		mr.save(message);
	}
	
	@PostMapping("/check-msg")
	public List<Message> checkMsg(@RequestParam String sender, @RequestParam String receiver){
		List<Message> mlist1 = mr.findBySenderAndReceiver(sender, receiver);
		
		List<Message> mlist2 = mr.findBySenderAndReceiver(receiver, sender);
		mlist1.addAll(mlist2);
		
		mlist1.sort((m1,m2)-> Integer.compare(m1.getId(), m2.getId()));
		
		return mlist1;
	}
}






