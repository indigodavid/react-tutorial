import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo, handleChangeProps, deleteTodoProps } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />
      <button
        type="button"
        onClick={() => deleteTodoProps(todo.id)}
      >
        Delete
      </button>
      <span>{todo.title}</span>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
