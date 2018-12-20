import React,{Fragment} from 'react';
import { openSuggestion } from '../actions/suggestionActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'moment';
import Router from 'next/router'
import Link from 'next/link';

class DetailFilm extends React.Component {

  _listNews () {
    if (this.props.dataSet) {
      let dataSet = this.props.dataSet;
      let image = '../static/img/new.jpg';
      switch (dataSet.title) {
        case 'A New Hope':
          image = '../static/img/new.jpg'
          break;
        case 'Attack of the Clones':
          image = '../static/img/attack.jpg'
          break;
        case 'The Phantom Menace':
          image = '../static/img/phantom.jpg'
          break;
        case 'Revenge of the Sith':
          image = '../static/img/silit.jpg'
          break;
        case 'Return of the Jedi':
          image = '../static/img/jedi.jpg'
          break;
        case 'The Empire Strikes Back':
          image = '../static/img/theempire.jpg'
          break;
        case 'The Force Awakens':
          image = '../static/img/theforce.jpg'
          break;
        default:

      }
      return (
        <Fragment>
          <div className="col-md-4">
            <img className="card-img" src={image} alt="Card image" />
          </div>
          <div className="col-md-8">
            <h1>{dataSet.title}</h1>
            <p>{dataSet.opening_crawl}</p>
            <h4>Director : {dataSet.director}</h4>
            <h4>Producer : {dataSet.producer}</h4>
            <h4>Release Date : {dataSet.release_date}</h4>
          </div>
        </Fragment>
      );
    }
  }

  render () {

    return (
      <div className="wrap">
        <div className="row pt-5">
        {console.log(this.props.suggestion)}
          {this._listNews()}
        </div>
      </div>


    );
  }
}
const mapStateToProps = (store) => ({
  suggestion: store.suggestion,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(openSuggestion, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailFilm);
