// src/components/Signup.tsx
import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    organization: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Sign-up logic or API call
    alert('Sign-up successful!')
  }

  return (
    <section id="signup" className="py-20 bg-zinc-50">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Create Your Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="block mb-1 font-semibold">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password" className="block mb-1 font-semibold">
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="organization" className="block mb-1 font-semibold">
                  Organization (optional)
                </Label>
                <Input
                  type="text"
                  name="organization"
                  id="organization"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" variant="default" className="w-full">
                Sign Up
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Signup
