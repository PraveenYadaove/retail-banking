package com.cts.bank.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.bank.model.Admin;

public interface Adminrepo  extends JpaRepository<Admin,Integer> {
	Admin findByaidAndPasswords(int aid, String passwords);
}