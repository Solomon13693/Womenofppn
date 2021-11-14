import React from 'react'

function GalleryCard({representative}) {
    return (
        <div className="bg-white rounded shadow-sm cursor" ><img src={representative.pic} alt="" className="img-fluid card-img-top" />
          <div className="p-4">
            <h5> <a className="text-dark">{representative.name}</a></h5>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-light text-dark ">{representative.email}</span></p>
              <div className="badge badge-danger px-3 rounded-pill font-weight-normal">{representative.country}</div>
            </div>
          </div>
        </div>
    )
}

export default GalleryCard
