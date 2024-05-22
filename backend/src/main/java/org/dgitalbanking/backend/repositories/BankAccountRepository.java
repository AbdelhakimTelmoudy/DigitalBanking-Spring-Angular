package org.dgitalbanking.backend.repositories;

import org.dgitalbanking.backend.entities.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankAccountRepository extends JpaRepository<BankAccount,String> {
}
