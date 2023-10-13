import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DetalhesFotoScreen = () => {
  const route = useRoute();
  const { imagePath, titulo, detalhes } = route.params;

  return (
    <View style={styles.container}>
      <Image source={imagePath} style={styles.image} resizeMode="contain" />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.detalhes}>{detalhes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    height: 400,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'white',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detalhes: {
    fontSize: 18,
  },
});

export default DetalhesFotoScreen;