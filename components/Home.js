import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Decks from './Decks'
import NewDeck  from './NewDeck'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator,StackNavigator } from 'react-navigation';

export default createBottomTabNavigator(
  {
    Decks: Decks,
    NewDeck: NewDeck,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Decks') {
          iconName = "ios-home-outline";
        } else if (routeName === 'NewDeck') {
          iconName = "ios-add-circle-outline";
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);


//https://reactnavigation.org/docs/en/tab-based-navigation.html