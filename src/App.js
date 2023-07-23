import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

const App = () => {
    return (
        <div className='tc'>
            <h1>Robofriends</h1>
            <SearchBox/>
            <CardList robots={robots}></CardList>
        </div>
    );
};

export default App;
