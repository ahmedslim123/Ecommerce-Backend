package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAll();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id) {
        User user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }


    @PostMapping("/user")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        userService.addUser(user);
        return ResponseEntity.ok(user);
    }
    @PostMapping(value = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> loginUser(@RequestBody User loginUser ) {
        try {
            boolean success = userService.authenticateUser(loginUser.getEmail(), loginUser.getPassword());
            if (success) {
                return ResponseEntity.ok().body(Collections.singletonMap("success", true));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap("message", "Invalid credentials"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Collections.singletonMap("message", "An error occurred"));
        }
    }

    @GetMapping("/user")
    public ResponseEntity<User> getUser(@RequestParam String email) {
        User user = userService.findByEmail(email);
        return ResponseEntity.ok(user);
    }
    public static class LoginResponse {
        private boolean success;
        private String message;

        public LoginResponse(boolean success, String message) {
            this.success = success;
            this.message = message;
        }
    }
    @RequestMapping(method = RequestMethod.POST, value = "/Users")
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<Void> updateUser(@RequestBody User user, @PathVariable int id) {
        userService.updateUser(user, id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }

}
