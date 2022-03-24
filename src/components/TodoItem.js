import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styles from './TodoItem.module.css';

function TodoItem({ todo, handleChangeProps, deleteTodoProps }) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.5,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />
      <button type="button" onClick={() => deleteTodoProps(todo.id)}>
        Delete
      </button>
      <span style={todo.completed ? completedStyle : null}>
        {todo.title}
      </span>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: ExtraPropTypes.uuid.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
