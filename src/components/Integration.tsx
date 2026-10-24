import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon3D } from "@/components/ui/medical-icons";

interface IntegrationStep {
  iconName: string;
  title: string;
  description: string;
  color: string;
}

const Integration: React.FC = () => {
  const integrations = [
    {
      name: "Epic",
      logo: "/assets/img/integrations/epic-logo.svg",
      description: "Seamless integration with Epic EHR systems",
      features: ["Real-time sync", "Single sign-on", "Custom workflows"],
      status: "Certified Partner",
      color: "blue"
    },
    {
      name: "Cerner",
      logo: "/assets/img/integrations/cerner-logo.svg",
      description: "Full compatibility with Cerner Millennium",
      features: ["Bi-directional data flow", "HL7 FHIR support", "Automated mapping"],
      status: "Certified Partner",
      color: "green"
    },
    {
      name: "Allscripts",
      logo: "/assets/img/integrations/allscripts-logo.svg",
      description: "Complete integration with Allscripts platforms",
      features: ["API integration", "Custom templates", "Workflow automation"],
      status: "Certified Partner",
      color: "purple"
    }
  ];

  const steps: IntegrationStep[] = [
    {
      iconName: "DNA",
      title: "Map",
      description: "Automated data mapping and validation",
      color: "blue"
    },
    {
      iconName: "Integration",
      title: "Connect",
      description: "Secure connection to your EHR system",
      color: "green"
    },
    {
      iconName: "Analytics",
      title: "Sync",
      description: "Real-time bidirectional synchronization",
      color: "purple"
    }
  ];

  const standards = [
    "HL7 FHIR",
    "SMART on FHIR",
    "HIPAA Compliant",
    "SOC 2 Type II",
    "HITECH Act",
    "ISO 27001"
  ];

  return (
    <section id="integration" className=" bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#3182CE,transparent_70%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_30%,#4F46E5,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless EHR Integration
            </h2>
            <p className="text-xl text-gray-600">
              MedAlly works with your existing systems, providing a smooth transition 
              and enhanced workflow without disruption
            </p>
          </motion.div>
        </div>

        {/* Workflow Steps */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 -translate-y-1/2 hidden md:block" />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <Card className="relative bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <Icon3D 
                        icon={step.iconName}
                        color={step.color}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Step Number */}
                <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full bg-${step.color}-500 text-white flex items-center justify-center font-bold shadow-lg`}>
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integration Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <img 
                      src={integration.logo} 
                      alt={`${integration.name} logo`}
                      className="h-8"
                    />
                    <Badge variant="secondary" className={`bg-${integration.color}-100 text-${integration.color}-800`}>
                      {integration.status}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {integration.description}
                  </p>

                  <ul className="space-y-3">
                    {integration.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.8, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.2
                          }}
                          className={`w-2 h-2 rounded-full bg-${integration.color}-500 mr-2`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Standards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Compliance & Standards
            </h3>
            <p className="text-gray-600">
              We maintain the highest level of security and compliance standards
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge
                  variant="secondary"
                  className="bg-blue-50 text-blue-700 text-sm px-4 py-2"
                >
                  {standard}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Request Integration Details
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Integration; 