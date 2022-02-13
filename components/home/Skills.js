import React, { useContext } from 'react'
import { ModalOpen } from '../../context/Context'

const Skills = () => {
    const [modalState, setModal] = useContext(ModalOpen)
    return (
        <>
            <section className="skills container">
                <h2 className="text-center mb-5">My Skills</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <h4>My creative skills & experiences.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est recusandae
                            consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate
                            recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat?
                            Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod.</p>
                        <button className="btn btn-danger" onClick={() => setModal(!modalState)}>Read More</button>
                    </div>
                    <div className="col-lg-6 skill-wrapper d-flex flex-column">
                        <div className="skill">
                            <div className="name d-flex justify-content-between"><span>HTML</span><span>95%</span></div>
                            <div className="progress">
                                <div className="progress-bar bg-danger" style={{ width: '95%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="name d-flex justify-content-between"><span>CSS</span><span>90%</span></div>
                            <div className="progress">
                                <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="name d-flex justify-content-between"><span>Javascript</span><span>80%</span></div>
                            <div className="progress">
                                <div className="progress-bar bg-danger" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="name d-flex justify-content-between"><span>JQuery</span><span>90%</span></div>
                            <div className="progress">
                                <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="name d-flex justify-content-between"><span>Bootstrap</span><span>90%</span></div>
                            <div className="progress">
                                <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="name d-flex justify-content-between"><span>React Js</span><span>80%</span></div>
                            <div className="progress">
                                <div className="progress-bar bg-danger" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
