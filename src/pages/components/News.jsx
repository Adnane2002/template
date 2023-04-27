import React from 'react'

const News = () => {
  return (
    <>
       <div className="container-fluid my-5 p-5  bg-primary">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className='text-white ms-5'>Subscribe to our newsletter</h2>
                        <p className=' ms-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                    <div className="col-md-6 newsletter">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn bg-white" type="button" id="button-addon2">Button</button>
                    </div>
                    </div>
                </div>
            <div/>
        </div>
    </>
  )
}

export default News
