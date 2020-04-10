import PropTypes from 'prop-types'
import React from 'react'

const Project = props => {
  const {
    description,
    image,
    link,
    purpose,
    repo,
    stack,
    stackExplanation,
    title,
  } = props
  return (
    <li>
      <p>
        <strong>{title}:</strong> {description}
      </p>
      <p>
        <strong>Stack:</strong> {stack}
      </p>
      <p>
        <strong>Code:</strong> <a href={repo}>Github</a>
      </p>
      <p>
        <strong>Live:</strong> <a href={link}>View site</a>
      </p>
      <img src={image} alt={title} />
      <p>
        <strong>Project Purpose and Goal:</strong> {purpose}
      </p>
      <p>
        <strong>Stack and Explanation:</strong> {stackExplanation}
      </p>
    </li>
  )
}

Project.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  stackExplanation: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Project
