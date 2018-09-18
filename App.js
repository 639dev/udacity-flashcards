import React from 'react';
import { StyleSheet, Text, View ,Platform } from 'react-native';
import Home from './components/Home'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import Decks from './components/Decks'
import Deck from './components/Deck'
import Add from './components/Add'
import CreateDeck from './components/CreateDeck'
import Quiz from './components/Quiz'
import { setLocalNotification } from './utils/helper' 
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { handleInitialData } from './actions'
import middleware from './middleware'


const store = createStore(reducers,middleware)


const Tabs =  createBottomTabNavigator(
  {
    Decks: Decks,
    NewDeck: CreateDeck,
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

const Navigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions:{
        headerTintColor:'#000',
        title:'Home'
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions:{
        headerTintColor:'#000',
        title:'Deck'
    }
  },
  Add: {
    screen: Add,
    navigationOptions:{
        headerTintColor:'#000',
        title:'Add Card'
    }
  },
  Create: {
    screen: CreateDeck,
    navigationOptions:{
        headerTintColor:'#000',
        title:'Create Deck'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions:{
        headerTintColor:'#000',
        title:'Quiz'
    }
  }
})


export default class App extends React.Component {
  state = {
    decks: {}
  }
  componentDidMount() {
    return setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
            <Navigator/>
        </View>
      </Provider>
    );
  }
}


