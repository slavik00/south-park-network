const Actions =  {
  SIZE_CHANGE: 'SIZE_CHANGE',
  setSize: (width, height) => ({
    type: Actions.SIZE_CHANGE,
    payload: { width, height }
  })
}

export default Actions