package com.cts.bank.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.bank.model.Admin;
import com.cts.bank.repo.Adminrepo;



@Service
public class AdminImpl  implements Adminservice{
	@Autowired
    private Adminrepo adminrepo;
	@Override
    public void saveOrUpdate(Admin student) {
       adminrepo.save(student);
    }

    @Override
    public List<Admin> getAllAdmin() {
    	List<Admin> books = new ArrayList<Admin>();  
    	adminrepo.findAll().forEach(books1 -> books.add(books1));  
    	return books; 
    }
    @Override
    public Admin login(int aid, String passwords) {
  	  Admin user = adminrepo.findByaidAndPasswords(aid, passwords);
  	   return user;
  	  }
   
}
