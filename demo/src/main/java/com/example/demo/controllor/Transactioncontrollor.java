package com.example.demo.controllor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Transactions;
import com.example.demo.service.Transactionservice;


@CrossOrigin
@RestController
@RequestMapping("/transaction")

public class Transactioncontrollor {
	@Autowired
    private Transactionservice customerService;
    @GetMapping("/getAll")
    public List<Transactions> tranlist(){
        return customerService.getAllTrans();
    }
    
    @PostMapping("/getAllbyid")
    public List<Transactions> mylist(@RequestBody Transactions admin){
        return customerService.getAllTransdata(admin);
    }
    
    @PostMapping("/add")  
    private int savetrans(@RequestBody Transactions admin)   
    {  
    customerService.saveOrUpdate(admin);  
    return admin.getTid();  
    }
}

