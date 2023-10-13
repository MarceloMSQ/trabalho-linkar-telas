import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaBoasVindas = () => {
  const navigation = useNavigation();

  const navigateToGaleria = () => {
    navigation.navigate('Galeria');
  };

  const navigateToInformacoes = () => {
    navigation.navigate('InformacoesPessoais');
  };

  
  const navigateToListaProdutos = () => {
    navigation.navigate('ListaProdutos');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.card, styles.galeriaCard]} onPress={navigateToGaleria}>
          <Text style={styles.cardText}>Galeria</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.infoCard]} onPress={navigateToInformacoes}>
          <Text style={styles.cardText}>Informações Pessoais</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.card, styles.listaProdutosCard]} onPress={navigateToListaProdutos}>
          <Text style={styles.cardText}>Lista de Produtos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
    margin: 5,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', 
  },
  galeriaCard: {
    backgroundColor: '#7C65AD', 
  },
  infoCard: {
    backgroundColor: '#685F7A', 
  },
  detalhesCard: {
    backgroundColor: '#8356E1', 
  },
  listaProdutosCard: {
    backgroundColor: '#3F3B47', 
  },
});

export default TelaBoasVindas;
