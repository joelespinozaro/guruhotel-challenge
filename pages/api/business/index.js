import { useApollo } from '../../../lib/apolloClient';
import { listOfBusiness } from '../../../lib/queries';

export default async (req, res) => {
  let data;

  const {
    query: { location, term },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        data = await useApollo(listOfBusiness(location, term));

        res.json(data);
      } catch (error) {
        res.json(error);
      }
      res.end();
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
