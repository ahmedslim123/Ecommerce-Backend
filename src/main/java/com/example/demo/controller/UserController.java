package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/user")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        userService.addUser(user);
        return ResponseEntity.ok(user);
    }

    @RequestMapping("/Userss")
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @RequestMapping("/Users")
    public List<User> getUsers() {
        return userService.getUser();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/Users")
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/User/{id}")
    public void updateUser(@RequestBody User user, @PathVariable int id) {
        userService.updateUser(user, id);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/User/{id}")
    public void deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
    }

    @RequestMapping("/User/{id}")
    public User getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }
}
