import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { fetchDecks } from '../utils/api'
import _ from 'lodash'

export default class Home extends React.Component {
	state = {
		decks: {}
	}
	componentDidMount() {
		fetchDecks().then(data => this.setState({decks: Object.keys(data).map((key)=>(data[key]))}))
	}

	render() {
		const {decks} = this.state
		return (
			<View styles={styles.container}>
				{_.values(decks).map((deck) => {
			      return (
			        <TouchableOpacity onPress={() => this.props.navigation.navigate('Deck',{deck})} key={deck.title}>
						<Card containerStyle={{alignItems: 'center',justifyContent: 'center'}}>
					        <View>
					          <Text style={styles.title}>{deck.title}</Text>
					          <Text style={styles.sub}>{deck.questions.length} cards</Text>
					        </View>
					    </Card>	
			        </TouchableOpacity>
			      )
			    }) }
			</View>
		)
	}
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
  	alignItems: 'center',
  	justifyContent: 'center',
  	backgroundColor: 'red',
  },
  title: {
  	fontWeight: "900",
  	fontSize: 18
  },
  sub: {
  	fontSize: 13,
  	padding: 5,
  	color: 'gray'
  }
});