import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs/';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

// screenのコンポーネント
// base関連のscreen
import { baseList } from '../screens/base/baseList';
import { memberList } from '../screens/base/memberList';

// dungeon関連のscreen
import { dungeonList } from '../screens/dungeon/dungeonList';

// 画像
import camp from '../../assets/img/camp.png';
import dangeon from '../../assets/img/dangeon.png';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const baseStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="baseList"
        component={baseList}
        options={{
          title: 'キャンプ',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="memberList"
        component={memberList}
        options={{
          title: 'メンバー',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const dungeonStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="dungeonList"
        component={dungeonList}
        options={{
          title: 'ダンジョン',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="キャンプ"
          component={baseStack}
          options={{
            tabBarIcon: ({ color, size }: { color: string; size: string }) => (
              <Image
                source={camp}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ダンジョン"
          component={dungeonStack}
          options={{
            tabBarIcon: ({ color, size }: { color: string; size: string }) => (
              <Image
                source={dangeon}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 25,
  },
  icon: {},
});
