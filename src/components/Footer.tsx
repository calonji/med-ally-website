import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Med Ally. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
