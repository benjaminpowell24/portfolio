import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PersonFillIcon } from '@primer/octicons-react'
import { menuItems, socials } from '../menu'
import Hamburger from './Hamburger'

const Navbar = () => {
  return (
    <nav className='bg-black'>
      <div className='container mx-auto h-20 grid content-between'>
        <div className='flex'>
          <PersonFillIcon size={24} />
          <p className='text-lg'>Benjamin Powell</p>
        </div>
        <div className='columns-2'>
          <div className='flex justify-start'>
            <ul className='hidden md:flex space-x-4'>
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className='flex items-center hover:text-cyan-500'
                  >
                    {item.icon}
                    <span className='px-2'>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className='flex md:hidden'>
              <Hamburger />
            </div>
          </div>
          <div className='flex justify-end'>
            <ul className='flex space-x-4'>
              {socials.map((social) => (
                <li key={social.name} className='text-white'>
                  <a href='' className='flex items-center hover:text-cyan-500'>
                    <FontAwesomeIcon icon={social.icon} size='lg' />
                    <span className='hidden md:inline px-2'>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
