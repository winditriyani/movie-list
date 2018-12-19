import Link from 'next/link';
import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Header extends React.Component {
  componentWillMount () {
    this.setState({
      display: false,
      displayUser: false,
      empty: '',
      openLogin: false,
      openDaftar: false,
      openDrawer: false,
      search: '',
    });
    this.inputData = this.inputData.bind(this);
    this.searchCommodity = this.searchCommodity.bind(this);

  }

  setActiveHeader (param) {
    this.props.setActiveHeader(param);
  }

  inputData (event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  searchCommodity () {
    this.props.insertInputSeach(this.state.search);
  }
  render () {
    return (
      <div className="bg-black">
        <div className="container">
          <nav className="navbar navbar-light">
            <a className="navbar-brand" href="/">
              <img src="../static/img/logo.png" width="100" height="70" class="d-inline-block align-top" alt="" />
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  keranjang: store.keranjang,
  register: store.register,
  login: store.login,
  cart: store.cart,
  product: store.product,
  onload: store.onload,
  suggestion: store.suggestion,
  general: store.general,
});


export default connect(mapStateToProps)(Header);
