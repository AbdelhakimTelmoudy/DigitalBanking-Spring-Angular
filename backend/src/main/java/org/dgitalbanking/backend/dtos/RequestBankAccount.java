package org.dgitalbanking.backend.dtos;

import lombok.Data;

@Data
public class RequestBankAccount {
    private double initialBalance ;
    private double overDraft;
    private Long customerId;
    private double interestRate;
}
