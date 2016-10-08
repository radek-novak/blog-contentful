import React, {PropTypes} from 'react'
import { Link } from 'react-router'
import {getFirstParagraphFromString} from '../../helpers'

const ArticleLink = ({bgImg = '', link, title, subtitle = '', body = ''}) =>(
  <article className="post" style={{backgroundImage: `url(${bgImg})`}}>
    <div className="post__inner">
      <h1 className="post__title"><Link to={link}>{title}</Link></h1>
      <p className="post__subtitle">{subtitle || getFirstParagraphFromString(body)}</p>
    </div>
  </article>
)

ArticleLink.propTypes = {
  bgImg: PropTypes.string,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  body: PropTypes.string,
}

export default ArticleLink
