import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Formulario() {
  const [inputValues, setInputValues] = useState({});

  function handleChange(event) {
    setInputValues({
      ...inputValues,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('/my-form', inputValues)
      .then(response => {
        console.log("Fomulário enviado com sucesso!", response)
      })
      .catch(error => {
        console.log("Erro ao enviar formulário!", error)
      });
  }

  function reloadPage(){ 
    alert("Formulário enviado com sucesso!");
    window.location.reload(); 
  }

  return (
    <Box h="100vh">
        <Center
          as="header"
          h={150}
          bg="blue.300"
          color="white"
          fontWeight="bold"
          fontSize="4xl"
          pb="8"
        >
          Formulário para cadastro

        </Center>
        <Flex
          align="center"
          justify="center"
          bg="blue.100"
          h="calc(100vh - 150px)"
        >
          <Center
            w="100%"
            maxW={840}
            bg="white"
            top={100}
            borderRadius={5}
            p="6"
            boxShadow="0 1px 2px #ccc"
          >
            <FormControl display="flex" flexDir="column" gap="4" onSubmit={handleSubmit}>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                  <Input id="nome" onChange={handleChange} />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input id="email" type="email" onChange={handleChange} />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                  <Input id="nasc" type="date" onChange={handleChange}/>
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="natural">Naturalidade</FormLabel>
                  <Input id="natural" onChange={handleChange} />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="cel">Celular</FormLabel>
                  <Input id="cel" type="number" onChange={handleChange} />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="Tefone">Telefone</FormLabel>
                  <Input id="tel" type="number" onChange={handleChange} />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="endereco">Endereço</FormLabel>
                  <Input id="endereco" onChange={handleChange}/>
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="cidade">Cidade</FormLabel>
                  <Input id="cidade" onChange={handleChange} />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel>Sexo</FormLabel>
                  <RadioGroup defaultValue="Masculino" onChange={handleChange}>
                    <HStack spacing="24px">
                      <Radio value="Masculino">Masculino</Radio>
                      <Radio value="Feminino">Feminino</Radio>
                      <Radio value="Outro">Outro</Radio>
                    </HStack>
                  </RadioGroup>
                </Box>
              </HStack>
              <HStack justify="center">
                <Button
                  w={240}
                  p="6"
                  type="submit"
                  bg="blue.400"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="2"
                  _hover={{ bg: "blue.500" }}
                  onClick={reloadPage}
                >
                  Enviar
                </Button>
              </HStack>
            </FormControl>
          </Center>
        </Flex>
    </Box>
  );
}