import { type FC, useState, useEffect, useCallback, useRef } from 'react';
import { motion, useInView, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BackgroundEffects } from "@/components/ui/background-effects";
import WaitlistDialog from "@/components/WaitlistDialog";
import { Button } from "@/components/ui/button";
import { 
  Clock, Users, DollarSign, TrendingUp, 
  PieChart as PieChartIcon, 
  LineChart as LineChartIcon, 
  BarChart as BarChartIcon, 
  ArrowUpDown,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from 'recharts';
import { type ROIFormData, type ROIMetrics } from '@/types';
import { 
  COLORS, formatCurrency, formatTime, formatPatients,
  tooltipStyle, chartTextStyle, ROI_CONSTANTS, calculateROI
} from '@/lib/roi-calculator';

// Enhanced color palette for Apple-style design
const APPLE_COLORS = ['#E5E7EB', '#34C759', '#007AFF', '#5E5CE6', '#FF9500', '#FF2D55'];

const ROICalculator: FC = () => {
  const calculatorRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(calculatorRef, { once: false, amount: 0.2 });
  const [activeMetric, setActiveMetric] = useState<number | null>(null);
  const [hoveredChart, setHoveredChart] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<ROIFormData>(ROI_CONSTANTS.DEFAULT_VALUES);

  const [metrics, setMetrics] = useState<ROIMetrics>({
    hoursSaved: 0,
    moneySaved: 0,
    patientsPerYear: 0,
    additionalPatientsCapacity: 0
  });

  // Animation values for the savings counter
  const countAnimation = useMotionValue(0);
  const roundedCount = useTransform(countAnimation, Math.round);

  // Use the centralized calculation function
  const computeROI = useCallback(() => {
    setMetrics(calculateROI(formData));
  }, [formData]);

  useEffect(() => {
    computeROI();
  }, [computeROI]);

  // Animate the savings counter when metrics change
  useEffect(() => {
    // Only animate if moneySaved is greater than 0 (initial load completed)
    if (metrics.moneySaved <= 0) return;
    
    countAnimation.set(0);
    const controls = {
      stop: () => {}
    };
    
    const animation = countAnimation.set(0);
    const animateCount = () => {
      let startTimestamp: number | null = null;
      const duration = 1500;
      const startValue = 0;
      const endValue = metrics.moneySaved;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const currentValue = startValue + (endValue - startValue) * easedProgress;
        
        countAnimation.set(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      const animationFrame = requestAnimationFrame(step);
      controls.stop = () => cancelAnimationFrame(animationFrame);
    };
    
    // Only run the animation once when the component first loads
    const hasAnimated = sessionStorage.getItem('roi_animation_played');
    if (!hasAnimated) {
      animateCount();
      sessionStorage.setItem('roi_animation_played', 'true');
    } else {
      // If already animated, just set to the final value
      countAnimation.set(metrics.moneySaved);
    }
    
    return () => {
      controls.stop();
    };
  }, [metrics.moneySaved, countAnimation]);
  
  // Easing function
  const easeOutQuad = (x: number): number => {
    return 1 - (1 - x) * (1 - x);
  };

  const metricCards = [
    { title: 'Hours Saved Per Year', value: metrics.hoursSaved, icon: <Clock className="w-6 h-6" />, color: 'blue', description: 'Time you can reinvest in patient care' },
    { title: 'Money Saved Per Year', value: formatCurrency(metrics.moneySaved), icon: <DollarSign className="w-6 h-6" />, color: 'green', description: 'Direct financial impact on your practice' },
    { title: 'Additional Patient Capacity', value: metrics.additionalPatientsCapacity, icon: <Users className="w-6 h-6" />, color: 'purple', description: 'Potential to grow your practice' },
    { title: 'Efficiency Increase', value: `${ROI_CONSTANTS.EFFICIENCY_INCREASE_PERCENTAGE * 100}%`, icon: <TrendingUp className="w-6 h-6" />, color: 'indigo', description: 'Boost in documentation workflow' }
  ];

  const yearlyMetrics = Array.from({ length: 5 }, (_, i) => ({
    year: `Year ${i + 1}`,
    savings: metrics.moneySaved * (i + 1)
  }));

  const pieData = [
    { name: 'Documentation Time', value: formData.minutesPerNote * (1 - ROI_CONSTANTS.TIME_SAVED_PERCENTAGE) },
    { name: 'Time Saved', value: formData.minutesPerNote * ROI_CONSTANTS.TIME_SAVED_PERCENTAGE }
  ];

  const patientGrowthData = Array.from({ length: 12 }, (_, i) => ({
    month: `Month ${i + 1}`,
    patients: Math.round(metrics.patientsPerYear / 12 * (1 + i * ROI_CONSTANTS.MONTHLY_GROWTH_RATE))
  }));

  const efficiencyData = [
    { name: 'Documentation', before: formData.minutesPerNote, after: formData.minutesPerNote * (1 - ROI_CONSTANTS.TIME_SAVED_PERCENTAGE) },
    { name: 'Patient Care', before: ROI_CONSTANTS.PATIENT_CARE.BEFORE, after: ROI_CONSTANTS.PATIENT_CARE.AFTER },
    { name: 'Follow-ups', before: ROI_CONSTANTS.FOLLOW_UPS.BEFORE, after: ROI_CONSTANTS.FOLLOW_UPS.AFTER }
  ];

  function handleInputChange(id: string, value: string): void {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const chartContainerVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      data-testid="roi-calculator" 
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
      ref={calculatorRef}
    >
      <BackgroundEffects variant="grid3d" />
      
      {/* Animated gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full filter blur-[80px] opacity-60 animate-float"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[30rem] h-[30rem] bg-gradient-to-r from-green-100/20 to-blue-100/20 rounded-full filter blur-[60px] opacity-50 animate-float-delayed"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-1.5 text-sm font-medium">
            ROI Calculator
          </Badge>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Calculate Your Savings with MedAlly
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how much time and money you could save with our AI-powered solution
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Animated Metrics Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {metricCards.map((metric, index) => (
              <motion.div
                key={metric.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 }
                }}
                onMouseEnter={() => setActiveMetric(index)}
                onMouseLeave={() => setActiveMetric(null)}
                className="apple-card p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${metric.color}-100 text-${metric.color}-500 mb-4`}>
                  {metric.icon}
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gray-900 flex items-center">
                    {index === 1 ? (
                      <span>{formatCurrency(metrics.moneySaved)}</span>
                    ) : (
                      metric.value
                    )}
                    {activeMetric === index && (
                      <motion.span 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="ml-2 text-blue-500"
                      >
                        <Sparkles className="w-5 h-5" />
                      </motion.span>
                    )}
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {metric.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {metric.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="p-6 bg-white shadow-lg rounded-2xl border-0 overflow-hidden">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span>Customize Your Calculation</span>
                  <Sparkles className="w-5 h-5 ml-2 text-amber-400" />
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
            </motion.div>

            {/* Charts */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  variants={chartContainerVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredChart('time')}
                  onMouseLeave={() => setHoveredChart(null)}
                >
                  <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-md rounded-xl border-0 overflow-hidden transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <PieChartIcon className="w-5 h-5 text-blue-500" />
                      <h4 className="text-sm font-bold text-gray-700">
                        Time Distribution
                      </h4>
                    </div>
                    <div className="h-[220px]">
                      <ResponsiveContainer>
                        <PieChart>
                          <Pie
                            data={pieData}
                            innerRadius={hoveredChart === 'time' ? 50 : 40}
                            outerRadius={hoveredChart === 'time' ? 80 : 70}
                            paddingAngle={5}
                            dataKey="value"
                            animationDuration={1000}
                            animationBegin={200}
                          >
                            {pieData.map((_, index) => (
                              <Cell key={index} fill={APPLE_COLORS[index + 1]} />
                            ))}
                          </Pie>
                          <Tooltip 
                            formatter={(value: string | number | Array<string | number>) => formatTime(Number(value))}
                            contentStyle={tooltipStyle}
                            labelStyle={{ fontSize: '10px', fontWeight: 600 }}
                          />
                          <Legend 
                            verticalAlign="bottom" 
                            height={36} 
                            iconType="circle"
                            iconSize={8}
                            formatter={(value) => <span className="text-xs font-medium">{value}</span>}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  variants={chartContainerVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredChart('savings')}
                  onMouseLeave={() => setHoveredChart(null)}
                >
                  <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-md rounded-xl border-0 overflow-hidden transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <LineChartIcon className="w-5 h-5 text-blue-500" />
                      <h4 className="text-sm font-bold text-gray-700">
                        5-Year Savings
                      </h4>
                    </div>
                    <div className="h-[220px]">
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
                            formatter={(value: string | number | Array<string | number>) => formatCurrency(Number(value))}
                            contentStyle={tooltipStyle}
                            labelStyle={{ fontSize: '10px', fontWeight: 600 }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="savings" 
                            stroke="#007AFF" 
                            strokeWidth={3}
                            dot={{ fill: '#007AFF', r: 4 }}
                            activeDot={{ r: 6, fill: '#007AFF', stroke: 'white', strokeWidth: 2 }}
                            animationDuration={1500}
                            animationBegin={300}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  variants={chartContainerVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredChart('patients')}
                  onMouseLeave={() => setHoveredChart(null)}
                >
                  <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-md rounded-xl border-0 overflow-hidden transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChartIcon className="w-5 h-5 text-purple-500" />
                      <h4 className="text-sm font-bold text-gray-700">
                        Patient Growth
                      </h4>
                    </div>
                    <div className="h-[220px]">
                      <ResponsiveContainer>
                        <BarChart data={patientGrowthData} barSize={hoveredChart === 'patients' ? 16 : 12}>
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
                            formatter={(value: string | number | Array<string | number>) => formatPatients(Number(value))}
                            contentStyle={tooltipStyle}
                            labelStyle={{ fontSize: '10px', fontWeight: 600 }}
                          />
                          <Bar 
                            dataKey="patients" 
                            fill="#5E5CE6" 
                            radius={[4, 4, 0, 0]}
                            animationDuration={1200}
                            animationBegin={400}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  variants={chartContainerVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredChart('efficiency')}
                  onMouseLeave={() => setHoveredChart(null)}
                >
                  <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-md rounded-xl border-0 overflow-hidden transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <ArrowUpDown className="w-5 h-5 text-indigo-500" />
                      <h4 className="text-sm font-bold text-gray-700">
                        Efficiency Comparison
                      </h4>
                    </div>
                    <div className="h-[220px]">
                      <ResponsiveContainer>
                        <BarChart data={efficiencyData} layout="vertical" barSize={hoveredChart === 'efficiency' ? 20 : 16}>
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
                            formatter={(value: string | number | Array<string | number>) => formatTime(Number(value))}
                            contentStyle={tooltipStyle}
                            labelStyle={{ fontSize: '10px', fontWeight: 600 }}
                          />
                          <Bar dataKey="before" name="Before" fill="#94A3B8" stackId="a" animationDuration={1000} animationBegin={500} />
                          <Bar dataKey="after" name="After" fill="#34C759" stackId="a" animationDuration={1000} animationBegin={800} />
                          <Legend 
                            verticalAlign="bottom" 
                            height={36} 
                            iconType="circle"
                            iconSize={8}
                            formatter={(value) => <span className="text-xs font-medium">{value}</span>}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="savings-amount hidden" data-testid="savings-amount">
        {metrics.moneySaved}
      </div>
    </section>
  );
};

export default ROICalculator; 