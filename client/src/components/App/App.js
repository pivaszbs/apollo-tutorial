import React from 'react';
import './App.css';

import { GET_ALL_RECIPES } from '../../queries';
import { Query } from 'react-apollo';

const App = () => (
    <div className="App">
        <h1>Home</h1>
        <Query query={GET_ALL_RECIPES}>
            {({ data, loading, error }) => {
                if (loading) return <div>Loading</div>

                if (error) return <div>Error</div>

                console.log(data);

                return (<p>{data}</p>)
            }}
        </Query>
    </div>
);

export default App;