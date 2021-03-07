import React from 'react';
import PlaceItem from './PlaceItem';
import Card from '../../shared/components/UI/Card/Card';

export default function PlaceList(props) {
  if (props.length === 0) {
    return (
      <div className='place-list'>
        <Card>
          <h2>No place found! Maybe create one</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul classNam='place-list'>
      {props.placeList.map((place) => (
        <PlaceItem key={place.id} place={place} />
      ))}
    </ul>
  );
}
