import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Aula06 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // state properties
    };
  }

  componentDidMount() {
    // code to run after component mounts
  }

  componentWillUnmount() {
    // cleanup code
  }

  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Aula06;