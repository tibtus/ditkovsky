import React from 'react';
import {Link} from 'react-router-dom';


const Main = () => {
    return (
        <main>
            <h2>MAIN</h2>


            <div>
                <Link to="/osnovnipraktyky">Перейти на сторінку Osnovni Praktyky</Link>
                <Link to="/about">Перейти на сторінку About</Link>
            </div>
        </main>
    );
}

export default Main;
