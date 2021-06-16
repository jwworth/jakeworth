import PropTypes from 'prop-types'
import React from 'react'

const Project = props => {
  const {
    description,
    image,
    lessonsLearned,
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
      {stack && (
        <p>
          <strong>Stack:</strong> {stack}
        </p>
      )}
      {repo && (
        <p>
          <strong>Code:</strong> <a href={repo}>GitHub</a>
        </p>
      )}
      <p>
        <strong>Live:</strong> <a href={link}>View site</a>
      </p>
      <p>
        <a
          className="img-link"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="img-link" src={image} alt={title} />
        </a>
      </p>
      {purpose && (
        <p>
          <strong>Purpose and Goal:</strong> {purpose}
        </p>
      )}
      {stackExplanation && (
        <p>
          <strong>Stack Explanation:</strong> {stackExplanation}
        </p>
      )}
      {lessonsLearned && (
        <p>
          <strong>Lessons Learned:</strong> {lessonsLearned}
        </p>
      )}
    </li>
  )
}

Project.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  lessonsLearned: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  repo: PropTypes.string,
  stack: PropTypes.string.isRequired,
  stackExplanation: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Project
