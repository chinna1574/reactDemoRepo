import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ heroName }) => {
    console.log('[Hero] rendered')
    //const { heroName } = props;

    let design = null;
    try {
        if (heroName === 'Joker') {
            throw new Error('Not a hero')
        }
        design = (
            <div>
                Hero Name: &nbsp;{heroName}
            </div>
        );
    }
    catch (e) {
        design = <span>{heroName} Not a hero</span>
    }
    return design;
}

Hero.propTypes = {
    heroName: PropTypes.string.isRequired
}

export default Hero

