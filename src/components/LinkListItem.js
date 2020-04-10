import React from 'react'
import PropTypes from 'prop-types'

const LinkListItem = ({ description, displayName, href }) => (
  <li>
    <a href={href} rel="noopener noreferrer" target="_blank">
      {displayName}
    </a>
    : {description}
  </li>
)

LinkListItem.propTypes = {
  displayName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default LinkListItem
