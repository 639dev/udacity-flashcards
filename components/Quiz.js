import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import _ from 'lodash'

export default class Quiz extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
	      index: 0,
	      correct: 0,
	      incorrect: 0,
	      show_answer: false
	    }
	    this.show = this.show.bind(this)
	    this.submit_correct = this.submit_correct.bind(this)
	    this.submit_incorrect = this.submit_incorrect.bind(this)
	}

	show() {
		const {show_answer} = this.state
		this.setState({show_answer: !show_answer})
	}

	submit_correct() {
		const {correct,index} = this.state
		this.setState({correct: correct+1,index: index+1})
	}

	submit_incorrect() {
		const {incorrect,index} = this.state
		this.setState({incorrect: incorrect+1,index: index+1})
	}

	render() {
		const {deck} = this.props.navigation.state.params;
		const { show_answer, index, correct, incorrect } = this.state
		const question = deck.questions[this.state.index]

		if( index === deck.questions.length )
			return (
				<View>
					<Text>{((correct/deck.questions.length) * 100).toFixed() } %</Text>
				</View>
			)

		else
			return (
				<View>
				    <Text style={styles.title}>{ show_answer ? question.answer : 'question.question'}</Text>

				    <TouchableOpacity onPress={this.show}>
				    	<Text>{ show_answer ? 'Answer' : 'Question' }</Text>
				    </TouchableOpacity>

				    <TouchableOpacity style={styles.button} onPress={this.submit_correct}>
						<Text>Correct</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={this.submit_incorrect}>
						<Text>Incorrect</Text>
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