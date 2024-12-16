import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons' // example icon
import { Helmet } from 'react-helmet-async'

const LandingPage: React.FC = () => {
  return (
    <>
    <Helmet>
        <title>Med Ally - Professional Medical Solutions</title>
        <meta name="description" content="Empowering healthcare with modern technology solutions." />
        <meta property="og:title" content="Med Ally" />
        <meta property="og:description" content="Empowering healthcare with modern technology solutions." />
        <meta property="og:image" content="https://your-domain.com/og-image.png" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta name="twitter:card" content="summary_large_image" />
    </Helmet>


      <section className="relative min-h-screen flex flex-col items-center justify-center bg-white">
        {/* Example Apple-like fade-in animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="text-blue-500">Med Ally</span>
          </h1>
          <p className="text-lg mb-8">
            Your partner in cutting-edge medical solution
          </p>
          <FontAwesomeIcon icon={faStethoscope} size="3x" className="text-blue-500" />
        </motion.div>
      </section>
    </>
  )
}

export default LandingPage
