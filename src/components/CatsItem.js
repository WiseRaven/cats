import React from 'react';
import PropTypes from 'prop-types';


class CatsItem extends React.Component {
    constructor() {
        super();
        
        this.state = {
            isOpened: false, 
        }
    }

    handleOpenEvent = (e) => { 
        e.preventDefault();

        this.setState({ isOpened: true })
    }

    handleCloseEvent = (e) => {
        e.preventDefault();

        this.setState({ isOpened: false })
    }
    
    render() {
        const { description, image, name } = this.props;
        const { isOpened } = this.state;
     
        return (
            <li className = {
                    isOpened ? 'active' : ''
                }
            >
                <figure>

                    <img src={ image } alt={ name } />

                    <figcaption>
                        <h5 className="cats-title">
                            { name }
                        </h5>
                        
                        <p className="cats-description">
                            { description }

                            <br />

                            <a href="#" className="hide-btn" onClick={ this.handleCloseEvent }>
                                Hide
                            </a>
                        </p>

                        <a href="#" className="more-btn" onClick={ this.handleOpenEvent }>
                            More info...
                        </a>
                    </figcaption>

                </figure>
            </li>
        )
    }
}

CatsItem.propTypes = {
    description: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired
}

CatsItem.defaultProps = {
    description: 'Some text about cat', 
    name: 'Cats name'
};

export default CatsItem