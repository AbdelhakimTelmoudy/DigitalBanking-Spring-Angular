package org.dgitalbanking.backend.web;


import org.dgitalbanking.backend.dtos.*;
import org.dgitalbanking.backend.exceptions.BalanceNotSufficientException;
import org.dgitalbanking.backend.exceptions.BankAccountNotFoundException;
import org.dgitalbanking.backend.exceptions.CustomerNotFoundException;
import org.dgitalbanking.backend.services.BankAccountService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin("*")
public class BankAccountRestAPI {
    private BankAccountService bankAccountService;

    public BankAccountRestAPI(BankAccountService bankAccountService) {
        this.bankAccountService = bankAccountService;
    }

    @GetMapping("/{accountId}")
    public BankAccountDTO getBankAccount(@PathVariable String accountId) throws BankAccountNotFoundException {
        return bankAccountService.getBankAccount(accountId);
    }
    @GetMapping("")
    public List<BankAccountDTO> listAccounts(){
        return bankAccountService.bankAccountList();
    }
    @GetMapping("/{accountId}/operations")
    public List<AccountOperationDTO> getHistory(@PathVariable String accountId){
        return bankAccountService.accountHistory(accountId);
    }

    @GetMapping("/{accountId}/pageOperations")
    public AccountHistoryDTO getAccountHistory(
            @PathVariable String accountId,
            @RequestParam(name="page",defaultValue = "0") int page,
            @RequestParam(name="size",defaultValue = "5")int size) throws BankAccountNotFoundException {
        return bankAccountService.getAccountHistory(accountId,page,size);
    }
    @PostMapping("/debit")
    public DebitDTO debit(@RequestBody DebitDTO debitDTO) throws BankAccountNotFoundException, BalanceNotSufficientException {
        this.bankAccountService.debit(debitDTO.getAccountId(),debitDTO.getAmount(),debitDTO.getDescription());
        return debitDTO;
    }
    @PostMapping("/credit")
    public CreditDTO credit(@RequestBody CreditDTO creditDTO) throws BankAccountNotFoundException {
        this.bankAccountService.credit(creditDTO.getAccountId(),creditDTO.getAmount(),creditDTO.getDescription());
        return creditDTO;
    }
    @PostMapping("/transfer")
    public void transfer(@RequestBody TransferRequestDTO transferRequestDTO) throws BankAccountNotFoundException, BalanceNotSufficientException {
        this.bankAccountService.transfer(
                transferRequestDTO.getAccountSource(),
                transferRequestDTO.getAccountDestination(),
                transferRequestDTO.getAmount());
    }
    @PostMapping("/saveSavingBankAccount")
    public SavingBankAccountDTO saveSavingBankAccount(@RequestBody RequestBankAccount dto) throws CustomerNotFoundException {
        return bankAccountService.saveSavingBankAccount(dto.getInitialBalance(),dto.getInterestRate(),dto.getCustomerId());
    }

    @PostMapping("/saveCurrentBankAccount")
    public CurrentBankAccountDTO saveCurrentBankAccount(@RequestBody RequestBankAccount dto) throws CustomerNotFoundException {
        return bankAccountService.saveCurrentBankAccount(dto.getInitialBalance(),dto.getOverDraft(),dto.getCustomerId());
    }
    @DeleteMapping("/{accountId}")
    public void delete( @PathVariable String accountId)  {
        bankAccountService.deleteAccount(accountId);
    }
}
