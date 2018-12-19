import DetailFilm from '../components/DetailFilm';
import MainLayouts from '../layouts/main';
import { detailFilm } from '../actions/suggestionActions';
import { initStore } from '../store';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import Fade from 'react-reveal/Fade';

class HomePage extends MainLayouts {
  constructor (props) {
    super(props);
    this.state ={
      episode_id: props.url.query.episode_id,
    };
  }
  componentWillMount () {
    this.props.detailFilm(this.state.episode_id);
  }
  getData () {
    if (this.props.onload.loadingDetail) {
      return (
        <div className="bg-white wrap">
          <div className="loader">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      );
    }
    return <DetailFilm dataSet={this.props.suggestion.detail}/>
  }
  render () {
    return super.render(
      <div>
        <Fade bottom>
          <section className="bg-white">
            <div className="container">
              {this.getData()}
            </div>
          </section>
        </Fade>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  suggestion: store.suggestion,
  onload: store.onload,
});

const mapDispatchToProps = (dispatch) => {
  return {
    detailFilm: bindActionCreators(detailFilm, dispatch),
  };
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(HomePage);
