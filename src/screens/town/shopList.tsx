import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from '../../types/navigation';

// types
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RouteProp } from '@react-navigation/native';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'baseList'>;
  route: RouteProp<RootStackParamList, 'baseList'>;
};

export const shopList: React.FC<Props> = ({ navigation, route }: Props) => {
  return (
    <View style={styles.container}>
      <Text>shopリスト画面</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
