package org.dgitalbanking.backend.dtos;
import lombok.Data;
import lombok.ToString;
import org.dgitalbanking.backend.enums.AccountStatus;

import java.util.Date;
@Data
@ToString
public class SavingBankAccountDTO extends BankAccountDTO {
    private String id;
    private double balance;
    private Date createdAt;
    private String status;
    private CustomerDTO customerDTO;
    private double interestRate;
}
