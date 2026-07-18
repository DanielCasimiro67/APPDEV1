import { useState } from 'react'

function App() {
  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
      
      {/* Headings for Full Name, Course, and Year */}
      <h1 style={{ color: '#2980b7', borderBottom: '2px solid #7f8c8d', paddingBottom: '10px' }}>
        Daniel B. Casimiro
      </h1>
      <h2 style={{ color: '#ffff' }}>Course and Year: BSIS-3</h2>
      
      <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #eee' }} />

      {/* Fun Fact Section using Paragraph */}
      <h3 style={{ color: '#2980b9' }}>Fun Fact</h3>
      <p style={{ textAlign: 'justify', color: '#ffff' }}>
        <strong>Did you know?</strong>  I love playing Card Games, especially <i><strong>Yu Gi Oh!</strong></i> and <i><strong>Uno</strong></i>. I find them to be a great way to relax and have fun with friends and family. Playing card games also helps improve strategic thinking and decision-making skills. Additionally, I enjoy learning about the history and rules of different card games from around the world. It's fascinating to see how these games have evolved over time and how they bring people together.
      </p>

      <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #eee' }} />

      {/* Reflective Paragraph Section (Strictly 5 sentences) */}
      <h3 style={{ color: '#2980b9' }}>Course Reflection</h3>
      <p style={{ textAlign: 'justify', color: '#ffff'  }}>
        So far I enjoy the lessons in Applications Development and Emerging Technologies.
        I have learned the critical importance of understanding setting up the development environment correctly.
        Understanding different commands in order to have a smooth workflow is essential for efficient development.
        Additionally, I have learned the importance of learning the background and history of what we are developing, 
        as it provides context and helps in making informed decisions.
      </p>

    </div>
  )
}

export default App