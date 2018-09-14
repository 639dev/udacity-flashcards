import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { addQuestionForDeck } from '../utils/api'

export default class Add extends React.Component {
	constructor(props) {
	    super(props)
		this.state = {
	      question: '',
	      answer: ''
	    }
	    this.submit= this.submit.bind(this)
  	}
	

	errorHandler() {
	  if (this.state.error) {
	    this.formInput.shake()
	  }
	}
	submit() {
	   const { question, answer } = this.state
	   const {deck} = this.props.navigation.state.params;
	   if(question && answer)
	   {
	   		addQuestionForDeck({question: question,answer: answer },deck.title)
	   }
	}

	render() {
		const {deck} = this.props.navigation.state.params;
		const { question, answer } = this.state
		console.log(question);
		return (
			<View styles={styles.container}>
				<FormLabel>Question</FormLabel>
				<FormInput value={this.state.question} onChangeText={(question) => this.setState({question})} />

				<FormLabel>Answer</FormLabel>
				<FormInput value={this.state.answer} onChangeText={(answer) => this.setState({answer})}/>

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
	}
})