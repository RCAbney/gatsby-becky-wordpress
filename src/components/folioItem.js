import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const FolioItem = props => {
  return (
    <div className="col-md-3 col-sm-6">
      <Img
        alt={props.title}
        fluid={props.fluid}
        className="img-responsive folio-pic"
      />
      <div className="folio-item">
        <div className="folio-item-details">
          <h2 className="entry-title">
            <Link to={props.slug}>{props.title}</Link>
          </h2>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  )
}

export default FolioItem
