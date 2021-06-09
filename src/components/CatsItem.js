import React from 'react';
import PropTypes from 'prop-types';

function ToogleClick(e) {
    e.preventDefault();

    e.currentTarget.closest('li').classList.toggle('active');
    document.querySelectorAll('.more-btn').forEach(item => item.classList.toggle('disabled'));
}

function CatsItem({ description, image, name }) {
    return (
        <li>
            <figure>

                <img src={ image } alt={ name } />

                <figcaption>
                    <h5 className="cats-title">
                        { name }
                    </h5>
                    
                    <p className="cats-description">
                        { description }

                        <br />

                        <a href="#" className="hide-btn" onClick={ (e) => ToogleClick(e) }>
                            Hide
                        </a>
                    </p>

                    <a href="#" className="more-btn" onClick={ (e) => ToogleClick(e) }>
                        More info...
                    </a>
                </figcaption>

            </figure>
        </li>
    )
}

CatsItem.propTypes = {
    description: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired
}

export default CatsItem