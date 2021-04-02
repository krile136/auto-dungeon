import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { RootStackParamList } from '../../types/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { addCharacter } from '../../../store/actions/character';
// components
import { ListContents } from '../../components/listContents';
import {
  Card,
  Title,
  Paragraph,
  Avatar,
  IconButton,
  Button,
} from 'react-native-paper';
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
      <View style={styles.cardComponent}>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => (
              <IconButton {...props} icon="more-vert" onPress={() => {}} />
            )}
          />
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
          <Card.Content>
            <Title>Card title</Title>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      </View>
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonComponent}
          onPress={() => alert('aaa')}
        >
          <Text>キャラクターを追加</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// onPress={() => dispatch(addCharacter({ character: chara }))}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    backgroundColor: 'red',
    height: 50,
    borderRadius: 10,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonComponent: {
    width: 150,
  },
  buttonText: {},
  cardComponent: {
    width: 300,
  },
});
