import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
const socket = io('https://word-counting-server.herokuapp.com/');

const CountingWords = () => {
  let [keys, setKeys] = useState(null);
  let [counts, setCounts] = useState(null);
  let [text, setText] = useState('thecodingtrain');

  const onTextChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    socket.emit('msg', text);
  };
  console.log(counts);
  console.log(keys);
  useEffect(() => {
    socket.on('event', (data) => {
      setKeys(data.keys);
      setCounts(data.counts);
    });
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea
            className="full-width-form"
            cols="30"
            rows="10"
            type="text"
            value={text}
            onChange={(e) => onTextChange(e)}
          />
        </label>
        <input className="float-right" type="submit" value="Submit" />
      </form>
      {keys &&
        counts &&
        keys.map((element) => (
          <p
            style={{ fontSize: 18 + counts[element] * 3 }}
          >{`${element} ${counts[element]}`}</p>
        ))}
    </>
  );
};

export default CountingWords;
