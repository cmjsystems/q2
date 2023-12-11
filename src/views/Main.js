import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
        <header>
            <h2>Name: Claudiomar Moreira de Jesus</h2>
            <h3>ID  : 223-0862</h3>
        </header>

        <Link to="/flowers"><button>Flowers</button></Link>
        <Link to="/cars"><button>Cars</button></Link>
        <Link to="/trees"><button>Trees</button></Link>
    </div>
  );
}

export default Main;