import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';



const shopSelector = (state) => state.shop;


export const selectAllCollections = createSelector(
    [shopSelector],
    (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectAllCollections],
    collections => Object.keys(collections).map(key => collections[key])
  );

export const selectCollectionsForPreviewDetail = memoize( (collectionUrlParam) => 
    createSelector(
        [selectAllCollections],
        collections => collections[collectionUrlParam]
    )
)