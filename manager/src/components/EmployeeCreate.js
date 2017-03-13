import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
	onButtonPress() {
		const { name, phone, shift } = this.props;

		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}

	render() {
		return (
			<Card>
				<CardSection> 
					<Input
						label="Name"
						placeholder="Example"
						value={this.props.name}
						onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
					/>
				</CardSection>

				<CardSection> 
					<Input
						label="Phone"
						placeholder="xxxx-xxxx"
						value={this.props.phone}
						onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
					/>
				</CardSection>

				<CardSection style={{ flexDirection: 'column' }}> 
					<Text style={styles.pickerTextStyle}>
						Shift
					</Text>
					<Picker
						selectedValue={this.props.shift}
						onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
						style={{ flex: 1 }}
					>
						<Picker.Item label="Monday" values="Monday" />
						<Picker.Item label="Tuesday" values="Tuesday" />
						<Picker.Item label="Wednesday" values="Wednesday" />
						<Picker.Item label="Thursday" values="Thursday" />
						<Picker.Item label="Friday" values="Friday" />
						<Picker.Item label="Saturday" values="Saturday" />
						<Picker.Item label="Sunday" values="Sunday" />
					</Picker>
				</CardSection>

				<CardSection> 
					<Button onPress={this.onButtonPress.bind(this)}>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
};

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm; //O nome do Reducer employeeForm no combine
	return { name, phone, shift };
};

export default connect(mapStateToProps, { 
	employeeUpdate, 
	employeeCreate
})(EmployeeCreate);
