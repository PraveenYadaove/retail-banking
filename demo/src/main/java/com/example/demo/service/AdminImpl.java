package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Admin;
import com.example.demo.repository.Adminrepo;

@Service
public class AdminImpl  implements Adminservice{
	@Autowired
    private Adminrepo adminRepository;
	@Override
    public void saveOrUpdate(Admin student) {
       adminRepository.save(student);
    }

    @Override
    public List<Admin> getAllAdmin() {
    	List<Admin> books = new ArrayList<Admin>();  
    	adminRepository.findAll().forEach(books1 -> books.add(books1));  
    	return books; 
    }
    @Override
    public Admin login(int aid, String passwords) {
  	  Admin user = adminRepository.findByaidAndPasswords(aid, passwords);
  	   return user;
  	  }
   
}
