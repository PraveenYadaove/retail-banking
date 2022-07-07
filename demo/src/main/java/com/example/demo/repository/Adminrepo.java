package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Admin;

public interface Adminrepo  extends JpaRepository<Admin,Integer> {
	Admin findByaidAndPasswords(int aid, String passwords);
}
