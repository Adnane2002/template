import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import imageCard from '../../../public/Images/Perso.png'
import Image from 'next/image'

function Fifthpage() {
    return (
        <>
            <div className='container my-5'>
                <div className="col-md-12">
                    <div className='d-flex justify-content-around '>

                        <h3 className='trust-title'> Trusted by the best in the business</h3>
                        <div>
                            <button className='btn btn-trust'><AiOutlineArrowRight /></button>
                            <button className='btn btn-trust'><AiOutlineArrowLeft /></button>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-around '>
                    <div className='row g-5'>
                        <div className='col-md-6'>
                            <div className='cards-trust shadow'>
                                <Image className='image-card' src={imageCard} width={80} height={80} />
                                <p className='card-text'>“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” </p>
                                <p className='fw-bolder'>Alex Bern</p>
                                <p className='fw-lighter'>CEO by PixelPerfect</p>
                            </div>
                        </div>
                        <div className=' col-md-6'>
                            <div className='cards-trust shadow '>
                                <Image className='image-card' src={imageCard} width={80} height={80} />
                                <p>“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” </p>
                                <p className='fw-bolder'>Alex Bern</p>
                                <p className='fw-lighter'>CEO by PixelPerfect</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-primary text-center p-5'>
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <h2>1830+</h2>
                            <h4>Project executed</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <h2>220</h2>
                            <h4>Data analytics</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <h2>390</h2>
                            <h4>Data management</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <h2>834+</h2>
                            <h4>Satisfied customers</h4>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Fifthpage
