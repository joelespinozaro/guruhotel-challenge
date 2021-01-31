import { useApollo } from '../../../lib/apolloClient';
import { businessDetails } from '../../../lib/queries';

export default async (req, res) => {
  let data;

  const {
    query: { businessId },
    method,
  } = req;

  switch (method) {
    case 'GET':
      data = await useApollo(businessDetails(businessId));

      res.json(data);
      res.end();
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
