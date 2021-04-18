import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';

import { Card } from 'react-native-paper';
import { scale } from 'react-native-size-matters';

import stairs from '../../assets/img/stairs.png';

type Props = {
  dungeonImage: ImageSourcePropType;
  dungeonName: string;
  dungeonStairs: string;
  dungeonFlavorText: string;
  onPress: () => void;
};

export const DungeonListContents = ({
  dungeonImage,
  dungeonName,
  dungeonStairs,
  dungeonFlavorText,
  onPress,
}: Props) => {
  return (
    <Card style={styles.cardStyle} onPress={() => {}}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={styles.cardPictureContainer}
            source={{ uri: 'https://picsum.photos/630/400' }}
          />
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.rightUpperContaier}>
            <View style={styles.dungeonNameContainer}>
              <Text style={styles.dungeonNameText}>{dungeonName}</Text>
            </View>
            <View style={styles.dungeonLayerContainer}>
              <View style={styles.stairsContainer}>
                <Image style={styles.stairsImage} source={stairs} />
              </View>
              <Text style={styles.stairsText}>{dungeonStairs}</Text>
            </View>
          </View>
          <View style={styles.rightDownContainer}>
            <Text style={styles.dungeonFlavorText}>{dungeonFlavorText}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: scale(330),
    marginLeft: scale(10),
    marginTop: scale(10),
    height: scale(70),
    backgroundColor: '#F2F2F2',
  },
  itemContainer: {
    flexDirection: 'row',
  },
  leftContainer: {
    width: scale(70),
    height: scale(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardPictureContainer: {
    width: scale(50),
    height: scale(50),
  },
  rightContainer: {
    width: scale(260),
    flexDirection: 'column',
  },
  rightUpperContaier: {
    height: scale(40),
    flexDirection: 'row',
  },
  rightDownContainer: {
    height: scale(30),
    justifyContent: 'center',
  },
  dungeonNameContainer: {
    width: scale(180),
    justifyContent: 'flex-end',
    paddingLeft: scale(10),
  },
  dungeonNameText: {
    fontSize: scale(25),
  },
  dungeonLayerContainer: {
    width: scale(80),
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  stairsContainer: {
    width: scale(25),
    height: scale(40),
    marginRight: scale(10),
    justifyContent: 'flex-end',
  },
  stairsImage: {
    width: scale(25),
    height: scale(25),
  },
  stairsText: {
    fontSize: scale(15),
  },
  dungeonFlavorText: {
    fontSize: scale(12),
  },
});
