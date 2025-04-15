package com.c_prav.portal.controller;

import com.c_prav.portal.dto.ClientDto;
import com.c_prav.portal.dto.UserDto;
import com.c_prav.portal.service.ClientService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/client")
@CrossOrigin
public class ClientController {
    private ClientService clientService;

    @PostMapping("save")
    public ResponseEntity<String> saveClient(@RequestBody ClientDto clientDto) {
        String msg = clientService.saveClient(clientDto);
        return new ResponseEntity<>(msg, HttpStatus.CREATED);
    }

    @DeleteMapping("{clientId}")
    public ResponseEntity<String> deleteClient(@PathVariable("clientId") Integer clientId) {
        String msg = clientService.deleteClient(clientId);
        return new ResponseEntity<>(msg, HttpStatus.OK);
    }

    @GetMapping("{clientId}")
    public ResponseEntity<ClientDto> getClientById(@PathVariable("clientId") Integer clientId) {
        return new ResponseEntity<>(clientService.getClientById(clientId), HttpStatus.OK);
    }

    @GetMapping("getClients")
    public ResponseEntity<List<ClientDto>> getAllClients() {
        return new ResponseEntity<>(clientService.getAllClients(), HttpStatus.OK);
    }

    @PutMapping("update")
    public ResponseEntity<ClientDto> updateClient(@RequestBody ClientDto clientDto) {
        return new ResponseEntity<>(clientService.updateClient(clientDto), HttpStatus.OK);
    }
}
