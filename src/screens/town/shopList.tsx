import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
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

export const shopList: React.FC<Props> = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <DoubleTileContents
          leftTileImage={status}
          leftTileTitle="道具屋"
          leftOnPress={() => null}
          rightTileImage={status}
          rightTileTitle="武具屋"
          rightOnPress={() => null}
        />
        <DoubleTileContents
          leftTileImage={status}
          leftTileTitle="魔道具屋"
          leftOnPress={() => null}
          rightTileImage={status}
          rightTileTitle="スカウト"
          rightOnPress={() => null}
        />
        <SingleTileContent
          tileImage={status}
          tileTitle="test"
          onPress={() => null}
        />
        <SingleTileContent
          tileImage={status}
          tileTitle="test"
          onPress={() => null}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFFDE',
  },
});
