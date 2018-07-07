import React, { PureComponent } from 'react';


class Home extends PureComponent {




    state = {
        albumsList: []
    };


    componentDidMount() {
        console.log(this.props);
        // fetch('https://jsonplaceholder.typicode.com/albums')
        //     .then(response => response.json())
        //     .then(data =>
        //     {this.props.saveToGlobalStore(data)}
        //     )
        {this.props.apiRequest()}
    }

    componentDidUpdate() {
        console.log(this.props);
        console.log(this.state.albumsList)
    }

    renderAlbumsList = () =>
        this.props.api.map((item)=>
            <div key={item.id}>{item.title}</div>
    );

    render() {
        return (
            <div>
                {this.renderAlbumsList()}
            </div>
        )
    }
}

export default Home;