import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {Logo, Ilustration} from '../../assets';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <Logo/>
        {/* <Ilustration/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages:{flex: 1, alignItems: 'center', justifyContent: 'center'}
});
