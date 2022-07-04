import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const { todo, handleChangeProps, deleteTodoProps } = props;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        className={styles.checkbox}
        onChange={() => handleChangeProps(todo.id)}
      />
      <button
        type="button"
        onClick={() => deleteTodoProps(todo.id)}
      >
        Delete
      </button>
      <span style={todo.completed ? completedStyle : null}>
        {todo.title}
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
