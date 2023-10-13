import React from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GaleriaScreen = () => {
  const navigation = useNavigation();

  const imagePaths = [
    require('../ProjetoDois/assets/Garden.png'),
  ];

  const navigateToDetalhesFoto = () => {
    navigation.navigate('DetalhesFoto', {
      imagePath: imagePaths[0],
      titulo: 'Jardim da Salvação',
      detalhes: 'A incursão "Jardim da Salvação" em Destiny 2 se passa na lua Europa, onde os Guardiões exploram um reino Vex misterioso. Os Vex são uma raça alienígena complexa que manipula o tecido do universo. Os Guardiões enfrentam desafios, inimigos poderosos e quebra-cabeças intricados enquanto exploram um ambiente digitalmente concebido. A cooperação e estratégia são essenciais para triunfar neste ambiente desafiador e emergir vitoriosos, levando esperança para o universo.',
    });
  };

  const windowWidth = Dimensions.get('window').width;
  const squareSize = windowWidth;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={navigateToDetalhesFoto}>
        <View style={styles.imageContainer}>
          <Image source={imagePaths[0]} style={styles.image} />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  imageContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
    alignSelf: 'center',  
  },
  image: {
    width: 200, 
    height: 200,
    borderRadius: 10,
  },
});

export default GaleriaScreen;