import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
    <div className="about">AboutPage</div>
    <p>React app to leave feedback for a product or a service.</p>
    <p>Version: 1.0.0</p>

    <p>
      <Link to='/'>Back To Home</Link>
    </p>
    </Card>
  )
}

export default AboutPage