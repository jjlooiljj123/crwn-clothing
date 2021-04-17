import React, { Component } from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../collections-overview/collections-overview.component";
import collectionPage from "../../pages/collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={collectionPage} />
  </div>
);

export default ShopPage;
