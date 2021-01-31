import { gql } from '@apollo/client';

export const listOfBusiness = (location, term) => {
  return gql`
    query {
      search(location: "${location}", term: "${term}" , limit: 10) {
        business {
          id
          name
          photos
          location {
            address1
            city
            state
            country
          }
          coordinates {
            latitude
            longitude
          }
          review_count
          rating
          phone
        }
      }
    }
  `;
};

export const businessDetails = (id) => {
  return gql`
    query {
      business(id: "${id}") {
        id
        name
        location {
          address1
          address2
        }
        phone
      }
    }
  `;
};
