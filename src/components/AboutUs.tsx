// src/components/AboutUs.tsx
import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { Heart, Brain, Shield, Award, BookOpen, Users } from 'lucide-react';

const AboutUs: FC = () => {
  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Empathy for Physicians",
      description: "Understanding and addressing the daily challenges healthcare providers face",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Patient-Centric Innovation",
      description: "Developing features focused on improving patient outcomes",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Excellence Through Simplicity",
      description: "Creating intuitive solutions that seamlessly integrate into workflows",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Evidence-Based Medicine",
      description: "Adhering to highest clinical standards and latest medical guidelines",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security and Integrity",
      description: "Uncompromising commitment to HIPAA compliance and data security",
    }
  ];

  return (
    <section className="relative  overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <BackgroundEffects variant="mesh" />
      
      <div className="container relative z-10">
     

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="prose prose-base max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                At <span className="font-bold text-blue-600">Calonji Inc.</span>, we believe that the foundation of exceptional healthcare lies in empowering physicians to focus on what they do best—caring for their patients.
              </p>
              
              <div className="my-6 bg-gradient-to-r from-blue-500 to-purple-500 p-px rounded-lg">
                <q className="block text-xl font-semibold bg-white p-5 rounded-lg">
                  How can we help physicians spend more time with patients and less time on paperwork?
                </q>
              </div>

              <p className="text-gray-600">
                We heard from <span className="font-semibold text-purple-600">countless physicians</span> about the growing burden of documentation, the endless hours spent charting after clinic hours, and the overwhelming administrative tasks that pulled them away from their patients. Burnout wasn't just a statistic—it was a reality.
              </p>

              <div className="my-6 border-l-4 border-blue-500 pl-6">
                <p className="text-lg font-semibold text-blue-800">
                  We knew there had to be a better way.
                </p>
              </div>

              <p className="text-gray-600">
                With a vision to transform the healthcare experience, <span className="font-bold text-blue-600">MedAlly</span> was born. Combining cutting-edge AI technology with deep clinical insights, we built a platform designed to simplify, streamline, and enhance the physician's workflow.
              </p>

              <p className="text-gray-600 font-semibold my-6">
                From automating documentation to improving diagnostics and follow-ups, MedAlly became more than a tool—it became a trusted ally in healthcare.
              </p>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                <p className="text-lg font-semibold text-gray-800">
                  MedAlly isn't just a platform—it's a partner in the future of healthcare. We're proud of how far we've come, and we're excited to continue innovating to meet the needs of healthcare providers around the world.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Mission, Vision & Values */}
          <div className="space-y-8">
            {/* Mission & Vision Cards */}
            <div className="space-y-4">
              {[
                {
                  title: "Our Mission",
                  icon: <Award className="w-10 h-10" />,
                  content: "To empower healthcare providers with intuitive, AI-powered tools that save time, enhance diagnostics, and enable better patient care."
                },
                {
                  title: "Our Vision",
                  icon: <Brain className="w-10 h-10" />,
                  content: "To revolutionize healthcare by creating a world where physicians can focus entirely on their patients, free from administrative burdens."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-2 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-500">
                    <div className="flex items-start gap-4">
                      <div className="text-blue-600 bg-blue-50 p-2 rounded-xl">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Core Values */}
            <div>
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Our Core Values
                </h3>
                <p className="text-base text-gray-600">
                  The principles that guide us in revolutionizing healthcare
                </p>
              </motion.div>

              <div className="space-y-3">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="group"
                  >
                    <Card className="p-2 bg-white shadow hover:shadow-md transition-all duration-300 border-l-4 border-l-blue-500">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="text-blue-600">
                            {value.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-0.5">
                            {value.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
