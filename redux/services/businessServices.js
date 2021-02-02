const requestOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
};
// function to get business list from API.
async function getBusinessList(location, term) {
  const response = await fetch(
    `/api/business?location=${location}&term=${term}`,
    requestOptions
  );
  const businessList = await handleResponse(response);
  return businessList;
}

// function to get details of selected business from API.
async function getBusinessDetails(id) {
  const response = await fetch(`/api/business/${id}`, requestOptions);
  const businessDetails = await handleResponse(response);
  return businessDetails;
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (data.graphQLErrors || !response.status) {
      const error =
        data.graphQLErrors[0].message || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

export const businessServices = {
  getBusinessList,
  getBusinessDetails,
};
