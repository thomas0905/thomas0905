import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import { HeaderComponent} from '../../components'
import { color } from '../../utils';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.page}>
        <HeaderComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor : color.white}
});
