const requestOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
};

async function getBusinessList(location, term) {
  const response = await fetch(
    `/api/business?location=${location}&term=${term}`,
    requestOptions
  );
  const businessList = await handleResponse(response);
  return businessList;
}

async function getBusinessDetails(id) {
  const response = await fetch(`/api/business/${id}`, requestOptions);
  const businessDetails = await handleResponse(response);
  return businessDetails;
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export const businessServices = {
  getBusinessList,
  getBusinessDetails,
};
