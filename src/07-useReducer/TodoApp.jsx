import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'description 1',
    done: false,
  },
  {
    id: new Date().getTime() + 100,
    description: 'description 2',
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>
        TodoApp: 10, <small>Pending: 2</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <ul className='list-group'>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className='list-group-item d-flex justify-content-between'
              >
                <span className='align-self-center'>Item 1</span>
                <button className='btn btn-danger'>Delete</button>
              </li>
            ))}
          </ul>
        </div>

        <div className='col-5'>
          <h4>Add TODO</h4>
          <hr />

          <form>
            <input
              type='text'
              placeholder='what to do?'
              className='form-control'
            />

            <button type='submit' className='btn btn-outline-primary mt-2'>
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
