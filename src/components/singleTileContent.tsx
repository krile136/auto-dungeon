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

type Props = {
  tileImage: ImageSourcePropType;
  tileTitle: string;
  onPress: () => void;
};

export const SingleTileContent = ({ tileImage, tileTitle, onPress }: Props) => {
  return (
    <View style={styles.doubleCardContainer}>
      <View style={styles.leftCardContainer}>
        <Card style={styles.cardStyle} onPress={onPress}>
          <Image
            style={styles.cardImageStyle}
            source={{ uri: 'https://picsum.photos/630/400' }}
          />
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitleStyle}>{tileTitle}</Text>
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  doubleCardContainer: {
    flexDirection: 'row',
    width: scale(350),
    height: scale(210),
  },
  leftCardContainer: {
    width: scale(175),
    justifyContent: 'flex-end',
    paddingLeft: scale(20),
  },
  cardStyle: {
    width: scale(145),
    height: scale(185),
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  cardImageStyle: {
    width: scale(115),
    height: scale(115),
    marginTop: scale(15),
  },
  cardTitleContainer: {
    marginTop: scale(10),
    fontSize: scale(15),
  },
  cardTitleStyle: {
    textAlign: 'center',
    fontSize: scale(15),
  },
});
