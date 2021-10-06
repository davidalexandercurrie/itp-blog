import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
const socket = io('https://word-counting-server.herokuapp.com/');

const CountingWords = () => {
  let [keys, setKeys] = useState(null);
  let [counts, setCounts] = useState(null);
  useEffect(() => {
    socket.emit('msg', 'hello');
    socket.on('event', (data) => {
      console.log(data);
      setKeys(data.keys);
      setCounts(data.counts);
    });
  }, []);
  return (
    <>
      {keys && keys.map((element) => <p>{`${element} ${counts[element]}`}</p>)}
    </>
  );
};

export default CountingWords;
