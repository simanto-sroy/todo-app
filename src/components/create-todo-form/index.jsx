import React from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import PropTypes from 'prop-types';

class CreateTodoForm extends React.Component {

    state = {
        text: '',
        description: '',
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createTodo(this.state)
        event.target.reset()
        this.setState({text: '', description: ''})
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Task Title</Label>
                    <Input
                        name="text"
                        value={this.state.text}
                        placeholder="Create New Task"
                        type="text"
                        onChange={this.handleChange}
                    />
                    <Label>Task Body</Label>
                    <Input
                        name="description"
                        value={this.state.description}
                        placeholder="Create New Task"
                        type="textarea"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button className="btn btn-danger mt-2" type="submit">Create Task</Button>
            </Form>
        );
    }
}

CreateTodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired, 
}

export default CreateTodoForm;