import React, { useContext } from 'react'
import { ModalOpen } from '../../context/Context'

const About = () => {
    const [modalState, setModal] = useContext(ModalOpen)
    return (
        <>
            <section className="about-me">
                <div className="container">
                    <h2 className="text-dark text-center mb-5">About me</h2>
                    <div className="row">
                        <div className="col-md-4 profile-img">
                            <img src='http://placehold.it/400x500&text=image1' alt='profile' />
                        </div>
                        <div className="col-md-8 pl-5 about-me-text">
                            <h4 className="text-danger">I'm Naresh and I'm a Freelancer|</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                            <button type="button" className="btn btn-danger px-4 py-2 d-flex align-items-center" onClick={() => { setModal(!modalState) }}>Download CV<i className="fa fa-download" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
