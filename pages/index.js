import { useState } from "react";
import Search from "../components/Search";
import ListOfBusiness from "../components/ListOfBusiness";
import { Loading } from "../components/Loading";
import { NotFound } from "../components/NotFound";
import { connect } from "react-redux";
import { BusinesssActions } from "../redux/actions";

function Home({
  businessList,
  isFetchingBusinessList,
  getListOfBusiness,
  errorMessageBusinessList,
}) {
  const [formValues, setFormValues] = useState({});
  const [errorInput, setErrorInput] = useState({
    find: false,
    location: false,
  });
  const handleInput = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    setErrorInput({ ...errorInput, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.find && !formValues.location) {
      setErrorInput({ location: true, find: true });
      return;
    } else if (!formValues.find) {
      setErrorInput({ ...errorInput, find: true });
      return;
    } else if (!formValues.location) {
      setErrorInput({ ...errorInput, location: true });
      return;
    } else {
      setErrorInput({ find: false, location: false });
    }
    getListOfBusiness(formValues.location, formValues.find);
  };

  return (
    <div className="main">
      <div className="main__header">
        <h1 className="main__header--title">FIND A PLACE</h1>
      </div>
      <Search
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        errorInput={errorInput}
      />
      <div className="main__content">
        {isFetchingBusinessList ? (
          <Loading />
        ) : errorMessageBusinessList ? (
          <NotFound message={errorMessageBusinessList} />
        ) : (
          <ListOfBusiness businessList={businessList} />
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const {
    businessList,
    isFetchingBusinessList,
    errorMessageBusinessList,
  } = state.businessReducer;
  return {
    businessList,
    isFetchingBusinessList,
    errorMessageBusinessList,
  };
}

const mapDispatchToProps = {
  getListOfBusiness: BusinesssActions.getListOfBusiness,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
