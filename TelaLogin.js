import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image} from 'react-native';

const TelaLogin = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica para autenticação (neste exemplo, apenas console.log)
    console.log('Usuário:', username);
    console.log('Senha:', password);

    // Navega para a próxima tela (tela de boas-vindas)
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
       <Image
        source={require('assets\destiny_2.png')} // Ajuste o caminho conforme sua estrutura de pastas
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default TelaLogin;