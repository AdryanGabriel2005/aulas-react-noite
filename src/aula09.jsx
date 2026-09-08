import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Aula09 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
      </View>
    );
  }
}

export default;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// UMA TELA COM 4 CAMPOS E UM BOTÃO 
// AO CLICAR NO BOTÃO MOSTRA ABAIXO
// AS INFORMAÇÕES INSERIDAS NOS CAMPOS 
class Aula08 extends Component {
  constructor(props) {
    super(props);
    this.state = {
     campo1: "",
     campo2: "",
     campo3: "",
     campo4: "",
     reseltado: ""
    };
    this.confirmar = this.confirmar.bind(this);
  }

confirmar() {
  this.setState({
    resultado: `${ this.state.campo1} ${this.state.campo2} ${ this.state.campo3} ${this.state.campo4}`
    
  })
}


  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder='Primeiro texto...'
        onChangeText={(t)=> this.setState({ campo1: t })}
        />
        <TextInput
        style={styles.input}
        placeholder='Segundo  texto...'
        onChangeText={(t)=> this.setState({ campo2: t })}
        />
        <TextInput
        style={styles.input}
        placeholder='terceiro texto...'
        onChangeText={(t)=> this.setState({ campo3: t })}
        />
        <TextInput
        style={styles.input}
        placeholder='quarto texto...'
        onChangeText={(t)=> this.setState({ campo4: t })}
        />
        <View style={ styles.botao}>
        <Button
            title='Exibir texto ou clique aqui'
            onPress={this.confirmar}
            color= "green"
        />
        </View>
      
        <Text style={styles.textoResultado}>
            {this.state.reseltado}
        </Text>
      </View>
    );
  }
}