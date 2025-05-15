'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [communicationOptIn, setCommunicationOptIn] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex min-h-screen'>
      {/* Left side - Signup Form */}
      <div className='flex w-full items-center justify-center lg:w-1/2'>
        <div className='w-full max-w-md px-6'>
          <div className='mb-8 flex justify-center'>
            <div className='flex h-12 w-12 items-center justify-center'>
              <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <rect width='40' height='40' rx='4' fill='#0F2B16' />
                <path d='M25 20C25 22.7614 22.7614 25 20 25C17.2386 25 15 22.7614 15 20C15 17.2386 17.2386 15 20 15C22.7614 15 25 17.2386 25 20Z' fill='white' />
              </svg>
            </div>
          </div>

          <h1 className='mb-4 text-center text-3xl font-bold text-black'>Sign up for Bim.com</h1>
          <p className='mb-8 text-center text-gray-600'>Join the product information platform connecting the people who build and the products they build with.</p>

          <div className='space-y-4'>
            <Button variant='outline' className='flex h-12 w-full items-center justify-center gap-3 rounded-md border border-gray-200 py-3 shadow-sm hover:bg-gray-50'>
              <svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'>
                <path d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' fill='#4285F4' />
                <path d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' fill='#34A853' />
                <path d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z' fill='#FBBC05' />
                <path d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' fill='#EA4335' />
                <path d='M1 1h22v22H1z' fill='none' />
              </svg>
              Sign up with Google
            </Button>

            <div className='flex gap-4'>
              <Button variant='outline' className='flex h-12 w-1/2 items-center justify-center gap-2 rounded-md border border-gray-200 py-3 shadow-sm hover:bg-gray-50'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='#0077B5'>
                  <path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' />
                </svg>
                LinkedIn
              </Button>

              <Button variant='outline' className='flex h-12 w-1/2 items-center justify-center gap-2 rounded-md border border-gray-200 py-3 shadow-sm hover:bg-gray-50'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12 2L2 7L12 12L22 7L12 2Z' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  <path d='M2 17L12 22L22 17' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  <path d='M2 12L12 17L22 12' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
                Autodesk
              </Button>
            </div>

            <div className='relative flex items-center py-2'>
              <div className='flex-grow border-t border-gray-200'></div>
              <span className='mx-4 flex-shrink text-sm text-gray-500'>or</span>
              <div className='flex-grow border-t border-gray-200'></div>
            </div>

            <div className='space-y-4'>
              <div>
                <Input
                  type='email'
                  placeholder='Email'
                  className='h-12 rounded-md border-gray-200 px-4 py-3 focus:border-gray-300 focus:ring-0'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className='relative'>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  className='h-12 rounded-md border-gray-200 px-4 py-3 focus:border-gray-300 focus:ring-0'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type='button' onClick={togglePasswordVisibility} className='absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 text-gray-400'>
                  {showPassword ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
                </Button>
              </div>

              <div className='space-y-3'>
                <div className='flex items-start space-x-2'>
                  <Checkbox
                    id='terms'
                    checked={termsAgreed}
                    onCheckedChange={(checked) => setTermsAgreed(checked === true)}
                    className='mt-1 data-[state=checked]:border-[#7EB09B] data-[state=checked]:bg-[#7EB09B]'
                  />
                  <label htmlFor='terms' className='text-sm leading-tight text-gray-600'>
                    By continuing, you agree to Bim.com's{' '}
                    <a href='#' className='text-gray-900 underline'>
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href='#' className='text-gray-900 underline'>
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div className='flex items-start space-x-2'>
                  <Checkbox
                    id='communications'
                    checked={communicationOptIn}
                    onCheckedChange={(checked) => setCommunicationOptIn(checked === true)}
                    className='mt-1 data-[state=checked]:border-[#7EB09B] data-[state=checked]:bg-[#7EB09B]'
                  />
                  <label htmlFor='communications' className='text-sm leading-tight text-gray-600'>
                    Yes, I agree to receive communications about BIMobject's products and offerings (you can unsubscribe or modify your communication preferences at any time).
                  </label>
                </div>
              </div>

              <Button className='h-12 w-full rounded-md bg-[#7EB09B] py-3 font-medium text-white hover:bg-[#6A9A86]'>Create account</Button>

              <p className='text-center text-sm text-gray-600'>
                Already have an account?{' '}
                <Link href='/login' className='font-medium text-gray-900 hover:underline'>
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className='hidden lg:block lg:w-1/2'>
        <div className='h-full w-full'>
          <img src='/src/assets/image/cover.BvtZvoW8.png' alt='Modern building architecture' width={1000} height={1000} className='h-full w-full object-cover' />
        </div>
      </div>
    </div>
  );
}
