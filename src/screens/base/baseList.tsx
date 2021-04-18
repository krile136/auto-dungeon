import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { RootStackParamList } from '../../types/navigation';
// components
import { ListContents } from '../../components/listContents';
import { Card } from 'react-native-paper';
import { scale } from 'react-native-size-matters';

// types
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RouteProp } from '@react-navigation/native';
// image
import sword from '../../../assets/img/sword.png';
import status from '../../../assets/img/status.png';
import strategy from '../../../assets/img/strategy.png';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'baseList'>;
  route: RouteProp<RootStackParamList, 'baseList'>;
};

export const baseList: React.FC<Props> = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ListContents
        contentImage={sword}
        mainText="Equipment"
        subText="装備"
        onPress={() => null}
      />
      <ListContents
        contentImage={status}
        mainText="Status"
        subText="ステータス"
        onPress={() => navigation.navigate('memberList')}
      />
      <ListContents
        contentImage={strategy}
        mainText="Strategy"
        subText="作戦"
        onPress={() => null}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
