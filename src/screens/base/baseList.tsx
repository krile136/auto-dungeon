import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { RootStackParamList } from '../../types/navigation';

// types
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RouteProp } from '@react-navigation/native';

// components
import { DoubleTileContents } from '../../components/doubleTileContents';
import { SingleTileContent } from '../../components/singleTileContent';
// image
import status from '../../../assets/img/status.png';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'baseList'>;
  route: RouteProp<RootStackParamList, 'baseList'>;
};

export const baseList: React.FC<Props> = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <DoubleTileContents
        leftTileImage={status}
        leftTileTitle="キャラクター"
        leftOnPress={() => null}
        rightTileImage={status}
        rightTileTitle="持ち物"
        rightOnPress={() => null}
      />
      <SingleTileContent
        tileImage={status}
        tileTitle="test"
        onPress={() => null}
      />
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
