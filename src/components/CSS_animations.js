import React, { Component } from 'react'

export default class Animate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide: false,
            flip: false
        }
    }

    onSlide() {
        this.setState({
            slide: true,
            flip: false
        })
    }
    onFlip() {
        this.setState({
          flip: true,
          slide: false
        });
    }
    render() {
        return null
    }

}