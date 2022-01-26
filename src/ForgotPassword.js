import React from 'react'
import { useFormik } from 'formik';

function ForgotPassword() {

    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: async values => {
          try {
       
          } catch (error) {
            console.log(error)
          }
        },
      });

    return (
        <>
 <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">Enter your Email-Id</p>

                      <form className="mx-1 mx-md-4" onSubmit={formik.handleSubmit}>

                        <div className="d-flex flex-row align-items-center mb-4">                         
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" name='email' style={{border : "1px solid black"}} placeholder='Enter your email'  className="form-control" onChange={formik.handleChange}
                              value={formik.values.email} required/>
                               <button type="submit" className="btn btn-primary mt-3 btn-md mb-2">Submit</button>
                               <p>A confirmation mail will be send to your corresponding email address...</p>
                          </div>
                        </div>
                      </form>

                    </div>

                  </div>
                </div>
          </div>
        </div>
      </section>
    </div>
        </>
    )
}

export default ForgotPassword