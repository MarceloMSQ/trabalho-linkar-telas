import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InformacoesPessoais = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Informações Pessoais</Text>
      <View style={styles.infoItem}>
        <Text style={styles.infoLabel}>Nome:</Text>
        <Text style={styles.infoText}>Marcelo Mendes de Sousa Queiroz</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoLabel}>Idade:</Text>
        <Text style={styles.infoText}>28</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoLabel}>Matrícula:</Text>
        <Text style={styles.infoText}>202002324686</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoLabel}>E-mail:</Text>
        <Text style={styles.infoText}>contato.mmsq@gmail.com</Text>
      </View>
      
      {/* Adicione mais informações pessoais conforme necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoItem: {
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 18,
  },
});

export default InformacoesPessoais;