import React from 'react';
import './projects.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

// DO NOT USE IMAGES IN PRODUCTION
const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Crypto Currency Dashboard',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Chart Templates',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Figma',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Maitaining',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Tracking',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 6,
        image: IMG6,
        title: 'E-Commercial',
        github: 'https://github.com',
        demo: 'https://github.com'
    }
]


const Projects = React.forwardRef((props, ref) => {

    return (
        <section id="projects" ref={ref}>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container projects__container">
                {
                    data.map(({id,image,title,github,demo}) => {
                        return (
                            <article key={id} className="projects__items">
                                <div className="projects__items-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="projects__items-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                                </div>        
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
});

export default Projects;