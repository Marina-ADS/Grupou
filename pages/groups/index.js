import React, { useState, useContext, useEffect } from 'react';
import { UsuarioContext } from '../../contexts/user';

import {
  Container,
  Button,
  ButtonText,
  ContainerMessages
} from './style';

const goToGroupChat = (groupName,navigation) => {
  navigation.navigate("Chat",{group: groupName})
}

const Groups = ( { navigation } ) => {

  return (
    <Container>
      
      <ContainerMessages>
        
        <Button onPress={() => { goToGroupChat('group_development',navigation) }}>
          <ButtonText  >
            Desenvolvimento
          </ButtonText>
        </Button>
        
        <Button onPress={() => { goToGroupChat('group_webdesign',navigation) }}>
          <ButtonText>
            WebDesign
          </ButtonText>
        </Button>

        <Button onPress={() => { goToGroupChat('group_documentation',navigation) }}>
          <ButtonText>
            Documentação
          </ButtonText>
        </Button>

        <Button onPress={() => { goToGroupChat('group_database',navigation) }}>
          <ButtonText>
            Banco de Dados
          </ButtonText>
        </Button>

        <Button onPress={() => { goToGroupChat('group_support',navigation) }}>
          <ButtonText>
            Suporte
          </ButtonText>
        </Button>

        <Button onPress={() => { goToGroupChat('group_cybersecurity',navigation) }}>
          <ButtonText>
            Segurança Cibernética
          </ButtonText>
        </Button>



      </ContainerMessages>

    </Container>
  )
}

export default Groups
