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
            formatted_address
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
          formatted_address
        }
        coordinates {
          latitude
          longitude
        }
        review_count
        phone
        price
        hours {
          hours_type
          is_open_now
          open {
            start
            end
            day
          }
        }
        reviews(limit: 5) {
          id
          rating
          user {
            id
            profile_url
            image_url
            name
          }
        }
      }
    }
  `;
};
