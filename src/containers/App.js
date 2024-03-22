import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    // class App extends Component {
    //     constructor() {
    //         super();
    //         this.state = {
    //             robots: [],
    //             searchfield: '',
    //         };
    //     }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => response.json())
    //         .then((users) => this.setState({ robots: users }));
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setRobots(users));
            //console.log(robots, searchfield);
    },[]);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
        <h1>Loading</h1>
    ) : (
        <div className="tc">
            <h1 className="f1">Robofriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}></CardList>
                </ErrorBoundry>
            </Scroll>
        </div>
    );
};

export default App;
