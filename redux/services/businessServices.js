async function getBusinessList(location, term) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(
    `/api/business?location=${location}&term=${term}`,
    requestOptions
  );
  const businessList = await handleResponse(response);
  return businessList;
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
};
