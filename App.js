import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaLogin from './TelaLogin';
import TelaBoasVindas from './TelaBoasVindas';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Welcome" component={TelaBoasVindas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;