import React, { useState, useContext, useEffect } from 'react';
import { UsuarioContext } from '../../contexts/user';

import {
  Container,
  Button,
  ButtonText,
  ContainerMessages
} from './styles';

const goToGroup = (groupName,navigation) => {
  navigation.navigate("Chat",{group: groupName})
}

const Groups = ( { navigation } ) => {

  return (
    <Container>
      
      <ContainerMessages>
        
        <Button onPress={() => { goToGroup('group_development',navigation) }}>
          <ButtonText  >
            Desenvolvimento
          </ButtonText>
        </Button>
        
        <Button onPress={() => { goToGroup('group_webdesign',navigation) }}>
          <ButtonText>
            WebDesign
          </ButtonText>
        </Button>

      </ContainerMessages>

    </Container>
  )
}

export default Groups
