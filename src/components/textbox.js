import React, { useState, useRef, useEffect } from "react"

export default function Textbox(props) {
  const [text, setText] = useState("")
  const [expText, setExpText] = useState("")
  const ref = useRef(null)
  console.log(expText)
  const wordRequest = (index, array, text) => {
    fetch(`https://api.datamuse.com/words?ml=${array[index]}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        // console.log(response)
        text = text + response[0].word + " "
        if (index + 1 >= array.length) {
          console.log(text)
          setExpText(text)
        } else {
          console.log(text)
          wordRequest(index + 1, array, text)
        }
      })
      .catch((error) => {
        console.log(error)
        text = text + array[index] + " "
        if (index + 1 >= array.length) {
          console.log(text)
          setExpText(text)
        } else {
          console.log(text)
          wordRequest(index + 1, array, text)
        }
      })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const myArr = text.split(" ")
    console.log(myArr)
    wordRequest(0, myArr, "")
  }
  useEffect(() => {
    ref.current.innerText = expText
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <p ref={ref}></p>
    </>
  )
}
