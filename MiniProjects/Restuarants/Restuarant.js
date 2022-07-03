import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MenuCards from './MenuCards';
import MenuList from './MenuItems';

const reverseList = ['All', ...new Set(MenuList.map((val) => {
    return val.category;
}))];

// const reverseList = categoryList.reverse();

const Restuarant = () => {
    const navigate = useNavigate();
    const totalItems = MenuList.length;
    const [list, setList] = useState(MenuList);
    const [total, setTotal] = useState(totalItems);
    const [activeClass, setActive] = useState('All');

    const goBack = () => {
        navigate(-1);
    }
    const showItems = (e) => {
        const btnVal = e.target.innerHTML;


        setActive(btnVal);


        if (btnVal === 'All') {
            setList(MenuList);
            setTotal(MenuList.length);
        } else {

            const filteredList = MenuList.filter((val) => {
                return val.category === btnVal;
            });
            setTotal(filteredList.length);
            setList(filteredList);
        }


    }

    return (
        <>
            <div className='container restuarant'>
                <div className="row">
                    <div className='col-12'>
                        <button className='btn btn-outlined-dark' onClick={goBack}>Back</button>
                    </div>
                    <div className='col-md-12'>
                        <div className='navbar-items p-2 d-flex justify-content-center'>
                            {
                                reverseList.map((val, ind) => {
                                    return (
                                        <>
                                            <button key={ind} id={`btn-${ind + 1}`} className={`btn btn-outline-danger mx-2 ${activeClass === val ? 'active' : ''} `} onClick={showItems}>
                                                {val}
                                            </button>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className='col-md-12 mt-4'>
                        <div className='row'>
                            <div className='results col-12 my-4'>
                                showing {total} of {totalItems}
                            </div>
                            {
                                list.map((val, ind) => {
                                    return <MenuCards key={ind} id={ind} desc={val.description} img={val.img} cat={val.category} price={val.price} item={val.item} />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Restuarant;
