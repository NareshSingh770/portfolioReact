import React from 'react';



const MenuCards = (props) => {
    return (
        <>

            <div className='col-md-4 mb-2'>
                <div className="card">
                    <img className="card-img-top" src={props.img} alt="menus" />
                    <div className="card-body">
                        <h4 className="card-title d-flex justify-content-between align-items-center">{props.item} <span className='price'>{props.price}</span></h4>
                        <h5 className="card-cat">{props.cat}</h5>
                        <p className="card-text">{props.desc}</p>

                        <button className="btn btn-outline-danger">Read More</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MenuCards
