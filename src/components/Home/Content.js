import React from 'react'
import PropTypes from 'prop-types'

const Content = ({ children }) => (
    <main>
        {children}
    </main>
)

Content.propTypes = {
    childern: PropTypes.element.isRequired
}

export default Content