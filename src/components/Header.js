
import PropTypes from 'prop-types'

import { Button } from './button'
export const Header = ({ title }) => {

const onClick = () => {
    console.log('click')
    }

  return (
    <header className = 'header'>
        <h1> {title} </h1>
        { /* button styling which is in index.css */ }
        <Button color = 'green' text= 'Add' onClick = {onClick}/>
    </header>
  )
}

//default value for the title variable when outputting Header
Header.defaultProps = {
    title: 'Task Tracker',

}
//makes sure the title is in string format
Header.propTypes = {
    title:PropTypes.string.isRequired,
}

//some styling stuff, this would go inside
/* <header>
        <h1 style = {headingStyle}>
            {title}
        </h1>
    </header> */
// const headingStyle = {
//     color: 'red', backgroundColor:'black'
// }
// export default Header
