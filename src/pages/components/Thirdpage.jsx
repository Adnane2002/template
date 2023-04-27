import React from 'react'
import image2 from '../../../public/Images/h2.png'
import image3 from '../../../public/Images/h3.png'
import Image from 'next/image'

function Thirdpage() {
    return (
        <>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='first-text my-5'>
                            The newest business analytics platform
                        </div>
                        <div className='second-text my-5'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatum tempore nesciunt sed, at quae, eos quia, nisi voluptatem adipisci provident laudantium quod modi minima. In cumque enim quae ad.
                        </div>
                        <div>
                            <button className='btn btn-primary'>Learn more</button>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <Image src={image2}  width={500} height={300} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <Image src={image3}  width={500} height={300} />
                    </div>
                    <div className='col-md-6'>
                        <div className='first-text my-5'>
                            The newest business analytics platform
                        </div>
                        <div className='second-text my-5'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatum tempore nesciunt sed, at quae, eos quia, nisi voluptatem adipisci provident laudantium quod modi minima. In cumque enim quae ad.
                        </div>
                        <div>
                            <button className='btn btn-primary'>Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thirdpage
