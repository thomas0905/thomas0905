import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import {color, responsiHeight, responsiveHeight} from '../../../utils'

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Header</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: { backgroundColor : color.primary},
    height :  responsiveHeight(125)
})