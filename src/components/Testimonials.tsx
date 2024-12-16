// src/components/Testimonials.tsx
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      name: 'Dr. Smith',
      quote: '“Med Ally has revolutionized our workflow—notes in seconds!”'
    },
    {
      name: 'Nurse Johnson',
      quote: '“I have more patient time now that paperwork is automated.”'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t, idx) => (
            <Card key={idx} className="p-6">
              <div className="flex mb-4">
                <div className="h-16 w-16 bg-zinc-200 mr-4 flex items-center justify-center text-zinc-500">
                  [ Image ]
                </div>
                <div className="flex flex-col justify-center">
                  <CardHeader className="p-0">
                    <CardTitle className="text-zinc-800 text-lg">{t.name}</CardTitle>
                  </CardHeader>
                </div>
              </div>
              <CardContent>
                <p className="text-zinc-700 italic">{t.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
