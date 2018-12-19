import React from 'react';
import {isLoading,endLoading} from '../actions/LoadingActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Loading extends React.Component {
  componentWillMount () {
    if (this.props.onload.loading) {
      this.props.isLoading();
    }
  }
  componentDidMount () {
    if (this.props.onload.loading) {
      this.props.endLoading();
    }
  }
  render () {
    return (
      <div className="d-none">
        <div class="loader">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  onload: store.onload,
});
const mapDispatchToProps = (dispatch) => {
  return {
    isLoading: bindActionCreators(isLoading, dispatch),
    endLoading: bindActionCreators(endLoading, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Loading);
