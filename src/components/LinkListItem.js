import React from 'react'

const LinkListItem = ({ displayName, href }) => (
  <li>
    <a href={href} rel="noopener noreferrer" target="_blank">
      {displayName}
    </a>
  </li>
)

export default LinkListItem
