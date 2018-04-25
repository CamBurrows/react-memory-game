import React from 'react';
import './ImageCards.css';

const ImageCard = (props) => (
    <div className="test" key={props.key} onClick = {()=> props.handleClick(props.id)}>
        <div className="img-container">
        <img alt={props.name} src={props.path} id={props.id}/>
        </div>
    </div>
)

export default ImageCard;