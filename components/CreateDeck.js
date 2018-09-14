import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { createDeck } from '../utils/api'

export default class CreateDeck extends React.Component {
	constructor(props) {
	    super(props)
		this.state = {
	      title: '',
	    }
	    this.submit= this.submit.bind(this)
  	}
	

	errorHandler() {
	  if (this.state.error) {
	    this.formInput.shake()
	  }
	}
	submit() {
	   const { title } = this.state

	   if( title )
	   {
	   	 createDeck({[title]: {title, questions: []}})
	   }
	}

	render() {
		return (
			<View styles={styles.container}>
				<Text style={styles.title}>What is the title of your deck? </Text>
				<FormLabel>Title</FormLabel>
				<FormInput value={this.state.title} onChangeText={(title) => this.setState({title})} />

				<TouchableOpacity style={styles.button} onPress={this.submit}>
					<Text>SUBMIT</Text>
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
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: 20,
		borderWidth: 1,
		backgroundColor: 'gray',
		width: '90%',
		marginTop: 40,
		marginBottom: 10,
		marginRight: '5%',
		marginLeft: '5%',
	},
	title: {
		fontSize: 25,
		fontWeight: "900"
	}
})