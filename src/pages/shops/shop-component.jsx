import React from "react";
import {Route} from "react-router-dom"
import CollectionOverview from '../../components/collections-overview/collection-overview'
import  CollectionPageDetail from "../collection/collection-component"


const ShopPage =({match}) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview}/>
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPageDetail}/>
  </div>
)




export default ShopPage;
