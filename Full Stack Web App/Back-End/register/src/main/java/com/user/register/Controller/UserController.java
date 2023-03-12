package com.user.register.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.user.register.model.User;
import com.user.register.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/adduser")
	public String addUser(@RequestBody User user) {
		
		System.out.println(user.getEmail());
		
		userService.addUser(user);
		return "New User Added";
		
	}
	@GetMapping("/u")
	public String addUser() {
		return "<h1>Khizar</h1>";
	}
}
