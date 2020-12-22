import AppActions from '../actions/appActions'

const initialState = {
  height: window.screen.height,
  width: window.screen.width
}

export default function appReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case AppActions.SIZE_CHANGE: 
      return {
        height: payload.height,
        width: payload.width,
        ...state
      }

    default:
      return state
  }
}
