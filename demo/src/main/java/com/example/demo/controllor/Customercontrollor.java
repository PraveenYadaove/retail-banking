package com.example.demo.controllor;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.Customer;

import com.example.demo.repository.Customerrepo;
import com.example.demo.service.Customerservice;

@CrossOrigin
@RestController
@RequestMapping("/customer")

public class Customercontrollor {
	@Autowired
    private Customerservice customerService;
	@Autowired
	private Customerrepo lRepo;
    @GetMapping("/getAll")
    public List<Customer> custlist(){
        return customerService.getAllCust();
    }
    
    @PostMapping("/add")  
    private int savecust(@RequestBody Customer admin)   
    {  
    	System.out.println(admin.getCbalance());
    customerService.saveOrUpdate(admin);  
    return admin.getCid();  
    }
    
    @PutMapping("/update/{cbalance}/{cid}/")
	public ResponseEntity<String> updatePriceByName(@PathVariable Double cbalance, @PathVariable int cid) {
		return new ResponseEntity<String>(lRepo.updatePriceByName(cbalance, cid)+" record(s) updated.", HttpStatus.OK);
	}
    @PostMapping("/login")
    public String login(@RequestBody Customer admin) {
    	
    	Customer oauthUser = customerService.login(admin.getCid(), admin.getPasswords());
    
 
     
     if(Objects.nonNull(oauthUser))
     {
    	 
    		return ""+admin.getCid();
    
    
     } else {
    	 return "failed";
    
    
     }
    }
    @PostMapping("/getbalance")
    public String mylist(@RequestBody Customer admin){
        return customerService.getBalance(admin);
    }
}

