import Image from 'next/image'
import React from 'react'
import image1 from '../../../public/Images/h1.png'
import main from '../../../public/Images/main1.png'
import { AiFillPlayCircle } from "react-icons/ai"

function Firstpage() {
    return (
        <>
            <div className='container my-4'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='first-text my-5'>
                            Find true power in your data with Ensome
                        </div>
                        <div className='second-text my-5'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatum tempore nesciunt sed, at quae, eos quia, nisi voluptatem adipisci provident laudantium quod modi minima. In cumque enim quae ad.
                        </div>
                        <div>
                            <button className='btn btn-primary'>Learn more</button>
                            <button className='btn btn-white '><AiFillPlayCircle/>   Watch the demo</button>
                        </div>
                    </div>
                    <div className='col-md-6 d-flex justify-content-center align-items-center'>
                        <Image src={image1} width={600}/>
                    </div>
                </div>
                <div className='text-center d-flex flex-wrap justify-content-center align-items-center'>
                    <Image src={main} className='my-2' width={200}/>
                    <Image src={main} className='my-2' width={200}/>
                    <Image src={main} className='my-2' width={200}/>
                    <Image src={main} className='my-2' width={200}/>
                    <Image src={main} className='my-2' width={200}/>
                </div>
            </div>
        </>
    )
}

export default Firstpage
