import { connect } from 'react-redux';
import App from './App';
import AppActions from './AppActions';

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    countUp () {
      dispatch(AppActions.countUp())
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
