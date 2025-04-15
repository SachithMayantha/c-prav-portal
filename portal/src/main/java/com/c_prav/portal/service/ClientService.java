package com.c_prav.portal.service;

import com.c_prav.portal.dto.ClientDto;
import com.c_prav.portal.dto.UserDto;

import java.util.List;

public interface ClientService {
    String saveClient(ClientDto clientDto);

    ClientDto getClientById(Integer id);

    List<ClientDto> getAllClients();

    String deleteClient(Integer id);

    ClientDto updateClient(ClientDto clientDto);
}
