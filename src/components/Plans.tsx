// src/components/Plans.tsx
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Plans: React.FC = () => {
  const plansData = [
    {
      name: 'Basic',
      price: '$29',
      features: ['Single User', 'Basic AI Insights', 'Email Support']
    },
    {
      name: 'Professional',
      price: '$99',
      features: ['Up to 10 Users', 'Advanced AI Insights', 'Priority Support']
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      features: ['Unlimited Users', 'All Features', '24/7 Dedicated Support']
    }
  ]

  return (
    <section id="plans" className="py-20 bg-zinc-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-zinc-900 mb-8">Plans & Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plansData.map((plan, idx) => (
            <Card key={idx} className="hover:shadow-xl transition">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold mb-4">{plan.price}</div>
                <ul className="text-zinc-700 mb-6 space-y-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="leading-relaxed">• {feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="default">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans
