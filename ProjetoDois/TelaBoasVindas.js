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

  const navigateToDetalhesFotos = () => {
    navigation.navigate('DetalhesFotos');
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
        <TouchableOpacity style={[styles.card, styles.detalhesCard]} onPress={navigateToDetalhesFotos}>
          <Text style={styles.cardText}>Detalhes de Fotos</Text>
        </TouchableOpacity>
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
    color: 'white', // Cor do texto
  },
  galeriaCard: {
    backgroundColor: '#D845DE', // Cor de fundo para a Galeria
  },
  infoCard: {
    backgroundColor: '#9716E1', // Cor de fundo para Informações Pessoais
  },
  detalhesCard: {
    backgroundColor: '#e74c3c', // Cor de fundo para Detalhes de Fotos
  },
  listaProdutosCard: {
    backgroundColor: '#f39c12', // Cor de fundo para Lista de Produtos
  },
});

export default TelaBoasVindas;