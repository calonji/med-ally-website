import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const ROICalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    patientsPerDay: 20,
    minutesPerNote: 15,
    daysPerWeek: 5,
    hourlyRate: 150,
  });

  const [showResults] = useState(true);

  const calculateROI = () => {
    const weeksPerYear = 48; // Accounting for vacation
    const timePerNote = formData.minutesPerNote;
    const savedTimePerNote = timePerNote * 0.7; // 70% time savings
    const totalPatientsPerYear = formData.patientsPerDay * formData.daysPerWeek * weeksPerYear;
    const totalHoursSavedPerYear = (savedTimePerNote * totalPatientsPerYear) / 60;
    const monetaryValue = totalHoursSavedPerYear * formData.hourlyRate;
    
    return {
      hoursSaved: Math.round(totalHoursSavedPerYear),
      moneySaved: Math.round(monetaryValue),
      patientsPerYear: totalPatientsPerYear,
      additionalPatientsCapacity: Math.round(totalHoursSavedPerYear * (60 / timePerNote)),
    };
  };

  const results = calculateROI();

  return (
    <section id="roi-calculator" className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Calculate Your ROI with MedAlly
            </h2>
            <p className="text-xl text-gray-600">
              See how much time and money you could save with our AI-powered solution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="patientsPerDay">Average Patients per Day</Label>
                  <Input
                    id="patientsPerDay"
                    type="number"
                    value={formData.patientsPerDay}
                    onChange={(e) => setFormData({
                      ...formData,
                      patientsPerDay: parseInt(e.target.value) || 0
                    })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="minutesPerNote">Minutes Spent per Note</Label>
                  <Input
                    id="minutesPerNote"
                    type="number"
                    value={formData.minutesPerNote}
                    onChange={(e) => setFormData({
                      ...formData,
                      minutesPerNote: parseInt(e.target.value) || 0
                    })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="daysPerWeek">Working Days per Week</Label>
                  <Input
                    id="daysPerWeek"
                    type="number"
                    value={formData.daysPerWeek}
                    onChange={(e) => setFormData({
                      ...formData,
                      daysPerWeek: parseInt(e.target.value) || 0
                    })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    value={formData.hourlyRate}
                    onChange={(e) => setFormData({
                      ...formData,
                      hourlyRate: parseInt(e.target.value) || 0
                    })}
                    className="mt-1"
                  />
                </div>

                {/* <Button 
                  onClick={() => setShowResults(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Calculate Savings
                </Button> */}
              </div>
            </Card>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: showResults ? 1 : 0, x: showResults ? 0 : 20 }}
              className="space-y-6"
            >
              <Card className="p-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <h3 className="text-2xl font-bold mb-4">Your Annual Savings</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-100">Hours Saved</p>
                    <p className="text-3xl font-bold">{results.hoursSaved} hours</p>
                  </div>
                  <div>
                    <p className="text-blue-100">Financial Impact</p>
                    <p className="text-3xl font-bold">${results.moneySaved.toLocaleString()}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Additional Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Capacity for {results.additionalPatientsCapacity} more patients annually
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Improved work-life balance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Enhanced patient care quality
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator; 