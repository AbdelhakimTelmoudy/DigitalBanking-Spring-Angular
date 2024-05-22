package org.dgitalbanking.backend;

import org.dgitalbanking.backend.dtos.BankAccountDTO;
import org.dgitalbanking.backend.dtos.CurrentBankAccountDTO;
import org.dgitalbanking.backend.dtos.CustomerDTO;
import org.dgitalbanking.backend.dtos.SavingBankAccountDTO;
import org.dgitalbanking.backend.entities.AccountOperation;
import org.dgitalbanking.backend.entities.CurrentAccount;
import org.dgitalbanking.backend.entities.Customer;
import org.dgitalbanking.backend.entities.SavingAccount;
import org.dgitalbanking.backend.enums.AccountStatus;
import org.dgitalbanking.backend.enums.OperationType;
import org.dgitalbanking.backend.exceptions.CustomerNotFoundException;
import org.dgitalbanking.backend.repositories.AccountOperationRepository;
import org.dgitalbanking.backend.repositories.BankAccountRepository;
import org.dgitalbanking.backend.repositories.CustomerRepository;
import org.dgitalbanking.backend.services.BankAccountServiceImpl;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.stream.Stream;


@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(BankAccountServiceImpl bankAccountService){
        return args -> {
            Stream.of("noura","hamid","yassine").forEach(name->{
                CustomerDTO customer=new CustomerDTO();
                customer.setName(name);
                customer.setEmail(name+"@gmail.com");
                bankAccountService.saveCustomer(customer);
            });
            bankAccountService.listCustomers().forEach(customer->{
                try {
                    bankAccountService.saveCurrentBankAccount(Math.random()*90000,9000,customer.getId());
                    bankAccountService.saveSavingBankAccount(Math.random()*120000,5.5,customer.getId());

                } catch (CustomerNotFoundException e) {
                    e.printStackTrace();
                }
            });
            List<BankAccountDTO> bankAccounts = bankAccountService.bankAccountList();
            for (BankAccountDTO bankAccount:bankAccounts){
                for (int i = 0; i <10 ; i++) {
                    String accountId;
                    if(bankAccount instanceof SavingBankAccountDTO){
                        accountId=((SavingBankAccountDTO) bankAccount).getId();
                    } else{
                        accountId=((CurrentBankAccountDTO) bankAccount).getId();
                    }
                    bankAccountService.credit(accountId,10000+Math.random()*120000,"Credit");
                    bankAccountService.debit(accountId,1000+Math.random()*9000,"Debit");
                }
            }
        };
    }
}
