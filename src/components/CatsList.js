import React from 'react';
import PropTypes from 'prop-types';
import CatsItem from './CatsItem';

function CatsList(props) {
    return (
        <ul>
            { 
                props.data.map( (info, i) => {
                    return <CatsItem 
                                { ...info } 
                                key = { i } 
                            />
                }) 
            }
        </ul>    
    )
}

CatsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CatsList