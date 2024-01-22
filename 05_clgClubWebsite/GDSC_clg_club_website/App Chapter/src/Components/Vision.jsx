import React from 'react'
import "./Vision.css"
const Vision = () => {
  return (
    <div className="vision container mx-auto p-8">
      <h1 className="text-3xl md:text-5xl font-semibold px-2 p-2 md:px-14 text-center pb-4">Vision and Mission</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision Points */}
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Vision</h2>
          <ul>
            <li className="mb-2">
              <b>1.</b> To provide students a lifelong platform to hone sought-after skills like webpage and poster design, MIS (Management Information System) development, and other vital competencies; so as to continue their exploration of demands arising in the market.
            </li>
            <li className="mb-2">
              <b>2.</b> Continuation of on-demand learning with an aim to provide service to clients from own campus; focusing extension beyond academics and industry.
            </li>
            <li className="mb-2">
              <b>3.</b> To help students understand industrial values through practical hands-on projects of technical
              domains.
            </li>
            <li className="mb-2">
              <b>4.</b> To enhance diverse skills of students with strong basic foundation through interactive and on-demand learning.
            </li>
            <li className="mb-2">
              <b>5.</b> To inculcate in students the significance of ethics, professionalism, and dynamic personality for better quality of life.
            </li>
          </ul>
        </div>

        {/* Mission Points */}
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Mission</h2>
          <ol>
            <li className="mb-2"><b>1.</b> To promote students' interest in entrepreneurship by attracting industrial proposals to meet global challenges.</li>
            <li className="mb-2"><b>2.</b> To empower students through organizational projects for better real-time learning and personal growth.</li>
            <li className='mb-2'><b>3.</b> Encourage a culture of innovation among students by providing a platform for creative problem- solving in response to industry challenges.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Vision