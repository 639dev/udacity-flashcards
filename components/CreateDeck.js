import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { createDeck } from '../utils/api'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class CreateDeck extends React.Component {
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
	   const {dispatch} = this.props;

	   if( title )
	   {
	   	 createDeck({[title]: {title, questions: []}})
	   	 	.then(dispatch(addDeck({[title]: {title, questions: []}})))
	   	 	.then(this.props.navigation.navigate('Deck',{title, questions: []}))
	   	 this.setState({title: ''});
	   }
	}

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" styles={styles.container}>
				<Text style={styles.title}>What is the title of your deck? </Text>
				
				<FormInput value={this.state.title} onChangeText={(title) => this.setState({title})} />

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
		alignItems: 'center',
    	justifyContent: 'center',
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: 'tomato',
		width: '90%',
		marginTop: 50,
		marginBottom: 10,
		marginRight: '5%',
		marginLeft: '5%',
	},
	text: {
		color: '#fff'
	},
	title: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: "700",
		marginTop: 50,
		marginBottom: 20,
	}
})

export default connect()(CreateDeck)