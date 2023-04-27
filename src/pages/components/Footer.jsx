import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/Images/logo.png'
import { FaBasketballBall, FaBehanceSquare, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';


const Footer = () => {
    return (
        <>  
            <div className='container'>
                <div className="row QuickLinks my-5 ms-5 ">
                    <div className="col-md-3">
                        <Image src={logo} alt="logo" width={141} height={46} />
                    </div>
                    <div className="col-md-3 links">
                        <ul type='none' className='list'>
                            <li className='my-2'>
                                <Link href="/" className='text-decoration-none fw-bolder'>About</Link>
                            </li>
                            <li className='my-2'>
                                <Link href="/" className='text-decoration-none'>Home</Link>
                            </li>
                            <li className='my-2'>
                                <Link href="/" className='text-decoration-none'>About us</Link>
                            </li>
                            <li className='my-2'>
                                <Link href="/" className='text-decoration-none'>Services</Link>
                            </li>
                            <li className='my-2'>
                                <Link href="/" className='text-decoration-none'>Solutions</Link>
                            </li>

                        </ul>
                    </div>

                    <div className="col-md-3 links">

                        <ul type='none' className='list'>
                            <li className='my-2'>
                                <Link href="/" className='text-decoration-none fw-bolder'>Information</Link>
                            </li>
                            <li className='my-2'>
                                <Link href="/" className='text-decoration-none'>Contacts</Link>
                            </li>
                            <li className='my-2'>
                                <Link href="/" className='text-decoration-none'>Our team</Link>
                            </li>
                            <li className='my-2'>
                                <Link href="/" className='text-decoration-none'>Blog</Link>
                            </li>
                            <li className='my-2'>
                                <Link href="/" className='text-decoration-none'>FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 links">
                        <ul type='none' className='list'>
                            <li className='my-2'>
                                <Link href="/" className='text-decoration-none fw-bolder'>Services</Link>
                            </li>
                            <li className='my-2'>
                                <Link href="/" className='text-decoration-none'>Pages</Link>
                            </li>
                            <li className='my-2'>
                                <Link href="/" className='text-decoration-none'>Elements</Link>
                            </li>
                            <li className='my-2'>
                                <Link href="/" className='text-decoration-none'>Site map</Link>
                            </li>
                            <li className='my-2'>
                                <Link href="/" className='text-decoration-none'>Pricing</Link>
                            </li>
                            
                        </ul>
                        
                    </div>
                    <div className='border'></div>
                </div>
                <div className='row mt-5 ms-3'>
                    <div className='col-md-6'>
                        <ul type='none' className='list mt-5 '>
                            <h3>Contact</h3>

                            <div className='d-flex justify-content-between'>
                                <div className='d-flex flex-column contact-link'>
                                    <li className='my-2'>
                                        <Link href="/" className='text-decoration-none'>+1 601-201-5580</Link>
                                    </li>
                                    <li className='my-2'>
                                        <Link href="/" className='text-decoration-none fw-bolder'>ensome@info.co.us <AiOutlineArrowRight/></Link>
                                    </li>
                                </div>
                                <div className='d-flex flex-column '>
                                    <li className='my-2'>
                                        <Link href="/" className='text-decoration-none'>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</Link>
                                    </li>
                                    <li className='my-2'>
                                        <Link href="/" className='text-decoration-none fw-bolder'>Driving derections <AiOutlineArrowRight/></Link>
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className='col-md-6 mt-2 w-25 ms-3'>
                        <h3>Social</h3>
                        <div className='d-flex justify-content-between mt-5 ms-2 fs-3'>
                        <Link href="/"><FaFacebook/></Link>
                        <Link href="/"><FaBehanceSquare/></Link>
                        <Link href="/"><FaBasketballBall/></Link>
                        <Link href="/"><FaLinkedin/></Link>
                        <Link href="/"><FaTwitter/></Link>
                        <Link href="/"><FaYoutube/></Link>
                        </div>
                    </div>
                    <div className='border my-2'></div>
                </div>
                
            </div>
        </>
    )
}

export default Footer
