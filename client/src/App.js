import React from 'react';
import PostCreate from './PostCreate'

class App extends React.Component{
    render() {
        return(
            <div className="container">
                <h1>Create Post</h1>
                <PostCreate />
            </div>

        )
    }
}

export default App;



