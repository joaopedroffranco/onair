import React from 'react';
import './style.css';
import Constants from '../constants';

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            on: false
        }

        this.onKeyDown = this.onKeyDown.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown);
    }

    onKeyDown(keycode) {
        if (keycode.code === Constants.keys.space) {
            this.onAir();
        }
    }

    onAir() {
        const { on } = this.state;
        this.setState({
            on: !on
        });
    }

    render() {
        const { on } = this.state;
        const textClassName = `onair ${Home.mapOn[on]}`

        return (
            <div className='container'>
                <p className={textClassName}>
                    {Constants.home.onair}
                </p>
            </div>
        );
    }
}

Home.mapOn = {
    true: 'on',
    false: 'off'
}

export default Home;