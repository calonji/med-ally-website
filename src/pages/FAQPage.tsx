import { type FC, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { AnswerBlock, PageHero, ParallaxImageBand } from '@/components/PagePrimitives';

const faqs = [
  {
    question: 'How does MedAlly fit into clinical workflows?',
    answer:
      'MedAlly fits into clinical workflows by capturing encounter context, drafting structured documentation, surfacing decision-support context, and preparing coding signals for physician review before chart completion.',
  },
  {
    question: 'Can MedAlly support clinical documentation and decision support?',
    answer:
      'Yes. MedAlly supports AI clinical documentation, SOAP note automation, differential and guideline context, treatment planning support, follow-up instructions, and medical coding automation from the same encounter context.',
  },
  {
    question: 'Is MedAlly a replacement for physician judgment?',
    answer:
      'No. MedAlly is a physician AI assistant that prepares reviewable documentation and clinical context. Clinicians remain responsible for reviewing, editing, approving, and applying professional judgment.',
  },
  {
    question: 'Does MedAlly support EHR workflow integration?',
    answer:
      'MedAlly is designed around EHR workflow integration and handoff patterns so documentation, clinical review, and coding context can move into the practice workflow after physician approval.',
  },
  {
    question: 'Is MedAlly HIPAA-aware?',
    answer:
      'MedAlly is designed for privacy-conscious, HIPAA-aware clinical workflows with reviewable outputs, access-control expectations, and healthcare data-handling practices aligned to customer agreements.',
  },
];

const FAQPage: FC = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const structuredData = [
    faqSchema,
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.medally.ai/' },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.medally.ai/faq' },
      ],
    },
  ];

  return (
    <Layout className="medally-dark-page">
      <SEO
        title="MedAlly FAQ | Clinical AI Platform Questions"
        description="Answers about MedAlly clinical AI platform workflows, AI clinical documentation, decision support, EHR integration, and HIPAA-aware physician review."
        url="https://www.medally.ai/faq"
        image="/images/medally/clinical-workflow-real.png"
        imageAlt="MedAlly clinical AI platform FAQ and workflow review"
        keywords={['clinical AI platform FAQ', 'physician AI assistant', 'AI clinical documentation', 'EHR workflow integration']}
        structuredData={structuredData}
      />
      <main className="flex-grow transition-colors duration-300">
        <PageHero
          eyebrow="FAQ"
          title="Questions physicians ask before adopting clinical AI"
          intro="Clear answers about MedAlly workflows, documentation, clinical decision support, EHR handoff, and physician control."
          image="/images/medally/clinical-workflow-real.png"
          imageAlt="MedAlly clinical AI workflow for physician FAQ"
        />
        <AnswerBlock
          question="What should teams know before evaluating MedAlly?"
          answer="MedAlly is positioned as a clinical AI platform for the whole encounter lifecycle. It is not limited to scribing, and it does not remove the physician review step."
        />
        <section className="relative bg-background border-b border-border py-20 sm:py-28 transition-colors duration-300">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={faq.question} className="rounded-2xl border border-border bg-background/80 overflow-hidden transition-all duration-300">
                    <button
                      type="button"
                      className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-foreground text-base sm:text-lg hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-editorial">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-teal-500' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out px-6 ${
                        isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      <div className="border-t border-border/50 pt-4">
                        <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <ParallaxImageBand
          eyebrow="Evaluation"
          title="Use the FAQ to align clinical, operational, and compliance questions"
          copy="MedAlly works best when physicians, operators, and practice leaders evaluate the full encounter workflow together."
          image="/images/medally/clinical-workflow-real.png"
          imageAlt="Clinical team evaluating MedAlly AI healthcare assistant workflow"
        />
      </main>
    </Layout>
  );
};

export default FAQPage;
