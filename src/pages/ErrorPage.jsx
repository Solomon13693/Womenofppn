import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <section class="error__area pt-5">
            <div class="container">
               <div class="row">
                  <div class="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div class="error__item text-center">
                        <div class="error__thumb mb-45">
                           <img src="/images/error.png" alt="" />
                        </div>
                        <div class="error__content">
                           <h3 class="error__title">Page Not Found!</h3>
                           <p>Please try searching for some other page.</p>
                           <Link className="btn btn-primary rounded-lg" to="/">Back To Home</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}

export default ErrorPage
