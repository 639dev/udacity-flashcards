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
	    this.restart = this.restart.bind(this)
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

	restart() {
		const {current_deck} = this.props.navigation.state.params;
		this.setState({index: 0,correct:0,incorrect:0})
		this.props.navigation.navigate('Quiz',{current_deck})
	}

	render() {
		const {current_deck} = this.props.navigation.state.params;
		const { show_answer, index, correct, incorrect } = this.state
		const question = current_deck.questions[this.state.index]

		if( current_deck.questions.length === 0 ) {
			return (
				<View>
					<Text style={[styles.center,{fontSize:13,fontWeight:'600',marginTop: 70}]}>This deck contains no cards</Text>
				</View>
			)
		}

		else if ( index === current_deck.questions.length )
			return (
				<View styles={styles.container}>
					<Text style={[styles.center,{fontSize: 30,fontWeight:'600',color: 'black',marginTop: 60}]}> Your score is : </Text>
					<Text style={[styles.center,{fontSize: 30,fontWeight:'900',color: 'tomato',marginTop: 60}]}>{((correct/current_deck.questions.length) * 100).toFixed() } %</Text>

					<TouchableOpacity style={[styles.button,{backgroundColor: '#27ae60'}]} onPress={this.restart}>
						<Text style={styles.text}>Restart Quiz</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.button,{backgroundColor: '#7f8c8d'}]} onPress={() => this.props.navigation.navigate('Deck',{current_deck})}>
						<Text style={styles.text}>Back to Deck</Text>
					</TouchableOpacity>
				</View>
			)
		else
			return (
				<View styles={styles.container}>
				    <Text style={styles.title}>{ show_answer ? question.answer : question.question}</Text>

				    <TouchableOpacity onPress={this.show} >
				    	<Text style={styles.center}>{ !show_answer ? 'Answer' : 'Question' }</Text>
				    </TouchableOpacity>

				    <TouchableOpacity style={[styles.button,{backgroundColor: '#27ae60'}]} onPress={this.submit_correct}>
						<Text style={styles.text}>Correct</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.button,{backgroundColor: '#c0392b'}]} onPress={this.submit_incorrect}>
						<Text style={styles.text}>Incorrect</Text>
					</TouchableOpacity>
					<Text style={[styles.center,{marginTop: 30}]}>Question {this.state.index + 1} out of {current_deck.questions.length+1}</Text>
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
	center: {
		textAlign:'center',
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: 'gray',
		width: '90%',
		marginTop: 40,
		marginBottom: 10,
		marginRight: '5%',
		marginLeft: '5%',
	},
	title: {
		textAlign:'center',
		fontSize: 25,
		fontWeight: "900",
		marginTop: 50,
		marginBottom: 20,
	},
	text: {
		color: '#fff'
	}
})