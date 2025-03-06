// @ts-nocheck
import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FileText, 
  Clipboard, 
  Beaker, 
  Activity, 
  Stethoscope, 
  BarChart2, 
  BookOpen, 
  Briefcase, 
  Pill, 
  Heart, 
  Shield, 
  Brain, 
  Zap, 
  Users, 
  MessageCircle, 
  DollarSign 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AIAgent {
  id: string;
  name: string;
  icon: JSX.Element;
  description: string;
  sizzle: string;
  benefits: string[];
  color: string;
  statistic?: string;
  impact?: string;
  integration?: string;
}

const AIAgents: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  const agents: AIAgent[] = [
    {
      id: 'scribe',
      name: 'MedAlly ScribeAI',
      icon: <FileText className="w-6 h-6" />,
      description: 'Multilingual AI Scribe & Predictive Clinical Notes',
      sizzle: 'Instantly converts conversations into structured SOAP notes in 50+ languages. Faster than dictation. Smarter than templates.',
      benefits: [
        'Autonomous clinical documentation',
        'Reduces physician workload by 80%',
        'Understands medical jargon & accents with near-human accuracy'
      ],
      color: 'blue',
      statistic: '2 hrs saved per day',
      impact: 'Documentation time reduced by 80%'
    },
    {
      id: 'docflow',
      name: 'MedAlly DocFlow',
      icon: <Clipboard className="w-6 h-6" />,
      description: 'AI-Optimized Clinical Documentation',
      sizzle: 'Pre-fills and auto-structures H&P, SOAP, discharge summaries, and consult notes with 20+ compliance-ready templates.',
      benefits: [
        'Real-time AI structuring for consistency',
        'Meets regulatory standards effortlessly',
        'Turns tedious paperwork into a one-click workflow'
      ],
      color: 'indigo',
      statistic: '99.8% compliance rate',
      integration: 'Works with all major EMRs'
    },
    {
      id: 'labintel',
      name: 'MedAlly LabIntel',
      icon: <Beaker className="w-6 h-6" />,
      description: 'Lab Follow-Up & Predictive Results Analysis',
      sizzle: 'Auto-flags critical lab values, predicts patient risks, and generates instant structured reports.',
      benefits: [
        'Detects abnormal results & risk factors automatically',
        'Reduces delays in follow-ups & treatments',
        'Brings lab intelligence directly into physician workflows'
      ],
      color: 'purple',
      statistic: '98.7% detection rate',
      impact: 'Critical findings flagged 3x faster'
    },
    {
      id: 'diagnostix',
      name: 'MedAlly Diagnostix',
      icon: <Activity className="w-6 h-6" />,
      description: 'Predictive Differential Diagnosis & Clinical Ranking',
      sizzle: 'A disease-ranking AI engine with 93% accuracy that flags overlooked conditions, offering physicians instant, AI-backed differential diagnoses.',
      benefits: [
        'AI-powered triage for faster decision-making',
        'Ensures rare diseases aren\'t missed',
        'Reduces misdiagnosis rates dramatically'
      ],
      color: 'red',
      statistic: '93% diagnostic accuracy',
      impact: 'Reduces misdiagnosis by 47%'
    },
    {
      id: 'testguide',
      name: 'MedAlly TestGuide',
      icon: <Stethoscope className="w-6 h-6" />,
      description: 'Diagnostic Plan & Prioritized Testing',
      sizzle: 'Recommends the most effective diagnostic tests while reducing unnecessary procedures.',
      benefits: [
        'Optimized test selection for efficiency & accuracy',
        'Cuts down on redundant diagnostics',
        'Improves healthcare affordability'
      ],
      color: 'green',
      statistic: '32% fewer unnecessary tests',
      impact: 'Saves $1,240 per patient annually'
    },
    {
      id: 'insight',
      name: 'MedAlly Insight',
      icon: <BarChart2 className="w-6 h-6" />,
      description: 'AI-Powered Findings & Lab Interpretation',
      sizzle: 'Provides AI-powered insights that explain, predict, and prioritize findings from lab results.',
      benefits: [
        'AI-driven pattern recognition for lab trends',
        'Simplifies complex lab interpretation',
        'Integrates directly into patient notes'
      ],
      color: 'cyan',
      statistic: '87% faster interpretation',
      integration: 'Compatible with all lab systems'
    },
    {
      id: 'carepath',
      name: 'MedAlly CarePath',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Predictive Clinical Guidelines',
      sizzle: 'Evidence-based, AI-powered treatment recommendations personalized for each patient in real-time.',
      benefits: [
        'AI-driven care pathways for optimal outcomes',
        'Updated with the latest medical guidelines',
        'Reduces treatment variability across providers'
      ],
      color: 'amber',
      statistic: 'Updated with 200+ guidelines',
      impact: 'Improves outcomes by 28%'
    },
    {
      id: 'treatwise',
      name: 'MedAlly TreatWise',
      icon: <Briefcase className="w-6 h-6" />,
      description: 'Predictive Treatment Implementation',
      sizzle: 'Guides physicians step by step to implement evidence-based care plans with AI assistance.',
      benefits: [
        'Dynamic AI-driven adjustments',
        'Ensures treatment adherence',
        'Improves patient outcomes with predictive guidance'
      ],
      color: 'orange',
      statistic: '41% better adherence',
      impact: 'Reduces readmissions by 36%'
    },
    {
      id: 'rxgen',
      name: 'MedAlly RxGen',
      icon: <Pill className="w-6 h-6" />,
      description: 'AI-Powered Medications & Dosage Optimization',
      sizzle: 'Optimizes prescriptions by minimizing drug interactions and tailoring doses to individual patients.',
      benefits: [
        'Real-time AI checks for contraindications',
        'Reduces adverse drug reactions',
        'Optimizes pharmacotherapy for better safety'
      ],
      color: 'rose',
      statistic: '94% fewer adverse reactions',
      impact: 'Prevents 1,200+ interactions daily'
    },
    {
      id: 'pulse',
      name: 'MedAlly Pulse',
      icon: <Heart className="w-6 h-6" />,
      description: 'Predictive Patient Monitoring & Trend Analysis',
      sizzle: 'AI-powered early warning system that flags health deterioration before it escalates.',
      benefits: [
        'Monitors chronic conditions proactively',
        'Predicts complications in real-time',
        'Reduces hospital readmissions'
      ],
      color: 'pink',
      statistic: 'Predicts events 72 hrs earlier',
      impact: 'Reduces ICU admissions by 38%'
    },
    {
      id: 'shield',
      name: 'MedAlly Shield',
      icon: <Shield className="w-6 h-6" />,
      description: 'AI-Driven Emergency Contingency Planning',
      sizzle: 'AI anticipates emergency scenarios and suggests risk-adjusted treatment plans for high-risk patients.',
      benefits: [
        'AI-powered triage for rapid intervention',
        'Emergency action plans tailored for individual risks',
        'Enhances preparedness for critical cases'
      ],
      color: 'emerald',
      statistic: '4.2 min faster response time',
      impact: 'Improves survival rates by 26%'
    },
    {
      id: 'intellicare',
      name: 'MedAlly IntelliCare',
      icon: <Brain className="w-6 h-6" />,
      description: 'AI-Driven Clinical Recommendations',
      sizzle: 'AI-generated treatment insights that evolve with real-world data, ensuring evidence-based patient care.',
      benefits: [
        'Continuous AI learning for precision medicine',
        'Adapts to new research instantly',
        'Improves decision-making with real-time updates'
      ],
      color: 'violet',
      statistic: 'Learns from 1M+ cases daily',
      integration: 'Self-improving AI model'
    },
    {
      id: 'neurolearn',
      name: 'MedAlly NeuroLearn',
      icon: <Zap className="w-6 h-6" />,
      description: 'AI-Powered Clinical Pattern Recognition',
      sizzle: 'AI that learns from past diagnoses to continuously improve accuracy—like a self-improving medical genius.',
      benefits: [
        'Predicts patterns in complex cases',
        'Refines differential diagnoses over time',
        'Helps physicians stay ahead of emerging trends'
      ],
      color: 'yellow',
      statistic: '22% more accurate each month',
      impact: 'Identifies 340+ rare conditions'
    },
    {
      id: 'specialtysync',
      name: 'MedAlly SpecialtySync',
      icon: <Users className="w-6 h-6" />,
      description: 'Custom AI for Medical Specialties',
      sizzle: 'AI-powered insights tailored for 20+ specialties, from cardiology to dermatology.',
      benefits: [
        'Specialty-specific AI recommendations',
        'Custom-built workflows for niche fields',
        'Seamlessly integrates with specialty EMRs'
      ],
      color: 'teal',
      statistic: 'Supports 24 specialties',
      integration: 'Specialty-specific workflows'
    },
    {
      id: 'commsai',
      name: 'MedAlly CommsAI',
      icon: <MessageCircle className="w-6 h-6" />,
      description: 'Adaptive AI Communication',
      sizzle: 'AI fine-tunes documentation tone & complexity for physicians, insurers, and patients.',
      benefits: [
        'Simplifies medical jargon for patients',
        'Enhances clarity in insurance documentation',
        'Ensures legal & compliance-friendly phrasing'
      ],
      color: 'sky',
      statistic: 'Supports 50+ languages',
      impact: 'Improves patient comprehension by 64%'
    },
    {
      id: 'codex',
      name: 'MedAlly Codex',
      icon: <DollarSign className="w-6 h-6" />,
      description: 'AI-Powered Medical Coding & Billing',
      sizzle: 'AI-driven ICD-10/11, CPT, HCPCS coding ensures error-free billing & maximizes revenue.',
      benefits: [
        'Cuts coding errors by 80%',
        'Accelerates claims processing',
        'Boosts provider reimbursements'
      ],
      color: 'lime',
      statistic: '99.7% coding accuracy',
      impact: 'Increases revenue by 14%'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
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

  // Color mapping for Tailwind classes
  const getColorClass = (color: string, type: 'bg' | 'text' | 'border' | 'from' | 'to' | 'ring') => {
    return `${type}-${color}-${type === 'text' ? '600' : type === 'bg' ? '100' : type === 'from' ? '500' : type === 'to' ? '600' : '400'}`;
  };

  // Function to render the footer content based on available data
  const renderFooterContent = (agent: AIAgent) => {
    if (agent.statistic && agent.impact) {
      return (
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium">📊</span>
            <span className="text-xs">{agent.statistic}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium">💥</span>
            <span className="text-xs">{agent.impact}</span>
          </div>
        </div>
      );
    } else if (agent.statistic && agent.integration) {
      return (
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium">📊</span>
            <span className="text-xs">{agent.statistic}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium">🔄</span>
            <span className="text-xs">{agent.integration}</span>
          </div>
        </div>
      );
    } else if (agent.statistic) {
      return (
        <div className="flex items-center gap-1">
          <span className="text-xs font-medium">📊</span>
          <span className="text-xs">{agent.statistic}</span>
        </div>
      );
    }
    
    return (
      <span className={`text-xs ${getColorClass(agent.color, 'text')} font-medium`}>
        HIPAA Compliant
      </span>
    );
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50" ref={containerRef}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/5 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-[#36b7b5] to-[#4b2683] text-white px-4 py-1.5 text-sm font-medium">
            AI-POWERED HEALTHCARE
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#36b7b5] to-[#4b2683]">
            The AI-First Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            16 Intelligent AI Agents Transforming Healthcare
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600">
              Unlike traditional healthcare tools that tackle isolated problems, MedAlly seamlessly integrates 16 AI-driven agents, 
              offering an all-in-one AI-powered clinical assistant that eliminates inefficiencies, slashes administrative burdens, 
              and empowers physicians to deliver superior patient care.
            </p>
          </div>
        </div>

        <div 
          className="mb-16 bg-white rounded-xl p-6 shadow-md"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            What makes it revolutionary?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-blue-700">Hyper-automation</h4>
              <p className="text-gray-700">From documentation to diagnosis, AI drives every aspect of clinical workflows.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-purple-700">Predictive Intelligence</h4>
              <p className="text-gray-700">Anticipates physician needs and patient risks in real time.</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-emerald-700">Seamless Coordination</h4>
              <p className="text-gray-700">AI agents work in-sync, not in silos, creating unparalleled efficiency.</p>
            </div>
          </div>
        </div>

        <h3 
          className="text-2xl font-bold text-center mb-8"
        >
          Explore our comprehensive suite of AI agents:
        </h3>

        {/* AI Agents Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {agents.map((agent) => (
            <div
              key={agent.id}
              className={`rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl group border border-gray-100`}
            >
              <div className={`h-1.5 w-full ${getColorClass(agent.color, 'bg')}`}></div>
              <div className="p-5 bg-white h-full flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getColorClass(agent.color, 'bg')} group-hover:scale-110 transition-transform duration-300`}>
                    <span className={getColorClass(agent.color, 'text')}>{agent.icon}</span>
                  </div>
                  <div>
                    <h4 className={`text-base font-bold leading-tight group-hover:${getColorClass(agent.color, 'text')} transition-colors duration-300`}>{agent.name}</h4>
                    <p className="text-xs text-gray-600">{agent.description}</p>
                  </div>
                </div>
                
                <div className={`text-sm text-gray-700 mb-3 p-2.5 rounded-md ${getColorClass(agent.color, 'bg')} bg-opacity-20`}>
                  {agent.sizzle}
                </div>
                
                <div className="mt-auto">
                  <ul className="space-y-1.5">
                    {agent.benefits.map((benefit, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-1.5 text-xs transition-transform duration-300 ease-in-out"
                      >
                        <span className={`${getColorClass(agent.color, 'text')} mt-0.5 flex-shrink-0`}>✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                  {renderFooterContent(agent)}
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="text-center"
        >
          <p className="text-xl mb-8 max-w-3xl mx-auto font-medium">
            MedAlly's 16 AI agents work in perfect harmony, automating, optimizing, and accelerating clinical workflows like never before.
          </p>
          
          <div className="bg-gradient-to-r from-[#36b7b5] to-[#4b2683] text-white p-8 rounded-xl max-w-3xl mx-auto mb-10 shadow-lg">
            <p className="text-2xl font-bold flex items-center justify-center mb-2">
              Physicians are overburdened. MedAlly is the game-changer they've been waiting for.
            </p>
            <p className="text-lg opacity-90">
              Reduce documentation time by 70% and focus on what matters most - your patients.
            </p>
          </div>
          
          <a 
            href="https://app.medally.ai/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-orange-500 hover:bg-orange-600 hover:text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Experience the AI Revolution
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIAgents; 