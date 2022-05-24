import React from 'react'


import PropTypes from 'prop-types'
export const Button = ({color, text, onClick}) => {

  /*onClick will run the function onClick in header.js */
  return (
    <button onClick={onClick} style = {{ backgroundColor: color}}
    className ='btn'> 
        {text} 
    </button>
  )
}

//default values if nothing is passed into button component
Button.defaultProps = {
  color:'steelblue',
}

//the type these variables must be
Button.propTypes = {
  text: PropTypes.string,
  color:PropTypes.string,
  onClock:PropTypes.func,
}
