import React from 'react';

class ClassComponente extends React.Component<{name: string}> {

    state = {
        name: 'Mundo!!!'
    }

    render() {
        return <div>
            <p>name: { this.props.name }</p>
            <button onClick={() => {
                this.setState({ name: 'Rafael Nunes' })
            }}>Click-me</button>
        </div>
    }
}

export default ClassComponente