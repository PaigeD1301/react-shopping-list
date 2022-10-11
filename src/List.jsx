import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

function List({ list, deleteItem, updateItem }) {
  const listElement = list.map((item) => {
    const { id, name } = item;
    // console.log(id, name)

    return (
      <article className='item' key={id}>
        <p>{name}</p>
        <div className='btn-container'>
          <button className='btn edit-btn' onClick={() => updateItem(id)}>
            <FiEdit />
          </button>
          <button className='btn delete-btn' onClick={() => deleteItem(id)}>
            <FiTrash />
          </button>
        </div>
      </article>
    );
  });
  return <div>{listElement}</div>;
}

export default List;
