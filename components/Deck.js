import React from 'react'
import { View , Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Deck extends React.Component {
	render() {
		const {deck} = this.props.navigation.state.params;
		return(
			<View styles={styles.container}>
				<Text style={styles.title}>{deck.title}</Text>
				<Text style={styles.sub}>{deck.questions.length} cards</Text>
				<TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Add',{deck})}>
					<Text style={styles.text}>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.text} onPress={()=> this.props.navigation.navigate('Quiz',{deck})}>Start Quiz</Text>
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
		borderWidth: 1,
		backgroundColor: 'gray',
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