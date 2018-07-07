import React from 'react';
import { connect } from 'react-redux';
import * as homeActions from '../../modules/home/home.action';
import Home from './home';

const mapStateToProps = (state) => {
    return {
        api: state.api.data,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        apiRequest: albumsList => dispatch(homeActions.apiRequest(albumsList))
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(Home);