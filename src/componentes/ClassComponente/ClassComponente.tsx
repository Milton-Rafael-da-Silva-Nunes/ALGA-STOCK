import React from 'react';

class ClassComponente extends React.Component<{name: string}> {

    constructor(props: any) {
        super(props)
        console.log('construtor reached')
    }

    state = {
        name: 'Mundo!!!'
    }

    componentDidMount() {
        console.log('did mount reached')
    }

    componentDidUpdate() {
        console.log('did update reached')
    }

    render() {
        console.log('render reached')
        return <div>
            <p>name: { this.state.name }</p>
            <button onClick={() => 
            {this.setState({ name: 'Rafael Nunes' })
            }}>Click-me</button>
        </div>
    }
}

export default ClassComponente