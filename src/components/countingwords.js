import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
const socket = io('https://word-counting-server.herokuapp.com/');
const containsEmoji = require('contains-emoji');

const CountingWords = () => {
  let [keys, setKeys] = useState(null);
  let [counts, setCounts] = useState(null);
  let [text, setText] = useState('thecodingtrain');
  let [noun, setNoun] = useState(false);
  let [adjective, setAdjective] = useState(false);
  let [mention, setMention] = useState(false);
  let [emoji, setEmoji] = useState(false);

  function spanClick(event) {
    if (event.target.innerText.charAt(0) === '@') {
      let str = event.target.innerText.replace(/(@)(\w+)(.*)/g, (m, p1, p2) => {
        return p2;
      });
      setNoun(false);
      setAdjective(false);
      setEmoji(false);
      setMention(false);
      setText(str);
      let data = [[noun, adjective, mention, emoji], text];
      socket.emit('msg', data);
    }
  }

  function MouseOver(event) {
    event.target.style.background = 'white';
  }
  function MouseOut(event) {
    event.target.style.background = 'none';
  }

  const onTextChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let data = [[noun, adjective, mention, emoji], text];
    socket.emit('msg', data);
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
        <button
          type="button"
          onClick={() => {
            setAdjective(!adjective);
          }}
          className={`float-right ${adjective ? 'btn-active' : null}`}
        >
          Adjectives
        </button>
        <br />
        <button
          type="button"
          onClick={() => {
            setNoun(!noun);
          }}
          className={`float-right ${noun ? 'btn-active' : null}`}
        >
          Nouns
        </button>
        <br />
        <button
          type="button"
          onClick={() => {
            setMention(!mention);
          }}
          className={`float-right ${mention ? 'btn-active' : null}`}
        >
          Mentions
        </button>
        <br />
        <button
          type="button"
          onClick={() => {
            setEmoji(!emoji);
          }}
          className={`float-right ${emoji ? 'btn-active' : null}`}
        >
          Emoji
        </button>{' '}
        <br />
        <input
          style={{ background: 'lightgreen' }}
          className="float-right"
          type="submit"
          value="Submit"
        />
      </form>

      <p>
        {keys &&
          counts &&
          keys.map((element) => (
            <span
              onMouseEnter={MouseOver}
              onMouseLeave={MouseOut}
              onClick={spanClick}
              style={{
                display: 'inline-block',
                border: `2px solid black`,
                fontSize:
                  (containsEmoji(element) ? 40 : 18) + counts[element] * 2,
              }}
            >{`${element} ${counts[element]} `}</span>
          ))}
      </p>
    </>
  );
};

export default CountingWords;
