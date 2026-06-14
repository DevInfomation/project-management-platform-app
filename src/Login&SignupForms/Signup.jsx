import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { UsersRepository } from '../repositories/UsersRepository';
import { useNavigate } from 'react-router';

const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  const createUser = (e) => {
    e.preventDefault(); 

    if (!firstName || !lastName || !email || !mobileNumber || !password) {
      setError('Please fill out all the fields!');
      setTimeout(() => {
        setError('');
      }, 5000)

      return;
    }

    setError('');

    const createUserRequest = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobileNumber: mobileNumber,
      password: password,
    };

    UsersRepository.createUser(createUserRequest)
      .then(res => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000)
      })
      .catch(err => console.error(err));

      navigate('/main-board');
  };

  return (
    <main
      className="hero min-h-screen flex flex-col justify-center p-4 md:p-8"
      style={{
        backgroundImage:
          'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
      }}>
      <div className="w-full max-w-lg mx-auto sm:max-w-4xl bg-white p-6 rounded-lg border shadow-md">
        <div className="mb-12">
          {/* <a href="#"><img src="https://readymadeui.com/readymadeui.svg" alt="logo"
                  className="w-40 inline-block dark:invert dark:brightness-100" />
               </a> */}
          <h3 className="text-3xl font-bold">Sign up</h3>
          <p className="text-slate-600 text-base mt-6 dark:text-slate-400">
            Create your account and get started
          </p>
        </div>
        <form className="w-full">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fname"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-900">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="John" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-900"
              />
            </div>
            <div>
              <label
                htmlFor="lname"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-900">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Doe"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-900  "
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@readymadeui.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-900  "
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-900">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="123-456-7890"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-900  "
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-900">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-900  "
              />
            </div>
            <div></div>
            <div className="flex items-start flex-wrap gap-2">
              <label className="flex items-center group has-[input:checked]:text-slate-900">
                <input
                  id="tmc"
                  name="tmc"
                  type="checkbox"
                  required
                  className="sr-only"
                />
                {/* Custom box */}
                <span
                  className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 
                              bg-white 
                              group-has-[input:checked]:bg-blue-600
                              group-has-[input:checked]:outline-blue-600
                              group-focus-within:outline-2
                              group-focus-within:outline-blue-600"
                  aria-hidden="true">
                  {/* Checkmark */}
                  <svg
                    className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                    viewBox="0 0 12 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path d="M1 5l3 3 7-7" />
                  </svg>
                </span>
                <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                  I accept the
                </span>
              </label>

              <a
                href="#"
                className="ml-1 text-sm font-medium text-blue-700 dark:text-blue-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                Terms and Conditions
              </a>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              onClick={createUser}
              className="py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Create an account
            </button>
            {error && <p className='text-red-600 text-sm mt-2'>{error}</p>}
            {success && <p className='text-green-600 text-sm mt-2'>Account has been created!</p>}
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
