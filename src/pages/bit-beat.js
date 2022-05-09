import React from 'react';
import '../styles/style.scss';
import logo from '../../content/assets/thumbnail-01.jpg';
import hero from '../../content/assets/hero-01.jpg';
import { Link } from 'gatsby';
import { RiArrowLeftLine } from 'react-icons/ri';
export default function itpThesis() {
  return (
    <>
      <div style={{ padding: '2em' }}>
        <img style={{ float: 'right' }} src={logo} alt="bit beat logo" />
        <div className="back-arrow">
          <Link to="/">
            <RiArrowLeftLine />
          </Link>
        </div>
        <h1>---bit beat---</h1>
        <img
          src={hero}
          alt="an image of bit beat running side by side from command line and a nintendo ds"
        />
        <br />
        <br />
        <p>
          ---bit beat--- is a minimalist live coding tool made with{' '}
          <a href="https://100r.co/site/uxn.html">UXN</a>
        </p>
        <p>To use it you will need the following:</p>
        <li>
          The ---beat bit--- ROM. Download{' '}
          <a href="https://github.com/davidalexandercurrie/uxn-hex-beat/releases/tag/rom">
            here
          </a>
        </li>
        <li>
          The UXN Emulator. Download{' '}
          <a href="https://100r.co/site/uxn.html">here</a>
        </li>
        <li>
          You will also need{' '}
          <a href="https://www.libsdl.org/download-2.0.php">SDL2</a> installed.
          UXN uses this to interact with controllers, keyboard, mouse etc.
        </li>
        <br />
        <p>
          Put the uxnemu file and the beat_bit1.0.rom file in the same folder{' '}
        </p>
        <p>Run this from command line inside the folder</p>
        <pre>
          <code>./uxnemu ./beat_bit1.0.rom</code>
        </pre>

        <h3>Commands</h3>
        <p>
          <span style={{ background: 'white' }}>Tab</span> # switches between
          the four voices
        </p>
        <p>
          <span style={{ background: 'white' }}>Shift + Backspace</span> # will
          delete the entire line of text.
        </p>
        <p>
          <span style={{ background: 'white' }}>rhythm: r 80808480</span> # the
          letter r followed by an 8 digit hex number. The bits correspond to the
          rhythm e.g. r 80808080 would be 10000000100000001000000010000000 or 4
          quarter notes{' '}
        </p>
        <p>
          <span style={{ background: 'white' }}>pitch: n[60 63 67]</span> # the
          letter n followed by an array of midi values. i.e. 60 = middle C. The
          collection of pitches will be iterated through repeatedly
        </p>
        <p>
          <span style={{ background: 'white' }}>waveform: i 1</span> # the
          letter i followed by a single digit that represents the waveform.
          Currently: #01=sin #02=tri #03=saw #04 =violin #05=piano #06=noize
          #07=noise-rand #08=kick-drum
        </p>
        <p>
          <span style={{ background: 'white' }}>bitshift: f</span> # the letter
          f will bitshift the rhythm and then add it to itself. A quick way to
          create some rhythmic variation
        </p>
        <br />
        <div style={{ maxWidth: '1200px' }}>
          <div className="iframe-container">
            <iframe
              className="responsive-iframe"
              src={'https://www.youtube.com/embed/CoimA7ydIZg'}
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
