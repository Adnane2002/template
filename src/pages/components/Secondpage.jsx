import React from 'react'
import icon from '../../../public/Images/icon3.png'
import Image from 'next/image'

function Secondpage() {
  return (
    <div className='container-fluid my-3 background p-5'>
      <div className='row text-center'>
            <div className="col-md-12">
                <h1 className='fw-bolder'>Why our clients choose Ensome?</h1>
                <p className='fw-lighter mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam earum iste ut sequi aspernatur possimus nobis ullam in.</p>
            </div>
      </div>
      <div className='row justify-content-center g-3'>
        <div className="col-md-4">
        <div className='bg-white px-3 py-5 rounded-3 shadow'>
          <Image src={icon} height={30} width={30}/>
          <h3>Machine learning</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat enim nam dignissimos cupiditate, architecto quidem.</p>
        </div>
        </div>
        <div className="col-md-4">
        <div className='bg-white px-3 py-5 rounded-3 shadow'>
          <Image src={icon} height={30} width={30}/>
          <h3>Machine learning</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat enim nam dignissimos cupiditate, architecto quidem.</p>
        </div> 
        </div>
        <div className='col-md-4'>
        <div className='bg-white px-3 py-5 rounded-3 shadow '>
          <Image src={icon} height={30} width={30}/>
          <h3>Machine learning</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat enim nam dignissimos cupiditate, architecto quidem.</p>
        </div> 
        </div>
       
      </div>
    </div>
  )
}

export default Secondpage
