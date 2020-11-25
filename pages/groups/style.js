import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:#ffffff;
  flex:1;
  padding:10px 10px 0px 10px;
  flex-direction:column;
  justify-content: flex-end;
  align-items:center;

`;

export const Button = styled.TouchableOpacity`
  
  width:100%;
  height: 60px;
  background-color:#ae1b73;
  border:1px solid #ae1b73;
  border-radius:5px;
  justify-content:center;
  align-items:center;
  margin-bottom:10px;
`;

export const ButtonText = styled.Text`
  color:#ffff;
  font-size:16px;
  font-weight:bold;

  `;

export const ContainerMessages = styled.ScrollView`
  width:100%;
  flex:1;

`;
