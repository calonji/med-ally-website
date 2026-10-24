// src/components/Testimonials.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  rating: number;
  specialty: string;
  image: string;
}

const Testimonials: FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Dr. Sarah Smith',
      title: 'Family Medicine Physician',
      quote: 'MedAlly saves me hours every day! The AI-powered documentation is incredibly accurate, and I can finally focus on my patients instead of paperwork.',
      rating: 5,
      specialty: 'Family Medicine',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: '2',
      name: 'Dr. Michael Patel',
      title: 'Cardiologist',
      quote: 'Finally, an AI-powered healthcare solution that actually works! MedAlly has transformed my practice with its predictive analytics and documentation capabilities.',
      rating: 5,
      specialty: 'Cardiology',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: '3',
      name: 'Dr. Jennifer Rodriguez',
      title: 'Pediatrician',
      quote: 'The clinical workflow automation is a game-changer. MedAlly has reduced my administrative burden by 70% and improved my work-life balance dramatically.',
      rating: 5,
      specialty: 'Pediatrics',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
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
            What Physicians Are Saying About MedAlly
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from healthcare professionals who have transformed their practices with our 
            AI-powered clinical assistant.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-10"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="relative">
                    <Quote className="w-8 h-8 text-blue-100 absolute -top-4 -left-2" />
                    <p className="text-gray-700 italic relative z-10">"{testimonial.quote}"</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {testimonial.specialty} • AI-powered healthcare
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 italic">
            Join thousands of physicians who have discovered the power of AI clinical assistants and 
            medical AI automation with MedAlly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
