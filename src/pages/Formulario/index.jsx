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
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [naturalidade, setNaturalidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [celular, setCelular] = useState('');
  const [cidade, setCidade] = useState('');
  const [endereco, setEndereco] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
  
    if (nome && email && nascimento && naturalidade && telefone && celular && endereco && cidade) {
        axios.post('http://localhost:3000/clientes', {
          nome,
          email,
          nascimento,
          naturalidade,
          telefone,
          celular,
          endereco,
          cidade
        })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  
    useEffect(() => {
      axios.get('http://localhost:3000/clientes')
        .then((response) => {
          const { nome, email, nascimento, naturalidade, telefone, celular, endereco, cidade } = response.data;
          setNome(nome);
          setEmail(email);
          setNascimento(nascimento);
          setNaturalidade(naturalidade);
          setTelefone(telefone);
          setEndereco(endereco)
          setCelular(celular);
          setCidade(cidade);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []); 

    function refreshPage(){ 
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
            <form display="flex" flexDir="column" gap="4" onSubmit={handleSubmit}>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                  <Input id="nome" value={nome} onChange={e => setNome(e.target.value)}/>
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                  <Input id="nascimento" type="date" value={nascimento} onChange={e => setNascimento(e.target.value)} />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="natural">Naturalidade</FormLabel>
                  <Input id="naturalidade" value={naturalidade} onChange={e => setNaturalidade(e.target.value)}/>
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="cel">Celular</FormLabel>
                  <Input id="celular" type="number" value={celular} onChange={e => setCelular(e.target.value)} />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="Tefone">Telefone</FormLabel>
                  <Input id="telefone" type="number" value={telefone} onChange={e => setTelefone(e.target.value)} />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="endereco">Endereço</FormLabel>
                  <Input id="endereco" value={endereco}  onChange={e => setEndereco(e.target.value)} />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="cidade">Cidade</FormLabel>
                  <Input id="cidade" value={cidade} onChange={e => setCidade(e.target.value)} />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel>Sexo</FormLabel>
                  <RadioGroup defaultValue="Masculino">
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
                  type="button"
                  bg="blue.400"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="2"
                  _hover={{ bg: "blue.500" }}
                  onClick={ refreshPage }
                >
                  Enviar
                </Button>
              </HStack>
            </form>
          </Center>
        </Flex>
    </Box>
  );
}