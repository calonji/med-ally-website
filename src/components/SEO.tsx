import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  schema?: object;
}

export const SEO = ({
  title = 'MedAlly - AI-Powered Lab Encounters & Clinical Documentation System',
  description = 'Advanced SOAP note generation with comprehensive lab encounters management. Features differential diagnosis, evidence-based treatment planning, and clinical decision support. Transform your medical practice with AI-powered documentation.',
  keywords = [
    // Lab Encounters System
    'lab encounters system',
    'test result interpretation',
    'lab test prioritization',
    'STAT lab management',
    'test urgency classification',
    'patient preparation protocols',
    'lab result tracking',

    // SOAP Documentation
    'SOAP note generation',
    'chief complaint analysis',
    'clinical findings documentation',
    'treatment plan generation',
    'structured medical documentation',
    'real-time documentation',
    'clinical narrative generation',

    // Diagnostic Capabilities
    'differential diagnosis management',
    'diagnostic criteria validation',
    'risk factor analysis',
    'clinical findings tracking',
    'evidence-based diagnosis',
    'diagnostic ranking system',
    'diagnostic confidence scoring',

    // Treatment Planning
    'phase-based treatment protocols',
    'treatment escalation management',
    'implementation steps tracking',
    'treatment evaluation criteria',
    'treatment progress monitoring',
    'care plan optimization',
    'treatment outcome tracking',

    // Clinical Guidelines
    'evidence-based recommendations',
    'clinical practice guidelines',
    'treatment protocols',
    'guideline compliance tracking',
    'evidence level assessment',
    'clinical standard adherence',
    'best practice implementation',

    // Diagnostic Testing
    'prioritized test recommendations',
    'test urgency classification',
    'patient preparation instructions',
    'contraindications tracking',
    'clinical implications analysis',
    'test result interpretation',
    'diagnostic testing workflow',

    // Clinical Assessment
    'risk assessment tools',
    'patient monitoring parameters',
    'clinical metrics tracking',
    'chief complaint analysis',
    'clinical assessment automation',
    'patient status tracking',
    'clinical progress monitoring',

    // Medication Management
    'medication profile management',
    'dosage calculations',
    'drug interaction checking',
    'contraindication alerts',
    'alternative medication suggestions',
    'medication monitoring',
    'prescription management',

    // Safety Features
    'contraindication warnings',
    'drug interaction alerts',
    'special population considerations',
    'risk factor analysis',
    'treatment safety monitoring',
    'clinical safety alerts',
    'patient safety protocols',

    // Documentation & Audit
    'comprehensive clinical documentation',
    'audit trail capabilities',
    'treatment rationale documentation',
    'clinical decision support',
    'evidence documentation',
    'medical record tracking',
    'documentation compliance',
  ],
  image = '/og-image.jpg',
  url,
  type = 'website',
  author = 'MedAlly Team',
  publishedTime = new Date().toISOString(),
  schema,
}: SEOProps) => {
  const location = useLocation();
  const canonicalUrl = url || `https://medally.ai${location.pathname}`;
  const absoluteImageUrl = image.startsWith('http') ? image : `https://medally.ai${image}`;

  // Generate medical workflow schema
  const workflowSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    about: {
      '@type': 'MedicalProcedure',
      name: 'Clinical Documentation and Lab Encounters Workflow',
      steps: [
        'Lab Encounter Documentation',
        'SOAP Note Generation',
        'Diagnostic Analysis',
        'Treatment Planning',
        'Safety Verification',
      ],
      preparation: {
        '@type': 'MedicalEntity',
        name: 'Clinical Documentation Preparation',
        relevantSpecialty: ['GeneralPractice', 'InternalMedicine', 'EmergencyMedicine'],
      },
    },
    mainContentOfPage: {
      '@type': 'WebPageElement',
      isPartOf: {
        '@type': 'MedicalWebPage',
        specialty: 'Clinical Documentation',
      },
    },
  };

  // Generate software schema with medical specifics
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': ['SoftwareApplication', 'MedicalWebPage'],
    name: 'MedAlly',
    applicationCategory: 'HealthcareApplication',
    applicationSubCategory: 'Clinical Documentation System',
    description: description,
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      // Lab Encounters
      'Comprehensive Lab Encounters Management',
      'Test Result Interpretation Support',
      'Lab Test Prioritization System',
      'STAT vs Routine Classification',

      // SOAP & Documentation
      'AI-Powered SOAP Note Generation',
      'Structured Clinical Documentation',
      'Real-time Documentation Support',

      // Diagnostics
      'Differential Diagnosis Management',
      'Evidence-based Diagnostic Support',
      'Risk Factor Analysis System',
      'Clinical Findings Correlation',

      // Treatment
      'Phase-based Treatment Planning',
      'Treatment Escalation Protocols',
      'Implementation Tracking System',
      'Outcome Monitoring Tools',

      // Clinical Guidelines
      'Evidence-based Protocol Integration',
      'Clinical Practice Standards',
      'Guideline Compliance Tracking',

      // Safety
      'Comprehensive Safety Alerts',
      'Drug Interaction Checking',
      'Contraindication Management',
      'Special Population Safeguards',
    ],
    keywords: keywords.join(', '),
    author: {
      '@type': 'Organization',
      name: 'MedAlly',
      url: canonicalUrl,
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Healthcare Providers',
    },
    category: 'Healthcare Software',
    applicationSuite: 'Clinical Documentation Suite',
    requirements: 'HIPAA Compliant, Web Browser',
    softwareHelp: {
      '@type': 'CreativeWork',
      abstract: 'Comprehensive clinical documentation and lab encounters management system',
    },
  };

  // Generate organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'MedicalOrganization'],
    name: 'MedAlly',
    url: 'https://medally.ai',
    logo: 'https://medally.ai/logo.png',
    sameAs: ['https://twitter.com/medally', 'https://www.linkedin.com/company/medally'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '',
      contactType: 'customer service',
      email: 'contact@medally.ai',
      areaServed: 'Worldwide',
      availableLanguage: 'English',
    },
    description:
      'Provider of AI-powered lab encounters and clinical documentation system with advanced SOAP generation, diagnostic support, and treatment planning',
    medicalSpecialty: ['GeneralPractice', 'InternalMedicine', 'EmergencyMedicine'],
    availableService: {
      '@type': 'MedicalProcedure',
      name: 'Clinical Documentation Services',
      howPerformed: 'AI-Assisted Documentation with Human Oversight',
    },
    knowsAbout: [
      'Lab Encounters Management',
      'SOAP Note Generation',
      'Diagnostic Support',
      'Treatment Planning',
      'Clinical Guidelines',
      'Medication Management',
      'Patient Safety',
      'Clinical Documentation',
      'Evidence-based Medicine',
      'Clinical Decision Support',
      'Healthcare Workflow Optimization',
      'Medical Documentation Standards',
    ],
  };

  // Generate FAQ schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does MedAlly improve clinical documentation efficiency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MedAlly uses AI to automate SOAP note generation, lab result interpretation, and clinical documentation, reducing documentation time while improving accuracy and completeness.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is MedAlly HIPAA compliant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, MedAlly is fully HIPAA compliant with secure data encryption, audit trails, and role-based access control to protect patient information.',
        },
      },
      {
        '@type': 'Question',
        name: 'What clinical specialties does MedAlly support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MedAlly supports various specialties including General Practice, Internal Medicine, Emergency Medicine, and more with specialty-specific templates and guidelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does MedAlly handle lab encounters?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MedAlly provides comprehensive lab encounter management with test prioritization, result interpretation, STAT handling, and automated documentation of findings.',
        },
      },
    ],
  };

  // Add more FAQs
  faqSchema.mainEntity.push(
    {
      '@type': 'Question',
      name: 'How does MedAlly ensure accuracy in clinical documentation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MedAlly combines AI-powered analysis with evidence-based guidelines and human oversight to ensure high accuracy. It validates against clinical standards, checks for completeness, and provides real-time feedback during documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MedAlly integrate with existing EHR systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, MedAlly offers seamless integration with major EHR systems, lab information systems, and pharmacy systems while maintaining HIPAA compliance and data security.',
      },
    },
    {
      '@type': 'Question',
      name: 'What safety features does MedAlly include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MedAlly includes comprehensive safety features such as drug interaction checking, contraindication alerts, risk factor analysis, and special population considerations to ensure patient safety.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MedAlly improve workflow efficiency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MedAlly streamlines clinical workflows through AI-powered documentation, automated lab result interpretation, intelligent prioritization, and integrated clinical decision support, significantly reducing administrative burden.',
      },
    }
  );

  // Generate HowTo schema
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Use MedAlly for Clinical Documentation',
    description:
      'Step-by-step guide to using MedAlly for efficient clinical documentation and lab encounters management',
    totalTime: 'PT5M',
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Web Browser',
      },
    ],
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'MedAlly Account',
      },
    ],
    step: [
      {
        '@type': 'HowToStep',
        name: 'Voice Documentation',
        text: 'Speak naturally to document patient encounters while MedAlly converts speech to structured clinical notes',
        image: 'https://medally.ai/images/voice-documentation.jpg',
        url: 'https://medally.ai/features#voice-documentation',
      },
      {
        '@type': 'HowToStep',
        name: 'Lab Result Management',
        text: 'Review and interpret lab results with AI-powered analysis and automated documentation',
        image: 'https://medally.ai/images/lab-management.jpg',
        url: 'https://medally.ai/features#lab-management',
      },
      {
        '@type': 'HowToStep',
        name: 'Treatment Planning',
        text: 'Create evidence-based treatment plans with integrated clinical guidelines and decision support',
        image: 'https://medally.ai/images/treatment-planning.jpg',
        url: 'https://medally.ai/features#treatment-planning',
      },
    ],
  };

  // Add medical benefits schema
  const medicalBenefitsSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    about: {
      '@type': 'MedicalBenefits',
      name: 'Clinical Documentation Benefits',
      benefitsHighlight: [
        'Reduced Documentation Time',
        'Improved Clinical Accuracy',
        'Enhanced Patient Safety',
        'Better Compliance',
        'Streamlined Workflows',
        'Evidence-Based Support',
      ],
      clinicalEvidence: {
        '@type': 'MedicalEvidence',
        evidenceLevel: 'High',
        evidenceOrigin: 'Clinical Studies',
        relevantMetrics: [
          'Documentation Time Reduction',
          'Error Rate Reduction',
          'Compliance Rate',
          'User Satisfaction',
        ],
      },
    },
  };

  // Generate medical condition schema
  const medicalConditionSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    about: {
      '@type': 'MedicalCondition',
      name: 'Clinical Documentation and Lab Management',
      relevantSpecialty: [
        {
          '@type': 'MedicalSpecialty',
          name: 'General Practice',
        },
        {
          '@type': 'MedicalSpecialty',
          name: 'Internal Medicine',
        },
        {
          '@type': 'MedicalSpecialty',
          name: 'Emergency Medicine',
        },
      ],
      guideline: {
        '@type': 'MedicalGuideline',
        evidenceLevel: 'Evidence-Based',
        guidelineDate: new Date().toISOString(),
      },
    },
    mainContentOfPage: {
      '@type': 'WebPageElement',
      about: {
        '@type': 'MedicalProcedure',
        name: 'Clinical Documentation Process',
        howPerformed: 'AI-Assisted with Human Oversight',
      },
    },
  };

  // Generate medical technology schema
  const medicalTechnologySchema = {
    '@context': 'https://schema.org',
    '@type': ['MedicalWebPage', 'TechArticle'],
    about: {
      '@type': 'MedicalTechnology',
      name: 'AI-Powered Clinical Documentation Technology',
      description:
        'Advanced natural language processing and machine learning technology for medical documentation',
      relevantSpecialty: ['Clinical Informatics', 'Healthcare IT'],
      study: {
        '@type': 'MedicalStudy',
        studyType: 'Observational',
        healthCondition: 'Clinical Documentation Burden',
        outcome: 'Significant reduction in documentation time and improved accuracy',
      },
    },
    technicalFeatures: [
      'Natural Language Processing',
      'Voice Recognition',
      'Machine Learning',
      'Clinical Decision Support',
      'Real-time Analysis',
    ],
  };

  // Generate testimonials schema
  const testimonialsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Review',
        reviewBody:
          'MedAlly has transformed our clinical documentation process, saving hours each day while improving accuracy.',
        author: {
          '@type': 'Person',
          jobTitle: 'Primary Care Physician',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
      {
        '@type': 'Review',
        reviewBody:
          'The lab encounters management system has streamlined our workflow and improved patient care.',
        author: {
          '@type': 'Person',
          jobTitle: 'Lab Director',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
    ],
  };

  // Generate local business schema for USA
  const localBusinessUSASchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalOrganization'],
    name: 'MedAlly USA',
    description:
      'AI-powered clinical documentation and lab encounters system for US healthcare providers',
    url: 'https://medally.ai/us',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
      addressCountry: 'US',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'CA',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'US Healthcare Solutions',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'US Clinical Documentation',
          description: 'HIPAA-compliant documentation system following US healthcare standards',
        },
        {
          '@type': 'OfferCatalog',
          name: 'US Lab Integration',
          description: 'Integration with major US laboratory systems and EHRs',
        },
      ],
    },
    compliantWith: ['HIPAA', 'HITECH Act', 'US FDA Guidelines', 'Joint Commission Standards'],
  };

  // Generate local business schema for India
  const localBusinessIndiaSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalOrganization'],
    name: 'MedAlly India',
    description:
      'AI-powered clinical documentation and lab encounters system for Indian healthcare providers',
    url: 'https://medally.ai/in',
    areaServed: {
      '@type': 'Country',
      name: 'India',
      addressCountry: 'IN',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Indian Healthcare Solutions',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Indian Clinical Documentation',
          description: 'Documentation system following Indian healthcare standards and practices',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Indian Lab Integration',
          description:
            'Integration with Indian laboratory systems and hospital management software',
        },
      ],
    },
    compliantWith: [
      'Indian Medical Council Guidelines',
      'Digital Information Security in Healthcare Act',
      'Indian Clinical Establishment Act',
      'NABH Standards',
    ],
  };

  return (
    <Helmet>
      {/* Basic */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-type" content="Healthcare Software" />

      {/* Healthcare Specific */}
      <meta name="healthcare-system-type" content="Clinical Documentation & Lab Encounters" />
      <meta name="medical-specialty" content="All Specialties" />
      <meta name="hipaa-compliant" content="yes" />
      <meta name="evidence-based" content="yes" />

      {/* Additional Medical Meta Tags */}
      <meta name="medical-evidence-level" content="Evidence-Based Medicine" />
      <meta name="clinical-workflow" content="AI-Assisted Documentation, Human Oversight" />
      <meta name="medical-data-security" content="HIPAA, SOC 2, Encryption" />
      <meta name="medical-integration" content="EHR Systems, Lab Information Systems" />
      <meta name="clinical-validation" content="Peer-Reviewed, Evidence-Based" />
      <meta
        name="medical-specialties"
        content="General Practice, Internal Medicine, Emergency Medicine"
      />
      <meta name="documentation-standards" content="SOAP, Clinical Guidelines, Best Practices" />
      <meta name="patient-safety" content="Drug Interactions, Contraindications, Risk Assessment" />
      <meta name="clinical-efficiency" content="Time Reduction, Accuracy Improvement" />
      <meta name="medical-compliance" content="HIPAA, Clinical Standards, Audit Trails" />
      <meta name="healthcare-ai" content="Natural Language Processing, Clinical Decision Support" />
      <meta name="medical-workflow" content="Lab Encounters, Documentation, Treatment Planning" />

      {/* Core Features */}
      <meta
        name="lab-encounters"
        content="Test Management, Result Interpretation, Urgency Classification"
      />
      <meta name="soap-features" content="AI-Generated Notes, Clinical Findings, Treatment Plans" />
      <meta
        name="diagnostic-capabilities"
        content="Differential Diagnosis, Evidence-based Analysis, Risk Assessment"
      />
      <meta
        name="treatment-features"
        content="Phase-based Planning, Escalation Management, Outcome Tracking"
      />
      <meta
        name="clinical-guidelines"
        content="Evidence-based Protocols, Compliance Tracking, Best Practices"
      />
      <meta
        name="safety-features"
        content="Contraindication Alerts, Drug Interactions, Risk Analysis"
      />
      <meta
        name="documentation-features"
        content="Comprehensive Records, Audit Trails, Decision Support"
      />

      {/* Integration & Compliance */}
      <meta name="integration-capabilities" content="EHR Systems, Lab Systems, Pharmacy Systems" />
      <meta name="security-compliance" content="HIPAA, SOC 2" />
      <meta
        name="clinical-standards"
        content="Evidence-based Medicine, Best Practices, Clinical Guidelines"
      />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="MedAlly" />
      <meta property="article:published_time" content={publishedTime} />
      <meta property="article:author" content={author} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@medally" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:creator" content="@medally" />

      {/* Additional SEO */}
      <meta name="googlebot" content="index, follow" />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href={canonicalUrl} />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="MedAlly Blog RSS Feed"
        href="https://medally.ai/blog/feed.xml"
      />

      {/* PWA */}
      <meta name="application-name" content="MedAlly" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="MedAlly" />
      <meta name="format-detection" content="telephone=no" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(workflowSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(medicalConditionSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(medicalBenefitsSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(medicalTechnologySchema)}</script>
      <script type="application/ld+json">{JSON.stringify(testimonialsSchema)}</script>
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}

      {/* Local SEO Meta Tags - USA */}
      <meta name="geo.region" content="US" />
      <meta name="geo.position" content="37.09024;-95.712891" />
      <meta name="ICBM" content="37.09024, -95.712891" />
      <meta name="healthcare-region-us" content="US Healthcare System Compliant" />
      <meta name="medical-standards-us" content="HIPAA, HITECH, FDA Guidelines" />
      <meta name="ehr-integration-us" content="Major US EHR Systems Compatible" />
      <meta
        name="us-healthcare-features"
        content="US Clinical Guidelines, Medicare/Medicaid Support"
      />
      <meta name="us-compliance" content="Joint Commission Standards, US Healthcare Regulations" />

      {/* Local SEO Meta Tags - India */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.position" content="20.593684;78.96288" />
      <meta name="ICBM" content="20.593684, 78.96288" />
      <meta name="healthcare-region-in" content="Indian Healthcare System Compliant" />
      <meta name="medical-standards-in" content="NABH, Indian Medical Council Guidelines" />
      <meta name="ehr-integration-in" content="Indian HMS and Lab Systems Compatible" />
      <meta
        name="in-healthcare-features"
        content="Indian Clinical Guidelines, Ayushman Bharat Support"
      />
      <meta name="in-compliance" content="Indian Clinical Establishment Act, DISHA Compliant" />

      {/* Language Support Meta Tags */}
      <meta name="language-support" content="English, Hindi, Regional Indian Languages" />
      <meta name="localization" content="US and Indian Healthcare Terminology" />
      <meta name="regional-support" content="US and India Healthcare Systems" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(localBusinessUSASchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessIndiaSchema)}</script>
    </Helmet>
  );
};
