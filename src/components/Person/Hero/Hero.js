import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ heroName }) => {
    console.log('[Hero] rendered')
    //const { heroName } = props;

    if (heroName === 'Joker1') {
        throw new Error('Not a hero')
    }

    return (
        <div>
            Hero Name: &nbsp;{heroName}
        </div>
    );
}

Hero.propTypes = {
    heroName: PropTypes.string.isRequired
}

export default Hero

