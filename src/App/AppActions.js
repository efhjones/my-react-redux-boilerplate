import { ActionTypes } from '../store/actions/actionTypes';

const AppActions = {

  countUp() {
    return {
      type: ActionTypes.COUNT_UP
    };
  }
};

export default AppActions;
