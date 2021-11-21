import hospitalData from "../assets/sample-data.json";
import provinces from "../assets/provinces.json";
import regions from "../assets/regions.json";

const initialState = {
  data: hospitalData,
  regions: regions,
  provinces: provinces,
  cities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
