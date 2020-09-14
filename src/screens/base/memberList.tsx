import React from 'react';
import { Text, StyleSheet, SafeAreaView, FlatList, Button } from 'react-native';
import { RootStackParamList } from '../../types/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { addCharacter } from '../../../store/actions/character';
// components
import { ListContents } from '../../components/listContents';
// types
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RouteProp } from '@react-navigation/native';
import { State } from '../../types/state';
import { Characters } from '../../types/characters';
// image
import sword from '../../../assets/img/sword.png';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'memberList'>;
  route: RouteProp<RootStackParamList, 'memberList'>;
};

export const memberList: React.FC<Props> = ({ navigation, route }: Props) => {
  const characters = useSelector((state: State) => state.data.characters);
  const chara: Characters = { status: { name: 'aaa', lv: 1, hp: 100 } };
  const dispatch = useDispatch();
  console.log(characters);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={characters}
        renderItem={({ item }) => (
          <ListContents
            contentImage={sword}
            mainText={item.status.name}
            subText={'test' + item.status.name}
            onPress={() => null}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Press me"
        onPress={() => dispatch(addCharacter({ character: chara }))}
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
