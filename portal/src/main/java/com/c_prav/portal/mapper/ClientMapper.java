package com.c_prav.portal.mapper;

import com.c_prav.portal.dto.ClientDto;
import com.c_prav.portal.entity.ClientEntity;

public class ClientMapper {
    public static ClientDto mapClientToClientDto(ClientEntity clientEntity) {
        return new ClientDto(
                clientEntity.getN_client_id(),
                clientEntity.getC_company(),
                clientEntity.getC_contact_person(),
                clientEntity.getC_mobile(),
                "",

                clientEntity.getC_email(),
                clientEntity.getC_address()
        );
    }
    public static ClientEntity mapClientDtoToClientEntity(ClientDto clientDto) {
        return new ClientEntity(
                clientDto.getClientId(),
                clientDto.getCompany(),
                clientDto.getContactPerson(),
                clientDto.getMobile(),
                clientDto.getEmail(),
                clientDto.getAddress()
        );
    }
}
