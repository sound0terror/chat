import React from 'react';
import config from '../../../config';
import no_avatar from '../../../assets/images/no_avatar.gif';

const ProductThumbnail = props => {
    let image = no_avatar;

    if (props.avatar) {
        image = config.apiURL + '/uploads/' + props.avatar;
    }
    return  <img className='rounded-circle user_img' src={image} alt={props.title}/>
};

export default ProductThumbnail;
