import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState('');

  const adicionarProduto = () => {
    if (novoProduto) {
      setProdutos([...produtos, { id: Date.now(), nome: novoProduto }]);
      setNovoProduto('');
    }
  };

  const removerProduto = (id) => {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Produtos</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={novoProduto}
        onChangeText={(text) => setNovoProduto(text)}
      />

      <Button title="Adicionar Produto" onPress={adicionarProduto} color="#7C65AD" />

      <FlatList
        data={produtos}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nomeProduto}>{item.nome}</Text>
            <Button title="Remover" onPress={() => removerProduto(item.id)} color="#685F7A"/>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  nomeProduto: {
    fontSize: 18,
  },
});

export default ListaProdutos;
