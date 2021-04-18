import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { RootStackParamList } from '../../types/navigation';

// components
import { DungeonListContents } from '../../components/dungeonListContents';
// types
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RouteProp } from '@react-navigation/native';
// image
import sword from '../../../assets/img/sword.png';
import status from '../../../assets/img/status.png';
import strategy from '../../../assets/img/strategy.png';
import stairs from '../../../assets/img/stairs.png';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'dungeonList'>;
  route: RouteProp<RootStackParamList, 'dungeonList'>;
};

export const dungeonList: React.FC<Props> = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <DungeonListContents
        dungeonImage={status}
        dungeonName="迷いの森"
        dungeonStairs="6階"
        dungeonFlavorText="一度入ると出ることができないと言われる森"
        onPress={() => null}
      />
      <DungeonListContents
        dungeonImage={status}
        dungeonName="竜の巣穴"
        dungeonStairs="12階"
        dungeonFlavorText="凶暴な竜が住むと言われる洞窟"
        onPress={() => null}
      />
      <DungeonListContents
        dungeonImage={status}
        dungeonName="滅びの塔"
        dungeonStairs="60階"
        dungeonFlavorText="瓦礫で作られた塔"
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
