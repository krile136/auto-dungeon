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
// types
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RouteProp } from '@react-navigation/native';
// image
import sword from '../../../assets/img/sword.png';
import status from '../../../assets/img/status.png';
import strategy from '../../../assets/img/strategy.png';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'dungeonList'>;
  route: RouteProp<RootStackParamList, 'dungeonList'>;
};

export const dungeonList: React.FC<Props> = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListContents
        contentImage={status}
        mainText="Forest"
        subText="森"
        onPress={() => null}
      />
      <ListContents
        contentImage={strategy}
        mainText="Cave"
        subText="洞窟"
        onPress={() => null}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
