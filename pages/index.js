import Card from '../components/Card';
import MainLayouts from '../layouts/main';
import { ListSuggestion } from '../actions/suggestionActions';
import { initStore } from '../store';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import Fade from 'react-reveal/Fade';

class HomePage extends MainLayouts {
  constructor (props) {
    super(props);
  }
  componentWillMount () {
    this.props.ListSuggestion();
  }
  getData() {
    if (this.props.onload.loadingList) {
      return (
        <div className="bg-white wrap">
          <div className="loader">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      )

    }
    return <Card dataSet={this.props.suggestion}/>
  }
  render () {
    return super.render(
      <div>
        <Fade bottom>
          <section>
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
    ListSuggestion: bindActionCreators(ListSuggestion, dispatch),
  };
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(HomePage);
