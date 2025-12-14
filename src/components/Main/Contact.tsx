'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    if (formData.message.trim().length < 100) {
      setErrorMessage('Come on, you can do better than that! 😅 Please provide more details in your message (at least 100 characters).')
      return
    }

    try {
      const formDataObj = new FormData()
      formDataObj.append('access_key', '0f6aa2f9-b87d-46fa-9377-17aa8699eee6')
      formDataObj.append('name', formData.name)
      formDataObj.append('email', formData.email)
      formDataObj.append('message', formData.message)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj
      })

      const data = await response.json();

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        console.error('Form submission error:', data)
        setStatus('error')
        setErrorMessage(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
      setErrorMessage('An error occurred. Please try again.')
    }
  }

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <h2 className='text-3xl font-bold mb-2'>Ping Me</h2>
      <p className='text-muted-foreground mb-8'>
        Have a question or want to work together? Feel free to reach out!
      </p>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label htmlFor='name' className='block text-sm font-medium mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background'
            placeholder='Your name'
          />
        </div>

        <div>
          <label htmlFor='email' className='block text-sm font-medium mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background'
            placeholder='email@example.com'
          />
        </div>

        <div>
          <label htmlFor='message' className='block text-sm font-medium mb-2'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none'
            placeholder='Your message...'
          />
        </div>

        <div className='h-captcha' data-captcha='true'></div>

        <Button
          type='submit'
          disabled={status === 'loading'}
          className='w-full'
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </Button>

        {status === 'success' && (
          <div className='p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-300'>
            Message sent successfully! I&apos;ll get back to you soon.
          </div>
        )}

        {status === 'error' && (
          <div className='p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-300'>
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  )
}

export default Contact
