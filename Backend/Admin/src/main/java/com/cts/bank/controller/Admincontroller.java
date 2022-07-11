package com.cts.bank.controller;


import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.bank.model.Admin;
import com.cts.bank.service.Adminservice;




@CrossOrigin
@RestController
@RequestMapping("/admin")

public class Admincontroller {
	@Autowired
    private Adminservice adminService;
    @GetMapping("/getAll")
    public List<Admin> adminlist(){
        return adminService.getAllAdmin();
    }
    
    @PostMapping("/add")  
    private int saveadmin(@RequestBody Admin admin)   
    {  
    adminService.saveOrUpdate(admin);  
    return admin.getAid();  
    }
    @PostMapping("/login")
    public String login(@RequestBody Admin admin) {
    	
    	Admin oauthUser = adminService.login(admin.getAid(), admin.getPasswords());
    
 
     System.out.print(admin.getAid());
     if(Objects.nonNull(oauthUser))
     {
    	 
    		return "success";
    
    
     } else {
    	 return "failed";
    
    
     }
    }
}


