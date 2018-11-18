
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { barAction } from '../actions/fooAction'

class HomePage extends Component {
    render() {
        const { name, updateBarData } = this.props;
        return (
            <div>
                Smart Container: {name}
                <button onClick={() => updateBarData('Priyanshu')}>Bar</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { name } = state.foo;
    return {
        name
    }
};

const mapDispatchToProps = (dispatch) => {
    const updateBarData = (data) => {
        dispatch(barAction(data))
    };
    return { updateBarData };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
