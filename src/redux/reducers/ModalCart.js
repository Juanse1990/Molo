const initialState = {
    size: ''
  };

  const miVariableReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MI_VARIABLE':
        return {
          ...state,
          miVariable: action.payload
        };
      default:
        return state;
    }
  };

export default miVariableReducer;