// Action type
const STATUS_CHECK = 'STATUS_CHECK';

// Action creator
export const check = () => ({
  type: STATUS_CHECK,
});

// Reducer
export default reducer = (state = [], action) => {
  switch(action.type){
    case STATUS_CHECK:
      return "Under construction";
    default:
      return state;
  }
}
