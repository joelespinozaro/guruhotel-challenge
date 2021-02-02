import { businessConstants } from '../constants';
import { businessServices } from '../services/';

export const getListOfBusiness = (location, term) => {
  return (dispatch) => {
    dispatch(clean());
    dispatch(request());

    businessServices.getBusinessList(location, term).then(
      (businessList) => {
        if (!businessList.search) {
          dispatch(failure('No found results. Please, try again.'));
          return;
        }
        if (businessList.search.business.length === 0) {
          dispatch(failure('No found results. Please, try again.'));
        }
        dispatch(success(businessList.search.business));
        dispatch(updateBusinessList());
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return {
      type: businessConstants.BUSINESS_LIST_REQUEST,
    };
  }
  function success(businessList) {
    return {
      type: businessConstants.BUSINESS_LIST_SUCCESS,
      payload: {
        businessList: businessList,
      },
    };
  }
  function failure(error) {
    return {
      type: businessConstants.BUSINESS_LIST_FAILURE,
      payload: {
        error: error.toString(),
      },
    };
  }
  function clean() {
    return {
      type: businessConstants.BUSINESS_LIST_CLEAN_ERROR,
      payload: {
        error: null,
      },
    };
  }
};

export const getBusinessDetails = (id) => {
  return (dispatch) => {
    dispatch(request());

    businessServices.getBusinessDetails(id).then(
      (businessDetails) => {
        dispatch(success(businessDetails.business));
        dispatch(addBusinessViewed(businessDetails.business.id));
        dispatch(updateBusinessList());
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return {
      type: businessConstants.BUSINESS_DETAILS_REQUEST,
    };
  }
  function success(businessDetails) {
    return {
      type: businessConstants.BUSINESS_DETAILS_SUCCESS,
      payload: {
        businessDetails: businessDetails,
      },
    };
  }
  function failure(error) {
    return {
      type: businessConstants.BUSINESS_DETAILS_FAILURE,
      payload: {
        error: error.toString(),
      },
    };
  }
};

const addBusinessViewed = (id) => {
  return {
    type: businessConstants.ADD_BUSINESS_VIEWED,
    payload: {
      id: id,
    },
  };
};

const updateBusinessList = () => {
  return {
    type: businessConstants.UPDATE_BUSINESS_LIST,
  };
};
export const BusinesssActions = {
  getListOfBusiness,
  getBusinessDetails,
  updateBusinessList,
};
