import React from 'react';
import { openSuggestion } from '../actions/suggestionActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Link from 'next/link';

class Katalog extends React.Component {

  _listNews () {
    if (this.props.suggestion.data.results != undefined) {
      let suggestions = this.props.suggestion.data.results;
      return suggestions.map((dataList,key) => {
        let url = "/detail-film?episode_id=" + dataList.episode_id;
        let image = '../static/img/new.jpg';
        switch (dataList.title) {
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
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <img className="card-img" src={image} alt="Card image" />
              </div>
              <div className="card-body">
                <h1 className="card-title">{dataList.title}</h1>
                <div className="container">
                  <div className="row">
                    <div className="col-6 metadata">
                      <i className="far fa-calendar-alt" aria-hidden="true"></i>
                      <p>{dataList.release_date}</p>
                    </div>
                    <div className="col-6 metadata">{dataList.director}</div>
                  </div>
                </div>
                <p className="card-text text-truncate">{dataList.opening_crawl}</p>
                <Link href={url}>
                  <a className="trailer-preview" target="new">
                    <i className="fa fa-play" aria-hidden="true"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        );
      });
    }
  }

  render () {
    return (
      <div className="container">
        <div className="row pt-5">
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
export default connect(mapStateToProps, mapDispatchToProps)(Katalog);
