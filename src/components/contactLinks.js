import React, { useRef, useEffect } from "react"

const animateWord = (word) => {
  startString = ""
  endString = ""
  letter = ""
  const index = Math.floor(Math.random() * word.length)
  for (let i = 0; i < word.length; i++) {
    if (i < index) {
      startString += word.charAt(i)
    } else if (i > index) {
      endString += word.charAt(i)
    } else {
      letter = word.charAt(i)
    }
  }
}
let startString = ""
let endString = ""
let letter = ""

export default function ContactLinks() {
  const gitRef = useRef(0)
  const scRef = useRef(0)
  const twitterRef = useRef(0)
  const emailRef = useRef(0)
  const spanArr = [
    '<span class="random-blue">',
    '<span class="random-orange">',
    '<span class="random-twitter">',
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      animateWord("GitHub")
      gitRef.current.innerHTML = `${startString}${
        spanArr[Math.floor(Math.random() * spanArr.length)]
      }${letter}</span>${endString}`
      animateWord("SoundCloud")
      scRef.current.innerHTML = `${startString}${
        spanArr[Math.floor(Math.random() * spanArr.length)]
      }${letter}</span>${endString}`
      animateWord("Twitter")
      twitterRef.current.innerHTML = `${startString}${
        spanArr[Math.floor(Math.random() * spanArr.length)]
      }${letter}</span>${endString}`
      animateWord("davidcurrie@nyu.edu")
      emailRef.current.innerHTML = `${startString}${
        spanArr[Math.floor(Math.random() * spanArr.length)]
      }${letter}</span>${endString}`
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <a ref={emailRef} href="mailto:davidcurrie@nyu.edu">
        davidcurrie@nyu.edu
      </a>
      <p>
        <a
          ref={gitRef}
          href="https://github.com/davidalexandercurrie"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
      <p>
        <a
          ref={scRef}
          href="https://soundcloud.com/davidalexandercurrie"
          target="_blank"
          rel="noreferrer"
        >
          SoundCloud
        </a>
      </p>
      <p>
        <a
          ref={twitterRef}
          href="https://https://twitter.com/dvdlxndr"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </p>
    </>
  )
}
