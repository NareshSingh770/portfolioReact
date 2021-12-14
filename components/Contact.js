import React, { useEffect, useReducer } from 'react'



const reducer = (state, action) => {
    switch (action.type) {
        case 'TYPE_TEXT':
            const { name, value } = action.feild.target;
            return {
                ...state, [name]: value
            }
        case 'REST_ALL':
            return {
                name: '', email: '', subject: '', message: ''
            }
        default: return state;
    }
}
const reducerSub = (state, { type, payload }) => {
    switch (type) {
        case 'SUB_DATA':
            const name = payload.name;

            return {
                ...state, [name]: payload
            }
        default: return state;
    }
}



const Contact = () => {

    const initialData = () => {
        const list = localStorage.getItem('subscribers');
        // console.log(list);
        if (list) {
            return JSON.parse(list);
        } else return {}
    }
    const [stateTyped, dispatch] = useReducer(reducer, { name: '', email: '', subject: '', message: '' });
    const [stateSub, dispatchSub] = useReducer(reducerSub, initialData());

    const submitData = (e) => {
        e.preventDefault();

        dispatch({ type: 'REST_ALL' })
        dispatchSub({ type: 'SUB_DATA', payload: stateTyped });

    }
    useEffect(() => {
        localStorage.setItem('subscribers', JSON.stringify(stateSub))
    }, [stateSub])

    return (
        <>
            <section className="contact text-white">
                <div className='container'>
                    <h2 className="text-center mb-5">Contact me</h2>
                    <div className="contact-wrapper mt-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Get in Touch</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga
                                    corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                                <div className="detail-wrapper d-flex align-items-center justify-content-between">
                                    <span><i className="text-danger fas fa-user"></i></span>
                                    <div className="details d-flex flex-column">
                                        <label>Name</label>
                                        <span>Naresh Singh</span>
                                    </div>
                                </div>
                                <div className="detail-wrapper d-flex align-items-center justify-content-between">
                                    <span><i className="text-danger fas fa-user"></i></span>
                                    <div className="details d-flex flex-column">
                                        <label>Name</label>
                                        <span>Naresh Singh</span>
                                    </div>
                                </div>
                                <div className="detail-wrapper d-flex align-items-center justify-content-between">
                                    <span><i className="text-danger fas fa-user"></i></span>
                                    <div className="details d-flex flex-column">
                                        <label>Name</label>
                                        <span>Naresh Singh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h4>Message</h4>
                                <form>

                                    <div className="first-field d-flex justify-content-between mb-2 mt-2">
                                        <div className="">
                                            <input type="text" className="form-control" name='name' value={stateTyped.name} placeholder="Name" onChange={(e) => dispatch({ type: 'TYPE_TEXT', feild: e })} />
                                        </div>
                                        <div className="">
                                            <input type="email" className="form-control" name='email' value={stateTyped.email} placeholder="Email" onChange={(e) => dispatch({ type: 'TYPE_TEXT', feild: e })} />
                                        </div>
                                    </div>
                                    <div className="mb-2 mt-2">
                                        <input type="text" className="form-control" name='subject' value={stateTyped.subject} placeholder="Subject" onChange={(e) => dispatch({ type: 'TYPE_TEXT', feild: e })} />
                                    </div>
                                    <div className="mb-2 mt-2">
                                        <textarea className="form-control" rows="3" name='message' value={stateTyped.message} placeholder="Message..." onChange={(e) => dispatch({ type: 'TYPE_TEXT', feild: e })}></textarea>
                                    </div>
                                    <button className="btn btn-danger" onClick={submitData}>Send Message</button>
                                </form>
                                {/* <div className="details">
                                    <h5></h5>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;


