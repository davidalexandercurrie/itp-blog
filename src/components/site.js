import React from 'react';
import { Link } from 'gatsby';
import Button from '../components/button';
import TV from '../components/tv';

export default function site() {
  return (
    <>
      <div className="main-button-container">
        {/* <Link to="/blog/">
          <Button
            style={{ marginTop: 0, marginBottom: 0 }}
            background="lightgrey"
          >
            📓Blog
          </Button>
        </Link> */}
        <Link to="/projects/">
          <Button
            style={{ marginTop: 0, marginBottom: 0 }}
            background="lightgrey"
          >
            📂Projects
          </Button>
        </Link>
        <Link to="/liminal/">
          <Button
            style={{ marginTop: 0, marginBottom: 0 }}
            background="lightgrey"
          >
            🗑Liminal
          </Button>
        </Link>
        <Link to="/bit-beat/">
          <Button
            style={{ marginTop: 0, marginBottom: 0 }}
            background="lightgrey"
          >
            👾Bit Beat
          </Button>
        </Link>
        <Link to="/contact/">
          <Button
            style={{ marginTop: 0, marginBottom: 0 }}
            background="lightgrey"
          >
            𝌕Contact
          </Button>
        </Link>
      </div>
      <div className="lower-bar"></div>
      <TV />
    </>
  );
}
