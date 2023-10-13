import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaLogin from './TelaDeLogin';
import TelaBoasVindas from './TelaBoasVindas';
import GaleriaScreen from '../ProjetoDois/GaleriaScreen';
import DetalhesFotoScreen from './DetalhesFotoScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Welcome" component={TelaBoasVindas} />
        <Stack.Screen name="Galeria" component={GaleriaScreen} />
        <Stack.Screen name="DetalhesFoto" component={DetalhesFotoScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;