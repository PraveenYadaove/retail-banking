package com.cts.bank.service;


import java.util.List;

import com.cts.bank.model.Admin;


public interface Adminservice {
	public List<Admin> getAllAdmin();
	 public void saveOrUpdate(Admin cus);
	 public Admin login(int aid, String passwords);
}

