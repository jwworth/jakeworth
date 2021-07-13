import React from 'react'

const Tags = ({ tags }) => {
  return (
    <ul
      style={{
        display: 'flex',
        listStyleType: 'none',
        margin: '0',
      }}
    >
      {tags.map(tagName => (
        <li
          key={tagName}
          style={{
            background: '#d1d5db',
            padding: '0.1rem 0.75rem',
            marginRight: '0.5rem',
            marginBottom: '0',
            borderRadius: '1rem',
            fontSize: '0.8rem',
          }}
        >
          {tagName}
        </li>
      ))}
    </ul>
  )
}

export default Tags
