import React, { Component } from 'react';

export default class GoogleCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount = () => {
        this.getEvents();
    }

    //todo add google callander
}