import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import logo from '../assets/lago2.png'; // Ensure the image file is correctly named

const IntroScreen = () => {
  return (
    <View style={styles.container}>

      <Image source={logo} style={styles.image} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 3,
    backgroundColor: '#f7f7f7',
    height: '100%',
    width: '100%',
  },

  image: {
     
    borderRadius: 25,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default IntroScreen;
