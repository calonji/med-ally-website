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
    <Layout>
      <SEO
        title="MedAlly FAQ | Clinical AI Platform Questions"
        description="Answers about MedAlly clinical AI platform workflows, AI clinical documentation, decision support, EHR integration, and HIPAA-aware physician review."
        url="https://www.medally.ai/faq"
        image="/images/medally/clinical-workflow-real.png"
        imageAlt="MedAlly clinical AI platform FAQ and workflow review"
        keywords={['clinical AI platform FAQ', 'physician AI assistant', 'AI clinical documentation', 'EHR workflow integration']}
        structuredData={structuredData}
      />
      <main className="medally-dark-page">
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
        <section className="relative bg-black py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqs.map((faq, index) => (
                <article key={faq.question} className="py-2">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-white"
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  >
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-teal-100 transition ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openIndex === index && <p className="pb-6 text-base leading-7 text-slate-300">{faq.answer}</p>}
                </article>
              ))}
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
