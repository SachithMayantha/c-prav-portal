package com.c_prav.portal.service.impl;

import com.c_prav.portal.dto.ClientDto;
import com.c_prav.portal.dto.UserDto;
import com.c_prav.portal.entity.ClientEntity;
import com.c_prav.portal.mapper.ClientMapper;
import com.c_prav.portal.mapper.UserMapper;
import com.c_prav.portal.repository.ClientRepository;
import com.c_prav.portal.service.ClientService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ClientServiceImpl implements ClientService {

    private ClientRepository clientRepository;

    @Override
    public String saveClient(ClientDto clientDto) {
        try{
            clientRepository.save(ClientMapper.mapClientDtoToClientEntity(clientDto));
            return "User Saved";
        }catch (Exception e){
            return e.getMessage();
        }
    }

    @Override
    public ClientDto getClientById(Integer id) {
        ClientEntity clientEntity = clientRepository.findById(id).get();
        return ClientMapper.mapClientToClientDto(clientEntity);
    }

    @Override
    public List<ClientDto> getAllClients() {
        List<ClientEntity> clientEntities = clientRepository.findAll();
        return clientEntities.stream().map(ClientMapper::mapClientToClientDto).collect(Collectors.toList());
    }

    @Override
    public String deleteClient(Integer id) {
        try {
            clientRepository.deleteById(id);
            return "Deleted Client";
        }catch (Exception e){
            return e.getMessage();
        }
    }

    @Override
    public ClientDto updateClient(ClientDto clientDto) {
        ClientEntity clientEntity = clientRepository.save(ClientMapper.mapClientDtoToClientEntity(clientDto));
        return ClientMapper.mapClientToClientDto(clientEntity);
    }
}
