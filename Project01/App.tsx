import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MainScreen from './Views/MainScreen';
import IntroScreen from './Views/IntroScreen';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
     const timer = setTimeout(() => {
      setLoaded(true);
    }, 1500);

     return () => clearTimeout(timer);
  }, []);  

  
  return (
    <View style={{ flex: 1 }}>
      {loaded ? <MainScreen /> : <IntroScreen />}
    </View>
  );
};

export default App;
