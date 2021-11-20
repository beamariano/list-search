import myData from "../assets/sample-data.json";

const initialState = {
  data: myData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case "A":
    // // code here;

    //DON'T DELETE THIS:
    default:
      return state;
  }
};

export default reducer;
