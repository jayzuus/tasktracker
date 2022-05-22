
import PropTypes from 'prop-types'

export const Header = (props) => {
  return (
    <header>
        <h1>
            {props.title}
        </h1>
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
export default Header
