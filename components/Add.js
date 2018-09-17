import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { addQuestionForDeck } from '../utils/api'
import { addCard } from '../actions'
import { connect } from 'react-redux'

class Add extends React.Component {
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
	   const {dispatch} = this.props
	   const {current_deck} = this.props.navigation.state.params
	   if(question && answer)
	   {
	   		addQuestionForDeck({question: question,answer: answer },current_deck.title).then(dispatch(addCard({question: question,answer: answer },current_deck.title)))
	   		this.props.navigation.goBack()
	   }
	}

	render() {
		const {deck} = this.props.navigation.state.params;
		const { question, answer } = this.state
		return (
			<KeyboardAvoidingView behavior="padding" styles={styles.container}>
				<FormLabel>Question</FormLabel>
				<FormInput value={this.state.question} onChangeText={(question) => this.setState({question})} />

				<FormLabel>Answer</FormLabel>
				<FormInput value={this.state.answer} onChangeText={(answer) => this.setState({answer})}/>

				<TouchableOpacity style={styles.button} onPress={this.submit}>
					<Text style={styles.text}>SUBMIT</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: 'tomato',
		width: '90%',
		marginTop: 30,
		marginBottom: 10,
		marginRight: '5%',
		marginLeft: '5%',
	},
	text: {
		color: '#fff'
	}
})

export default connect()(Add)