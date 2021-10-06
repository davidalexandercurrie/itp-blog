import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
const socket = io('https://word-counting-server.herokuapp.com/');

const CountingWords = () => {
  let [tweets, setTweets] = useState(null);
  useEffect(() => {
    socket.emit('msg', 'hello');
    socket.on('event', (data) => {
      console.log(data);
      setTweets(data.data);
    });
  }, []);
  return (
    <>
      <div>hellllllo</div>
      {tweets && tweets.map((element) => <p>{element.text}</p>)}
    </>
  );
};

export default CountingWords;
