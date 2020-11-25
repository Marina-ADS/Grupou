import React, { } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Groups from '../pages/groups';
import Chat from '../pages/chat';
import Settings from '../pages/settings';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function GroupScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Groups"
        component={Groups}
        options={{
          title:'Grupos',
          headerStyle: {
            backgroundColor: '#ae1b73',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        initialParams={{ group: 'group_development' }}
        options={{
          headerStyle: {
            backgroundColor: '#ae1b73',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
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
          activeTintColor: '#ae1b73',
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
            ),
            title: 'Grupos'
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
