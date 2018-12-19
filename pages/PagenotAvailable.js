import MainLayouts from '../layouts/main';
import { openSuggestion } from '../actions/suggestionActions';
import { initStore } from '../store';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';

class PagenotAvailble extends MainLayouts {
  constructor (props) {
    super(props);
  }

  render () {
    return super.render(
      <div className="text-center bg-white mt-10" style={{minHeight:'680px', paddingTop:'20%'}}>
        <h1>Oops, Nampaknya Halaman ini belum tersedia</h1>
      </div>

    );
  }
}

const mapStateToProps = (store) => ({
  suggestion: store.suggestion
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(openSuggestion, dispatch),
  };
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(PagenotAvailble);
