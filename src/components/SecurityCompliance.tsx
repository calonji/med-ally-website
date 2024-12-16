import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { MedicalIcons, FeatureIcons, Icon3D } from "@/components/ui/medical-icons";
import { cn } from "@/lib/utils";

const SecurityCompliance: React.FC = () => {
  const securityFeatures = [
    {
      icon: <FeatureIcons.Security className="w-8 h-8" />,
      title: "HIPAA Compliance",
      description: "Full HIPAA compliance with regular audits and certifications",
      features: [
        "BAA provided",
        "PHI encryption",
        "Access controls",
        "Audit trails"
      ],
      color: "blue",
      status: "Active"
    },
    {
      icon: <MedicalIcons.Lab className="w-8 h-8" />,
      title: "Data Encryption",
      description: "Enterprise-grade encryption for all data in transit and at rest",
      features: [
        "AES-256 encryption",
        "TLS 1.3 protocol",
        "End-to-end encryption",
        "Secure key management"
      ],
      color: "green",
      status: "Active"
    },
    {
      icon: <FeatureIcons.Security className="w-8 h-8" />,
      title: "Access Control",
      description: "Granular role-based access control and authentication",
      features: [
        "2FA/MFA support",
        "Role-based access",
        "SSO integration",
        "IP whitelisting"
      ],
      color: "purple",
      status: "Active"
    }
  ];

  const complianceBadges = [
    {
      title: "HIPAA",
      icon: "/assets/img/compliance/hipaa.svg",
      status: "Certified",
      lastAudit: "2024-01",
      color: "blue"
    },
    {
      title: "SOC 2 Type II",
      icon: "/assets/img/compliance/soc2.svg",
      status: "Compliant",
      lastAudit: "2023-12",
      color: "green"
    },
    {
      title: "ISO 27001",
      icon: "/assets/img/compliance/iso27001.svg",
      status: "Certified",
      lastAudit: "2023-11",
      color: "purple"
    }
  ];

  const SecurityPulse = ({ color = "green" }) => (
    <span className="relative flex h-3 w-3">
      <span className={cn(
        "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
        `bg-${color}-400`
      )} />
      <span className={cn(
        "relative inline-flex rounded-full h-3 w-3",
        `bg-${color}-500`
      )} />
    </span>
  );

  return (
    <section id="security" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#3182CE,transparent_70%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_30%,#4F46E5,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Security & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your data security is our top priority. MedAlly implements the highest 
            standards of security and compliance in healthcare technology.
          </p>
        </motion.div>

        {/* Compliance Badges */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {complianceBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative overflow-hidden">
                <div className={cn(
                  "absolute inset-0 opacity-5",
                  `bg-gradient-to-br from-${badge.color}-200 to-transparent`
                )} />
                
                <CardContent className="p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <img 
                      src={badge.icon} 
                      alt={`${badge.title} certification`}
                      className="h-12 w-12"
                    />
                    <div className="flex items-center space-x-2">
                      <SecurityPulse color={badge.color} />
                      <span className={`text-${badge.color}-600 text-sm font-medium`}>
                        {badge.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {badge.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600">
                    Last Audit: {badge.lastAudit}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <Icon3D 
                      icon={feature.icon}
                      color={feature.color}
                    />
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <SecurityPulse color={feature.color} />
                      <span className={`text-${feature.color}-600 text-sm font-medium`}>
                        {feature.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <svg className={`w-5 h-5 text-${feature.color}-500 mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Security Whitepaper CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="#security-whitepaper" 
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Download Security Whitepaper
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityCompliance; 