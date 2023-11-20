import { useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const ScrollToAnchor = ({ location }) => {
  useEffect(() => {
    const element = document.getElementById(location.hash);

    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop : 0,
      });
    }, 100);
  }, [location]);

  return null;
};

ScrollToAnchor.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
  }).isRequired,
};

export default withRouter(ScrollToAnchor);
