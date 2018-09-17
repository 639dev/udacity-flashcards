import React from 'react'
import { View , Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
class Deck extends React.Component {
	render() {
		const deck = this.props.navigation.state.params;
		console.log(deck)
		const store_deck = _.values(this.props.decks).filter(d => d.title == deck.title)
		const current_deck = store_deck[0]

		return(
			<View styles={styles.container}>
				<Text style={styles.title}>{current_deck.title}</Text>
				<Text style={styles.sub}>{current_deck.questions.length} cards</Text>
				<TouchableOpacity style={[styles.button,{marginTop: 250}]} onPress={()=> this.props.navigation.navigate('Add',{current_deck})}>
					<Text style={styles.text}>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.text} onPress={()=> this.props.navigation.navigate('Quiz',{current_deck})}>Start Quiz</Text>
				</TouchableOpacity>
			</View>
		)
	}
}




const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
    	justifyContent: 'center',
	},
	title: {
		fontSize: 25,
		fontWeight: '900',
		textAlign:'center',
		marginTop:80
	},
	sub: {
	  	fontSize: 18,
	  	padding: 10,
	  	color: 'gray',
	  	textAlign:'center',
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: 'tomato',
		width: '80%',
		marginTop: 10,
		marginBottom: 10,
		marginRight: '10%',
		marginLeft: '10%',
	},
	text: {
		color: '#fff'
	}
})

function mapStateToProps (decks) {
  return {
    decks,
  }
}

export default connect(mapStateToProps)(Deck)