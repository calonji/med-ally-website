import { type FC, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { 
  Clock, Users, DollarSign, TrendingUp, 
  PieChart as PieChartIcon, 
  LineChart as LineChartIcon, 
  BarChart as BarChartIcon, 
  ArrowUpDown 
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { type ROIFormData, type ROIMetrics } from '@/types';
import { 
  COLORS, formatCurrency, formatTime, formatPatients,
  tooltipStyle, chartTextStyle 
} from '@/lib/roi-calculator';

const ROICalculator: FC = () => {
  const [formData, setFormData] = useState<ROIFormData>({
    patientsPerDay: 20,
    minutesPerNote: 15,
    daysPerWeek: 5,
    hourlyRate: 150,
  });

  const [metrics, setMetrics] = useState<ROIMetrics>({
    hoursSaved: 0,
    moneySaved: 0,
    patientsPerYear: 0,
    additionalPatientsCapacity: 0
  });

  const calculateROI = useCallback(() => {
    const weeksPerYear = 48;
    const timePerNote = formData.minutesPerNote;
    const savedTimePerNote = timePerNote * 0.7;
    const totalPatientsPerYear = formData.patientsPerDay * formData.daysPerWeek * weeksPerYear;
    const totalHoursSavedPerYear = (savedTimePerNote * totalPatientsPerYear) / 60;
    const monetaryValue = totalHoursSavedPerYear * formData.hourlyRate;
    
    setMetrics({
      hoursSaved: Math.round(totalHoursSavedPerYear),
      moneySaved: Math.round(monetaryValue),
      patientsPerYear: totalPatientsPerYear,
      additionalPatientsCapacity: Math.round(totalHoursSavedPerYear * (60 / timePerNote)),
    });
  }, [formData]);

  useEffect(() => {
    calculateROI();
  }, [calculateROI]);

  const metricCards = [
    { title: 'Hours Saved Per Year', value: metrics.hoursSaved, icon: <Clock />, color: 'blue' },
    { title: 'Money Saved Per Year', value: `$${metrics.moneySaved.toLocaleString()}`, icon: <DollarSign />, color: 'green' },
    { title: 'Additional Patient Capacity', value: metrics.additionalPatientsCapacity, icon: <Users />, color: 'purple' },
    { title: 'Efficiency Increase', value: '70%', icon: <TrendingUp />, color: 'indigo' }
  ];

  const yearlyMetrics = Array.from({ length: 5 }, (_, i) => ({
    year: `Year ${i + 1}`,
    savings: metrics.moneySaved * (i + 1)
  }));

  const pieData = [
    { name: 'Documentation Time', value: formData.minutesPerNote * 0.3 },
    { name: 'Time Saved', value: formData.minutesPerNote * 0.7 }
  ];

  const patientGrowthData = Array.from({ length: 12 }, (_, i) => ({
    month: `Month ${i + 1}`,
    patients: Math.round(metrics.patientsPerYear / 12 * (1 + i * 0.1))
  }));

  const efficiencyData = [
    { name: 'Documentation', before: formData.minutesPerNote, after: formData.minutesPerNote * 0.3 },
    { name: 'Patient Care', before: 30, after: 45 },
    { name: 'Follow-ups', before: 15, after: 10 }
  ];

  function handleInputChange(id: string, value: string): void {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  }

  return (
    <section data-testid="roi-calculator" className="relative py-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <BackgroundEffects variant="grid3d" />
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">
            ROI Calculator
          </Badge>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
            Calculate Your Savings with MedAlly
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            See how much time and money you could save with our AI-powered solution
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {metricCards.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-xl bg-gradient-to-br from-${metric.color}-50 to-white shadow-md hover:shadow-lg transition-all duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-${metric.color}-100 text-${metric.color}-500 mb-3`}>
                  {metric.icon}
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-gray-900">
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-gray-500">
                    {metric.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-4">
            <Card className="lg:col-span-2 p-4 bg-white shadow-md rounded-xl border-0">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Customize Your Calculation
              </h3>
              <div className="space-y-8">
                {[
                  { 
                    id: 'patientsPerDay',
                    label: 'Patients per Day',
                    min: 1,
                    max: 100,
                    step: 1,
                    format: (value: number) => `${value} patients`
                  },
                  { 
                    id: 'minutesPerNote',
                    label: 'Minutes per Note',
                    min: 1,
                    max: 60,
                    step: 1,
                    format: (value: number) => `${value} minutes`
                  },
                  { 
                    id: 'daysPerWeek',
                    label: 'Days per Week',
                    min: 1,
                    max: 7,
                    step: 1,
                    format: (value: number) => `${value} days`
                  },
                  { 
                    id: 'hourlyRate',
                    label: 'Hourly Rate ($)',
                    min: 1,
                    max: 1000,
                    step: 1,
                    format: (value: number) => `$${value.toLocaleString()}`
                  },
                ].map((field) => (
                  <div key={field.id} className="space-y-3">
                    <div className="flex justify-between items-baseline">
                      <Label className="text-sm font-medium text-gray-700">
                        {field.label}
                      </Label>
                      <span className="text-sm font-bold text-blue-600">
                        {field.format(formData[field.id as keyof ROIFormData])}
                      </span>
                    </div>
                    <div className="relative">
                      <Input
                        type="range"
                        min={field.min}
                        max={field.max}
                        step={field.step}
                        value={formData[field.id as keyof ROIFormData]}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        className="w-full accent-blue-600"
                      />
                      <div className="absolute -bottom-5 w-full flex justify-between text-xs text-gray-400">
                        <span>{field.format(field.min)}</span>
                        <span>{field.format(field.max)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-3 bg-white/90 backdrop-blur-sm shadow-sm rounded-lg border-0">
                  <div className="flex items-center gap-2 mb-2">
                    <PieChartIcon className="w-4 h-4 text-blue-500" />
                    <h4 className="text-xs font-bold text-gray-700">
                      Time Distribution
                    </h4>
                  </div>
                  <div className="h-[200px] md:h-[180px]">
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={pieData}
                          innerRadius={40}
                          outerRadius={70}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieData.map((_, index) => (
                            <Cell key={index} fill={COLORS[index]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={formatTime}
                          contentStyle={tooltipStyle}
                          labelStyle={{ fontSize: '10px', fontWeight: 600 }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                <Card className="p-3 bg-white/90 backdrop-blur-sm shadow-sm rounded-lg border-0">
                  <div className="flex items-center gap-2 mb-2">
                    <LineChartIcon className="w-4 h-4 text-blue-500" />
                    <h4 className="text-xs font-bold text-gray-700">
                      5-Year Savings
                    </h4>
                  </div>
                  <div className="h-[200px] md:h-[180px]">
                    <ResponsiveContainer>
                      <LineChart data={yearlyMetrics}>
                        <XAxis 
                          dataKey="year" 
                          tick={{ ...chartTextStyle }} 
                          axisLine={{ stroke: '#E5E7EB' }}
                          tickLine={{ stroke: '#E5E7EB' }}
                        />
                        <YAxis 
                          tick={{ ...chartTextStyle }}
                          tickFormatter={(value: number) => `$${(value/1000)}k`}
                          axisLine={{ stroke: '#E5E7EB' }}
                          tickLine={{ stroke: '#E5E7EB' }}
                          width={45}
                        />
                        <Tooltip 
                          formatter={formatCurrency}
                          contentStyle={tooltipStyle}
                          labelStyle={{ fontSize: '10px', fontWeight: 600 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="savings" 
                          stroke="#3B82F6" 
                          strokeWidth={2}
                          dot={{ fill: '#3B82F6', r: 3 }}
                          activeDot={{ r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                <Card className="p-3 bg-white/90 backdrop-blur-sm shadow-sm rounded-lg border-0">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChartIcon className="w-4 h-4 text-purple-500" />
                    <h4 className="text-xs font-bold text-gray-700">
                      Patient Growth
                    </h4>
                  </div>
                  <div className="h-[200px] md:h-[180px]">
                    <ResponsiveContainer>
                      <BarChart data={patientGrowthData} barSize={12}>
                        <XAxis 
                          dataKey="month" 
                          tick={{ ...chartTextStyle }}
                          axisLine={{ stroke: '#E5E7EB' }}
                          tickLine={{ stroke: '#E5E7EB' }}
                        />
                        <YAxis 
                          tick={{ ...chartTextStyle }}
                          axisLine={{ stroke: '#E5E7EB' }}
                          tickLine={{ stroke: '#E5E7EB' }}
                          width={35}
                        />
                        <Tooltip 
                          formatter={formatPatients}
                          contentStyle={tooltipStyle}
                          labelStyle={{ fontSize: '10px', fontWeight: 600 }}
                        />
                        <Bar 
                          dataKey="patients" 
                          fill="#8B5CF6" 
                          radius={[2, 2, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                <Card className="p-3 bg-white/90 backdrop-blur-sm shadow-sm rounded-lg border-0">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowUpDown className="w-4 h-4 text-indigo-500" />
                    <h4 className="text-xs font-bold text-gray-700">
                      Efficiency Comparison
                    </h4>
                  </div>
                  <div className="h-[200px] md:h-[180px]">
                    <ResponsiveContainer>
                      <BarChart data={efficiencyData} layout="vertical" barSize={16}>
                        <XAxis 
                          type="number" 
                          tick={{ ...chartTextStyle }}
                          axisLine={{ stroke: '#E5E7EB' }}
                          tickLine={{ stroke: '#E5E7EB' }}
                        />
                        <YAxis 
                          dataKey="name" 
                          type="category" 
                          tick={{ ...chartTextStyle }}
                          axisLine={{ stroke: '#E5E7EB' }}
                          tickLine={{ stroke: '#E5E7EB' }}
                          width={80}
                        />
                        <Tooltip 
                          formatter={formatTime}
                          contentStyle={tooltipStyle}
                          labelStyle={{ fontSize: '10px', fontWeight: 600 }}
                        />
                        <Bar dataKey="before" name="Before" fill="#94A3B8" stackId="a" />
                        <Bar dataKey="after" name="After" fill="#4F46E5" stackId="a" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="savings-amount" data-testid="savings-amount">
        {metrics.moneySaved}
      </div>
    </section>
  );
};

export default ROICalculator; 