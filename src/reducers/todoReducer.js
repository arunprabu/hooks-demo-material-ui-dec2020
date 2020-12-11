/* Reducer
fn that takes in initiate state [] and works on action 
then returns the state 
*/

// initial state and returns a state

const todoReducer = ( state = [], action) => {

  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state, 
        {
          id: new Date(),
          text: action.data,
          completed: false
        }
      ];
    
    default: 
      return state;
  }
  
}

export default todoReducer;