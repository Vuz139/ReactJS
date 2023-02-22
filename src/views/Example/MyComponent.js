import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Eric',
        channel: 'Hoi Dan IT'
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value

        })
    }
    handleClickButton = () => {
        console.log('hit the button')
        alert('click me')
    }
    render() {

        // let name = 'Eric';
        return (
            <React.Fragment>
                <div>
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleNameChange(event)} />
                    Hello my component, My name is {this.state.name}
                </div>
                <div>
                    My youtube channel is {this.state.channel}

                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}> Click me</button>
                </div>

            </React.Fragment>

        )

    }

}

export default MyComponent;