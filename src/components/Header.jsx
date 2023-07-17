import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Image from "next/image";
import Logo from '../../public/images/logo.png'
import { useRouter } from 'next/router';


function MobileNavigation() {

  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': open,
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': !open,
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                <li>
                  <Link href="#features">
                    <a className="block w-full" onClick={() => close()}>
                      Features
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials">
                    <a className="block w-full" onClick={() => close()}>
                      Testimonials
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#pricing">
                    <a className="block w-full" onClick={() => close()}>
                      Pricing
                    </a>
                  </Link>
                </li>
                <li className="border-t border-slate-300/40 pt-4">
                  <Link href="/login">
                    <a className="block w-full">Sign in</a>
                  </Link>
                </li>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

export function Header(props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLink = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About Us",
      link: "/AboutUs"
    },
    {
      name: "Product",
      link: "/Product"
    },
    {
      name: "Contact Us",
      link: "/ContactUs"
    },
  ]

  const router = useRouter()

  return (
    <header className={`px-24 w-full fixed top-0 z-[999] duration-300 ${scrollPosition > 5 ? 'bg-white shadow-md' : ''} `}>
      <nav className="relative z-50 text-sm">
        <ul className="flex items-center">
          <li>
            <Link href="/">
              <div className='w-40 cursor-pointer'>
                <Image src={Logo} alt="fess manager logo" className='' />
              </div>
            </Link>
          </li>
          <div className='w-full flex justify-end items-center'>
            <div className='flex items-center space-x-7'>
              {
                NavLink.map(({ link, name }) => (
                  <Link
                    name={name}
                    key={name}
                    href={link}
                  >
                    <a className={`${router.pathname === link ? "text-[#b19777] border-x-2 px-2 border-[#b19777]" : "text-black"} font-semibold hover:text-[#b19777] text-[15px]`}>
                      {name}
                    </a>
                  </Link>
                ))
              }
            </div>
            <li className="ml-6 hidden md:block ">
              <Link href="/Quotation">
                <a className="btn1 font-semibold text-[12px] hover:text-white z-50 group text-lg py-1">
                  Get Quotation
                </a>
              </Link>
            </li>

          </div>
          <li className="ml-5 -mr-1 md:hidden">
            <MobileNavigation />
          </li>
        </ul>
      </nav>
    </header>
  )
}
