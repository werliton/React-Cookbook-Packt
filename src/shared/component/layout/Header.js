import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../images/logo.svg'

const Header = ({title, url}) => (
    <header className="App-header">
        <a href={url}>
            <img src={logo} className="App-logo" alt="logo" />
        </a>
        <h1 className="App-title">{title}</h1>
    </header>
)

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
}

export default Header