import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconJersey,
  IconJerseyAktif,
  IconProfile,
  IconProfileAktif,
  IconHome,
  IconHomeAktif,
} from '../../../assets';

import {color} from '../../../utils';

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === "Home") {
      return isFocused ? <IconHomeAktif /> : <IconHome />;
    }

    if (label === "Jersey") {
      return isFocused ? <IconJerseyAktif /> : <IconJersey />;
    }

    if (label === "Profile") {
      return isFocused ? <IconProfileAktif /> : <IconProfile />;
    }

    return <IconHome />;
  };

  return (
    <TouchableOpacity
     
      onPress={onPress}
      onLongPress={onLongPress}
      style={{flex: 1}}>
      <Icon />
      <Text style={styles.Text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
    container:{
      alignItem :'center',
      flex: 1
    },
    Text: (isFocused) => ({
    color: isFocused ? color.white : color.secondary,
    fontSize : 11,
    marginTop : 4
  })
});
