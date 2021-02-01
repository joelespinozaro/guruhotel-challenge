import Business from './Business';

export default function ListOfBusiness({ businessList }) {
  return (
    <>
      {businessList.map((business) => (
        <div className="main__content--item" key={business.id}>
          <Business business={business} />
        </div>
      ))}
    </>
  );
}
