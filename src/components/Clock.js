import React, { Component } from 'react';


class Clock extends Component {
    state = {
        time: '',
    };

    componentDidMount(){
        this.clockTimer= setInterval(() => this.setTime(), 1000)

    }
    componentWillUnmount(){
        clearTimeout(this.clockTimer)
    }
    setTime = () => {
        this.setState({
            time:this.newTime()
        })
    };
    newTime = () => {
       return new Date().toLocaleString('ru',
                {hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'})
    };

    render() {
        return (
            <div className={'Clock'}>
                {this.state.time}
            </div>
        );
    }
}


export default Clock;