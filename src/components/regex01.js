import React, { useState, useRef, useEffect } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default function Regex01(props) {
  const [count, setCount] = useState(0);
  const [params, setParams] = useState({});
  const [param1, setParam1] = useState(0);
  const [param2, setParam2] = useState(0);
  const [text, setText] = useState('');
  const [blockColor, setBlockColor] = useState('');
  const [expText, setExpText] = useState('');
  const ref = useRef(null);
  const colors = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let color = text.replace(/(\w+\b)\s(\d+)\s(\d+)/g, (m, p1, p2, p3) => {
      return p1;
    });
    let param1 = text.replace(/(\w+\b)\s(\d+)\s(\d+)/g, (m, p1, p2, p3) => {
      return p2;
    });
    let param2 = text.replace(/(\w+\b)\s(\d+)\s(\d+)/g, (m, p1, p2, p3) => {
      return p3;
    });
    setParams({
      param1,
      param2,
      color,
    });
    // setParam1(param1);
    // setParam2(param2);
    // setBlockColor(color);
  };
  useEffect(() => {
    ref.current.innerHTML = expText;
  });

  const onTextChange = (e) => {
    const regex = /\w+/g;

    setExpText(
      e.target.value.replace(/\d+/g, (m) => {
        return '<span style="color: red">' + m + '</span>';
      })
    );
    setText(e.target.value);
  };

  useInterval(() => {
    if (count % params.param1 == 0) {
      colors.current.style.backgroundColor = params.color;
    } else {
      colors.current.style.backgroundColor = 'white';
    }
    if (count % params.param2 == 0) {
      colors.current.style.color = 'pink';
      colors.current.style.border = '2px solid blue';
    } else {
      colors.current.style.color = 'black';
      colors.current.style.border = 'none';
    }
    // console.log(params.color);
    setCount(count + 1);
  }, 250);

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

      <p ref={ref}></p>
      <div className="color-blocks" ref={colors}>
        |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
      </div>
    </>
  );
}
