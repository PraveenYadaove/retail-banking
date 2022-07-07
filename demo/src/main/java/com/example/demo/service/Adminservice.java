package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Admin;


public interface Adminservice {
	public List<Admin> getAllAdmin();
	 public void saveOrUpdate(Admin cus);
	 public Admin login(int aid, String passwords);
}
