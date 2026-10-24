import { FC } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ProblemSolution: FC = () => {
  const benefits = [
    {
      id: 'documentation',
      title: 'AI-driven clinical documentation',
      description: 'Reduces time spent on notes by 70%',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    {
      id: 'diagnostics',
      title: 'Predictive analytics',
      description: 'Improves diagnostic accuracy by 93%',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    {
      id: 'coding',
      title: 'Automated medical coding & billing',
      description: 'Optimizes revenue by 35%',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    {
      id: 'integration',
      title: 'Seamless EHR integration',
      description: 'Works with all major healthcare systems',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Say Goodbye to Physician Burnout & Documentation Overload
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="font-semibold">60% of physicians</span> cite administrative overload as a leading cause of burnout. 
            MedAlly automates workflows so doctors can focus on patients—not paperwork.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-20"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-red-600">The Problem</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <div>
                    <p className="font-medium">Overwhelming Documentation</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Physicians spend 2+ hours on paperwork for every hour with patients</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <div>
                    <p className="font-medium">Diagnostic Challenges</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Limited time leads to missed diagnoses and treatment delays</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <div>
                    <p className="font-medium">Revenue Leakage</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Coding errors and missed billing opportunities cost practices millions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <div>
                    <p className="font-medium">Physician Burnout</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">42% of physicians report burnout, with administrative burden as the top cause</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur-lg opacity-20"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-emerald-600">The MedAlly Solution</h3>
              
              <ul className="space-y-6">
                {benefits.map((benefit) => (
                  <motion.li 
                    key={benefit.id}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * benefits.indexOf(benefit) }}
                  >
                    {benefit.icon}
                    <div>
                      <p className="font-medium">{benefit.title}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xl font-medium text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
            MedAlly is the AI-powered clinical assistant that transforms healthcare workflows, 
            giving physicians back the time they need for what matters most: patient care.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution; 