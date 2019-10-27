import React from 'react';
import {SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';

import witch from './witch.json';

export default function react_native_lottie() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lottie resizeMode="contain" autoSize source={witch} autoPlay loop />
    </SafeAreaView>
  );
}
