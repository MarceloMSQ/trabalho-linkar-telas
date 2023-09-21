import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TelaBoasVindas = () => {
  return (
    <View style={styles.container}>
      <Text>Bem-vindo à próxima tela!</Text>
      <Text>Pensando no que fazer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TelaBoasVindas;