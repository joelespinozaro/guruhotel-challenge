/* eslint-disable no-case-declarations */
import { businessConstants } from '../constants';

export const initialState = {
  businessList: [],
  businessDetails: {},
  businessViewed: [],
  isFetchingBusinessList: false,
  errorMessageBusinessList: null,
  isFetchingBusinessDet: false,
  errorMessageBusinessDet: null,
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

    case businessConstants.BUSINESS_DETAILS_REQUEST:
      return {
        ...state,
        isFetchingBusinessDet: true,
      };
    case businessConstants.BUSINESS_DETAILS_SUCCESS:
      return {
        ...state,
        isFetchingBusinessDet: false,
        businessDetails: action.payload.businessDetails,
      };
    case businessConstants.BUSINESS_DETAILS_FAILURE:
      return {
        ...state,
        isFetchingBusinessDet: false,
        errorMessageBusinessDet: action.payload.error,
      };
    case businessConstants.ADD_BUSINESS_VIEWED:
      const exists = state.businessViewed.find(
        (item) => item === action.payload.id
      );
      if (exists) return { ...state };
      return {
        ...state,
        businessViewed: [...state.businessViewed, action.payload.id],
      };
    case businessConstants.UPDATE_BUSINESS_LIST:
      let newArray = [];

      state.businessList.map((item, index) => {
        if (state.businessViewed.indexOf(item.id) === -1) {
          state.businessList[index].isViewed = false;
          newArray.push(state.businessList[index]);
        } else {
          state.businessList[index].isViewed = true;
          newArray.push(state.businessList[index]);
        }
      });
      return {
        ...state,
        businessList: newArray,
      };
    default:
      return state;
  }
};
