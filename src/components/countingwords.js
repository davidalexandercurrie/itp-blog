import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
const socket = io('https://word-counting-server.herokuapp.com/');

const CountingWords = () => {
  useEffect(() => {
    socket.emit('msg', 'hello');
    socket.on('event', (data) => {
      console.log(data);
    });
  }, []);
  return (
    <>
      <div>hellllllo</div>
    </>
  );
};

export default CountingWords;
