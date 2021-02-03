import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { BusinesssActions } from "../../redux/actions";
import { Loading } from "../../components/Loading";
import ReviewList from "../../components/ReviewList";
import BusinessInfo from "../../components/BusinessInfo";
import HourList from "../../components/HourList";
import HomeReturn from "../../components/HomeReturn";

function BussinesDetails({
  businessDetails,
  getBusinessDetails,
  isFetchingBusinessDet,
  errorMessageBusinessDet,
}) {
  const {
    name,
    location,
    review_count,
    phone,
    photos,
    price,
    hours,
    reviews,
    rating,
  } = businessDetails;
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== router.route) {
      const { businessId } = router.query;
      getBusinessDetails(businessId);
      setReady(true);
    }
  }, [router]);
  if (errorMessageBusinessDet)
    return <h1>{errorMessageBusinessDet}</h1>;

  if (isFetchingBusinessDet || !ready)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Loading />
      </div>
    );

  return (
    <>
      <HomeReturn />
      <BusinessInfo
        name={name}
        rating={rating}
        hours={hours}
        price={price}
        photos={photos}
        location={location}
        phone={phone}
      />

      <HourList hours={hours[0]} />
      <div className="main">
        <div>
          <ReviewList reviews={reviews} reviewCount={review_count} />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const {
    businessDetails,
    isFetchingBusinessDet,
    errorMessageBusinessDet,
  } = state.businessReducer;
  return {
    businessDetails,
    isFetchingBusinessDet,
    errorMessageBusinessDet,
  };
};

const mapDispatchToProps = {
  getBusinessDetails: BusinesssActions.getBusinessDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BussinesDetails);
