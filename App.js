import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');  
  const [senha, setSenha] = useState('');

  const cadastro = () => {

    alert('Nome');
    alert('E-mail');
    alert('Senha');
  }

  return (
    <View style={styles.container}>
      
      <StatusBar hidden />

      <Image style={{width: 400, height: 350}} source={require('./assets/wagner.png')} />

      <TextInput placeholder='Seu nome...' style={styles.textInput} onChangeText={Text=>setNome(text)}/>
      <TextInput placeholder='Seu e-mail...' style={styles.textInput} onChangeText={Text=>setEmail(text)}/>
      <TextInput secureTextEntry={true} placeholder= 'Sua senha..' style={styles.textInput} onChangeText={Text=>setSenha(text)}/>
      
      <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
        <Text style={{color: 'white', textAlign: 'center'}}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput:{

    width: '100%' ,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20, 
    paddingLeft: 10, 
    padding: 10,
    marginBottom: 10,
  },

  btnCadastro: {

    width: '100%',
    height: 40,
    backgroundColor: '#3c8cc9',
    borderRadius: 20,
    justifyContent: 'center'
  }

});
