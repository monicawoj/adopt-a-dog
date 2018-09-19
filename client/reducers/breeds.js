const breeds = (state=[], action) => {
  switch (action.type) {
    case 'GET_BREED_LIST':
      return [
        '',
        ...action.data
      ];
    default:
      return state;
  }
}

export default breeds;
