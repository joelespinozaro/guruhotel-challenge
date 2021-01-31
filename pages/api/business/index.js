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
      data = await useApollo(listOfBusiness(location, term));

      res.json(data);
      res.end();
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
