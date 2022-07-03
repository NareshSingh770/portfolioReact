import React from 'react'
import { NavLink } from 'react-router-dom'
import project1 from '../Assets/project-1.jpg'
import project2 from '../Assets/project-2.jpg'
import project3 from '../Assets/project-3.jpg'
import project4 from '../Assets/project-4.jpg'

const Projects = () => {
    return (
        <>
            <div className='container overflow-auto projects-wrap'>
                <h3 className='text-center mt-5 mb-3'>Projects Examples</h3>
                <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ullam quia magnam tenetur
                    assumenda veritatis vero incidunt nobis voluptatum nihil, laboriosam, pariatur voluptatem ut

                    labore ea blanditiis aut doloremque harum?</p>

                <div className='row project-container'>
                    <div className='col-md-4 mb-5'>
                        <NavLink to='/projects/restuarant'>
                            <div className=' project-cards'>
                                <div className='project-img'>
                                    <img src={project1} alt='projects' />
                                </div>
                                <div className='title'>
                                    <h5>Restuarant Menu List</h5>
                                    <p>Categories with Breakfast, Lunch, Dinner as per the applied filter buttons</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='col-md-4 mb-5'>
                        <NavLink to='/projects/weather'>
                            <div className=' project-cards'>
                                <div className='project-img'>
                                    <img src={project2} alt='projects' />
                                </div>
                                <div className='title'>
                                    <h5>Weather Report API</h5>
                                    <p>Categories with Breakfast, Lunch, Dinner as per the applied filter buttons</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='col-md-4 mb-5'>
                        <NavLink to='/projects/number-with-reducer'>
                            <div className=' project-cards'>
                                <div className='project-img'>
                                    <img src={project3} alt='projects' />
                                </div>
                                <div className='title'>
                                    <h5>Use Reducer Count</h5>
                                    <p>Categories with Breakfast, Lunch, Dinner as per the applied filter buttons</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='col-md-4 mb-5'>
                        <NavLink to='/projects/todo-list'>
                            <div className=' project-cards'>
                                <div className='project-img'>
                                    <img src={project4} alt='projects' />
                                </div>
                                <div className='title'>
                                    <h5>Todo List with local storage</h5>
                                    <p>Categories with Breakfast, Lunch, Dinner as per the applied filter buttons</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='col-md-4 mb-5'>
                        <NavLink to='/projects/contacts'>
                            <div className=' project-cards'>
                                <div className='project-img'>
                                    <img src={project4} alt='projects' />
                                </div>
                                <div className='title'>
                                    <h5>Phonebook/Contacts</h5>
                                    <p>Categories with Breakfast, Lunch, Dinner as per the applied filter buttons</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Projects
