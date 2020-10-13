import React from 'react';
import {connect } from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreviewDetail} from "../../redux/shop/shop.selector"
import CollectionItem from '../../components/collections-items/collection-item-component';
import "./collection-style.scss"

const CollectionPageDetail = ({collection}) => {

    const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state , ownProps) =>createStructuredSelector({
    collection: selectCollectionsForPreviewDetail(ownProps.match.params.collectionId , state)
})


export default connect(mapStateToProps) (CollectionPageDetail);