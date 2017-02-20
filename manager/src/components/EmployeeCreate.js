import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
	render() {
		return (
			<Card>
				<CardSection> 
					<Input
						label="Name"
						placeholder="Example"
					/>
				</CardSection>

				<CardSection> 
					<Input
						label="Phone"
						placeholder="xxxx-xxxx"
					/>
				</CardSection>

				<CardSection> 
					<Input
						label="Name"
						placeholder="Example"
					/>
				</CardSection>

				<CardSection> 
					<Button>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default EmployeeCreate;
