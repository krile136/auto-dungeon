import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';

type Props = {
  contentImage: ImageSourcePropType;
  mainText: string;
  subText: string;
  onPress: () => void;
};

export const ListContents = ({
  contentImage,
  mainText,
  subText,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Image style={styles.icon} source={contentImage} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.mainText}>{mainText}</Text>
        <Text style={styles.subText}>{subText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 75,
    width: '100%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  mainText: {
    fontSize: 22,
  },
  subText: {
    fontSize: 16,
  },
});
