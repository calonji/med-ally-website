import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "Large Hospital Network",
      specialty: "Multi-Specialty",
      metrics: {
        timeReduction: "73%",
        satisfactionIncrease: "92%",
        accuracyImprovement: "95%"
      },
      quote: "MedAlly transformed our documentation process. Our physicians now spend more time with patients and less time on paperwork.",
      author: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      tags: ["Hospital Network", "500+ Physicians", "EHR Integration"]
    },
    {
      title: "Private Practice Group",
      specialty: "Primary Care",
      metrics: {
        timeReduction: "68%",
        satisfactionIncrease: "89%",
        accuracyImprovement: "94%"
      },
      quote: "The diagnostic suggestions have been incredibly accurate, helping us catch conditions we might have otherwise missed.",
      author: "Dr. Michael Rodriguez",
      role: "Practice Owner",
      tags: ["Private Practice", "12 Physicians", "Voice-First"]
    },
    {
      title: "Urgent Care Centers",
      specialty: "Urgent Care",
      metrics: {
        timeReduction: "71%",
        satisfactionIncrease: "94%",
        accuracyImprovement: "96%"
      },
      quote: "In our fast-paced environment, MedAlly's real-time documentation and diagnostic support is a game-changer.",
      author: "Dr. Emily Thompson",
      role: "Medical Director",
      tags: ["Urgent Care", "30+ Locations", "High Volume"]
    }
  ];

  return (
    <section id="case-studies" className=" bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how healthcare providers are transforming patient care with MedAlly's AI-powered platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                    <p className="text-gray-600">{study.specialty}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {study.metrics.timeReduction}
                      </div>
                      <div className="text-sm text-gray-600">Time Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {study.metrics.satisfactionIncrease}
                      </div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {study.metrics.accuracyImprovement}
                      </div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-700">
                    "{study.quote}"
                  </blockquote>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      {study.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{study.author}</div>
                      <div className="text-sm text-gray-600">{study.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

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
            Schedule a Demo
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies; 