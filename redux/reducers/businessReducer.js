import { businessConstants } from '../constants';

export const initialState = {
  businessList: [],
  businessSelected: {},
  businessViewed: [],
  isFetchingBusinessList: false,
  errorMessageBusinessList: null,
};

export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case businessConstants.BUSINESS_LIST_REQUEST:
      return {
        ...state,
        isFetchingBusinessList: true,
      };
    case businessConstants.BUSINESS_LIST_SUCCESS:
      return {
        ...state,
        isFetchingBusinessList: false,
        businessList: action.payload.businessList,
      };
    case businessConstants.BUSINESS_LIST_FAILURE:
      return {
        ...state,
        isFetchingBusinessList: false,
        errorMessageBusinessList: action.payload.error,
      };
    case businessConstants.BUSINESS_LIST_CLEAN_ERROR:
      return {
        ...state,
        errorMessageBusinessList: action.payload.error,
      };
    default:
      return state;
  }
};
