import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const myState = this.state;
    const myProps = this.props;
    e.preventDefault();
    if (myState.title.trim()) {
      myProps.addTodoProps(myState.title);
      this.setState({
        title: '',
      });
    }
  };

  render() {
    const myState = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        className="form-container"
      >
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={myState.title}
          name="title"
          onChange={this.onChange}
        />
        <button
          type="submit"
          className="input-submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
