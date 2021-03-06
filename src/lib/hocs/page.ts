import withRedux from "next-redux-wrapper";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { withContext } from "recompose";
import "../pageEvents";
import configureStore from "../redux/store";
import withData from "./withData";
import withDynamicSipProvider from "./withDynamicSipProvider";
import withI18next from "./withI18next";
import withMuiThemeProvider from "./withMuiThemeProvider";

// tslint:disable-next-line:no-var-requires
require("../../styles/index.css");

export default (i18nextNamespaces = ["common"]) =>
  compose(
    withData,
    withRedux(configureStore),
    withI18next(i18nextNamespaces),
    withMuiThemeProvider,
    withContext(
      { conferencePhoneNumber: PropTypes.string },
      ({ conferencePhoneNumber }) => ({ conferencePhoneNumber }),
    ),
    withDynamicSipProvider,
  );
