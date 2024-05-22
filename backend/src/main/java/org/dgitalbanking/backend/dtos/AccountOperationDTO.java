package org.dgitalbanking.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.dgitalbanking.backend.enums.OperationType;

import java.util.Date;

@Data
public class AccountOperationDTO {
    private Long id;
    private Date operationDate;
    private double amount;
    private OperationType type;
    private String description;
}

