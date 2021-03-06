import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../shared/components/UI/Avatar/Avatar';
import Card from '../../shared/components/UI/Card/Card';

import './UserItem.css';

export default function UserItem(props) {
  const { id, name, image, places } = props.user;

  console.log(props);

  return (
    <li className='user-item'>
      <Card className='user-item__content'>
        <Link to={`/${id}/places`}>
          <div className='user-item__image'>
            <Avatar image={image} alt={name} />
          </div>
          <div className='user-item__info'>
            <h2>{name}</h2>
            <h3>
              {places} {places === 1 ? 'place' : 'places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}
