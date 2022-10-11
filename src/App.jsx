import { useEffect, useState } from 'react';
import './App.css';
import List from './List';
import { MdEdit } from 'react-icons/md';

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('list')) || []
  );
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      setList([...list]);
    } else if (input && editing) {
      // editing an item
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, name: input }; // same id, change the name to new input value
          }
          return item;
        })
      );
      setInput('');
      setEditId(null);
      setEditing(false);
    } else {
      const newItem = {
        id: Math.floor(Math.random() * 1000),
        name: input,
      };
      setList([...list, newItem]);
      setInput('');
    }
  };

  const clearList = () => {
    setList([]);
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const updateItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    setEditing(true);
    setEditId(id);
    setInput(editItem.name);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <main className='hero'>
      <section className='container'>
        <h1>Shopping List</h1>
        <form className='shopping-form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <input
              type='text'
              placeholder='Add item'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit' className=' add-btn'>
              <MdEdit />
              {/* {editing ? 'Edit' : 'Add'} */}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className='list-container'>
            <List list={list} deleteItem={deleteItem} updateItem={updateItem} />
            <button className='clear-btn' onClick={clearList}>
              Clear list
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
