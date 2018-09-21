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
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm">
                        <div className="jumbotron">
                            <h1 className="display-4">
                                Simple React Boilerplate
                            </h1>
                            <p className="lead">
                                Nulla lacus justo semper commodo nullam etiam,
                                porta ipsum nonummy ut nunc interdum, tincidunt
                                mi urna cras, et et at aenean mollis morbi odio,
                                ornare eu sagittis.
                            </p>
                            <hr className="my-4" />
                            <p>
                                Vitae sed mi pulvinar, pede nec quisque sed nisl
                                in, sapien nam in tincidunt amet suspendisse
                                vel. Wisi a curabitur. Cum pretium fusce fusce,
                                faucibus etiam ligula, orci pretium ut quam
                                aliquam sociis, arcu luctus. Donec vel lectus
                                quisque vel, libero lorem ac velit quisque
                                bibendum pede, justo imperdiet nullam magna,
                                faucibus euismod dolor.
                            </p>
                            <a
                                className="btn btn-primary btn-lg"
                                href="#"
                                role="button"
                            >
                                Go
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

FirstComponent.propTypes = {};

export default FirstComponent;
