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
      try {
        data = await useApollo(businessDetails(businessId));
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
