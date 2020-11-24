import React, { } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Groups from '../pages/Groups';
import Chat from '../pages/Chat';
import Settings from '../pages/Settings';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function GroupScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Groups"
        component={Groups}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        initialParams={{ group: 'grupo de desenvolvimento' }}
      /> 
    </Stack.Navigator>
  );
}

const AppRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Groups"
      tabBarOptions={
        {
          activeTintColor: 'tomato',
          inactiveTintColor: '#ccc'
        }
      }
    >
      <Tab.Screen
        name="Groups"
        component={GroupScreen}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="chat"
                color={color}
                size={32}
              />
            )
          }
        }
      />
      <Tab.Screen
        name="Configurações"
        component={Settings}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="settings"
                size={32}
                color={color}
              />
            )
          }
        }
      />
    </Tab.Navigator>

  )
}

export default AppRoutes;
