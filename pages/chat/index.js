import React, { useState, useContext, useEffect } from 'react';
import { Text } from 'react-native';
import moment from 'moment';

import { UsuarioContext } from '../../contexts/user';

import {
  Container,
  ContainerButtons,
  Button,
  ButtonText,
  Input,
  ContainerMessages,
  ContainerMessage,
  Message,
  HoraMensagem
} from './style';

import firebase from 'firebase';
import 'firebase/firestore';

const Chat = ({ route }) => {

  const { group } = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { user } = useContext(UsuarioContext);


  const ListenUpdateMessages = (snap) => {

    const data = snap.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    setMessages(data)
  }


  useEffect(() => {
    const listener = firebase.firestore()
      .collection(group).onSnapshot(ListenUpdateMessages)

    return () => listener()
  }, [])



  const handleAddMessages = () => {
    if (newMessage == "") {
      console.warn('Preencha o campo')
      return
    }

    try {
      let messageDate = new Date();
      messageDate.setHours(messageDate.getHours() - 3);
      firebase.firestore().collection(group).add({
        text: newMessage,
        user: user.email,
        messageDate: messageDate
      })
      setNewMessage("");
    } catch (err) {
      console.warn("erro de comunicação, tente mais tarde");
    }
  }

  return (
    <Container>


      <ContainerMessages 
      ref={ref => {this.ContainerMessages = ref}}
      onContentSizeChange={() => this.ContainerMessages.scrollToEnd({animated: true})}
      >
        {
        
        messages.sort((a, b) => a.messageDate.toDate() > b.messageDate.toDate()).map(
          (message) => 
          
          <ContainerMessage key={message.id}>
          
            <Message isUser={message.user === user.email}>
              {message.text}
            </Message>

            <HoraMensagem isUser={message.user === user.email}>
              {
                moment(message.messageDate.toDate()).format("DD/MM/YYYY HH:mm:ss")
              }
            </HoraMensagem>
          
          </ContainerMessage>

        )  

        }

      </ContainerMessages>
        
      
      <ContainerButtons>
        <Input 
          placeholder="Digite uma mensagem"
          onChangeText={text => setNewMessage(text)}
          value={newMessage}
        />

        <Button invert={true}
          onPress={() => { handleAddMessages() }}
        >
          <ButtonText>Enviar</ButtonText>
        </Button>
      </ContainerButtons>

    </Container>
  )
}
export default Chat
