export const appReducer = (state: AccountInfo[], action: any): AccountInfo[] => {
  switch (action.type) {
    case "FETCH_ACCOUNT":
      return [...state, ...action.payload];
    case "NEW_ACCOUNT":
      return [action.payload, ...state];
    default:
      return state;
  }
};

export const apiReducer = (state, action) => {
  switch (action.type) {
    case "SET_API":
      return action.payload;
    default:
      return state;
  }
};

export const defaultAccount = {
  state: [{
    balances: {},
    address: "",
  }],
  dispatch: () => [{
    balances: {},
    address: "",
  }]
}