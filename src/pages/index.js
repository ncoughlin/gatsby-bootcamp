import React from "react";
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <div>
      <h1>Nick Coughlin</h1>
      <h2>
        Nisl nisi scelerisque eu ultrices vitae auctor eu. Massa tincidunt nunc
        pulvinar sapien et ligula ullamcorper malesuada. Tellus in hac habitasse
        platea dictumst vestibulum rhoncus est. Blandit volutpat maecenas
        volutpat blandit aliquam etiam erat. Netus et malesuada fames ac.
        Egestas maecenas pharetra convallis posuere.
      </h2>
      <div>
        <Link to="/about">About Me</Link>
      </div>
      <div>
        <Link to="/contact">Contact Me</Link>
      </div>
      <div>
        <Link to="/blog">My Blog</Link>
      </div>
    </div>
  )
}

export default IndexPage
