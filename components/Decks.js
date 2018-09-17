import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ScrollView, AsyncStorage} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { fetchDecks } from '../utils/api'
import { getDecks } from '../actions'
import { connect } from 'react-redux'
import _ from 'lodash'

class Home extends React.Component {

	componentDidMount() {
		const {dispatch} = this.props;
		fetchDecks().then( decks => dispatch(getDecks(decks)) )
	}

	render() {
		const {decks} = this.props
		return (
			<ScrollView styles={styles.container}>
				{_.values(decks).map((deck) => {
			      return (
			        <TouchableOpacity onPress={() => this.props.navigation.navigate('Deck',deck)} key={deck.title}>
						<Card containerStyle={{alignItems: 'center',justifyContent: 'center'}}>
					        <View>
					          <Text style={styles.title}>{deck.title}</Text>
					          <Text style={styles.sub}>{deck.questions.length} cards</Text>
					        </View>
					    </Card>	
			        </TouchableOpacity>
			      )
			    }) }
			</ScrollView>
		)
	}
}

function mapStateToProps (decks) {
  return {
    decks,
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

export default connect(mapStateToProps)(Home)