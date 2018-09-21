import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class ComponentOne extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    shouldComponentUpdate(nextProps, nextState) {}

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
                            <h3 className="display-5">Component 1</h3>
                            <p className="lead">
                                Nulla lacus justo semper commodo nullam etiam,
                                porta ipsum nonummy.
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
                            <ul>
                                <li>
                                    <Link to="/two">Component 2</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ComponentOne.propTypes = {};

export default ComponentOne;
