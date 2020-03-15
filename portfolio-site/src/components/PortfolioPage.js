import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioPage = () => (
  <div>
    <h3>My projects:</h3>
    <Link to="/portfolio/1">Item 1</Link>
    <Link to="/portfolio/2">Item 2</Link>
    <Link to="/portfolio/3">Item 3</Link>
</div>
)

export default PortfolioPage