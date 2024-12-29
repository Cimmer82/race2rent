import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ListCarScreen from '../screens/ListCarScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="ListCar" 
        component={ListCarScreen}
        options={{ title: 'List Your Car' }}
      />
      <Stack.Screen 
        name="Messages" 
        component={MessagesScreen}
        options={{ title: 'Messages' }}
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Stack.Navigator>
  );
}