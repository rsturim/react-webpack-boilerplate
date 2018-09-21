import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FirstComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) {}

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {}

    render() {
        return (
            <div>
                <h2>first component</h2>
            </div>
        );
    }
}

FirstComponent.propTypes = {};

export default FirstComponent;
