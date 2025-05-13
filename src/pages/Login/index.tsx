'use client';

import { useState } from 'react';
import { Button } from '../../components/ui/Button/index';
import { Image } from '../../components/ui/Image';
import { Eye, EyeDown } from '../../components/ui/Svg';
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex min-h-screen'>
      {/* Left side - Login Form */}
      <div className='flex w-full items-center justify-center lg:w-1/2'>
        <div className='w-full max-w-md px-6'>
          <div className='mb-8 flex justify-center'>
            <div className='flex h-12 w-12 items-center justify-center rounded-md bg-black text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
                <circle cx='8.5' cy='8.5' r='1.5' />
                <path d='M20.4 14.5L16 10 4 20' />
              </svg>
            </div>
          </div>

          <h1 className='mb-10 text-center text-4xl font-bold'>Welcome back</h1>

          <div className='space-y-4'>
            <Button variant='white' className='flex w-full items-center justify-center gap-2 border border-gray-300 py-6'>
              <svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'>
                <path d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' fill='#4285F4' />
                <path d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' fill='#34A853' />
                <path d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z' fill='#FBBC05' />
                <path d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' fill='#EA4335' />
                <path d='M1 1h22v22H1z' fill='none' />
              </svg>
              Continue with Google
            </Button>

            <div className='flex gap-4'>
              <Button variant='white' className='flex w-1/2 items-center justify-center gap-2 border border-gray-300 py-6'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='#0077B5'>
                  <path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' />
                </svg>
                LinkedIn
              </Button>

              <Button variant='white' className='flex w-1/2 items-center justify-center gap-2 border border-gray-300 py-6'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12 2L2 7L12 12L22 7L12 2Z' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  <path d='M2 17L12 22L22 17' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  <path d='M2 12L12 17L22 12' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
                Autodesk
              </Button>
            </div>

            <div className='relative flex items-center py-2'>
              <div className='flex-grow border-t border-gray-300'></div>
              <span className='mx-4 flex-shrink text-gray-600'>or</span>
              <div className='flex-grow border-t border-gray-300'></div>
            </div>

            <div className='space-y-4'>
              <div>
                <input
                  type='email'
                  placeholder='Email'
                  className='w-full rounded-md border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  className='w-full rounded-md border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type='button' onClick={togglePasswordVisibility} className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500'>
                  {showPassword ? <Eye /> : <EyeDown />}
                </button>
              </div>

              <div className='text-right'>
                <a href='#' className='text-sm text-gray-700 hover:text-green-600'>
                  Forgot your password?
                </a>
              </div>

              <Button size='sm' rounded='xl' className='w-full bg-green-600 py-6 text-white hover:bg-green-700'>
                Sign in with email
              </Button>

              <p className='text-center text-sm text-gray-600'>
                Don't have an account?{' '}
                <a href='#' className='font-medium text-green-600 hover:text-green-700'>
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className='hidden lg:block lg:w-1/2'>
        <div className='h-full w-full'>
          <Image src='../../assets/image/cover.BvtZvoW8.png' alt='Modern building architecture' width={1000} height={1000} className='h-full w-full object-cover' />
        </div>
      </div>
    </div>
  );
}
