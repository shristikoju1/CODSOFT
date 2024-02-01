import './skill.css';
import UIDesign from '../../img/ui-design.png';
import webDesign from '../../img/web-design.png';
import appDesign from '../../img/app-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className='skillTitle'>What I do?</span>
            <span className="skillDesc">
                As an aspiring web designer and developer, I bring fresh perspectives and eagerness to collaborate on innovative projects. Proficient in HTML, CSS, and JavaScript, I showcase my commitment to learning and adapting swiftly. My portfolio, though limited, demonstrates my dedication to delivering user-friendly designs. I am enthusiastic about the opportunity to work with others, bringing creativity and a strong work ethic to every project. Let's create something amazing together!
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UI" className='skillBarImg' />
                    <div className="skillBarText">
                        <h2>UI Design</h2>
                        <p>UI design involves creating visually appealing and intuitive digital interfaces, emphasizing elements like layout, color, and interactive components to enhance user experience and satisfaction. It combines aesthetics with functionality, ensuring a seamless and visually engaging interaction for users.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src= {webDesign} alt="UI" className='skillBarImg' />
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>Website development is the process of creating and maintaining websites, involving tasks such as coding, programming, and designing to ensure functionality, user experience, and visual appeal. It encompasses both front-end (client-side) and back-end (server-side) development for a comprehensive online presence.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={appDesign} alt="" className='skillBarImg' />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>App design involves crafting user interfaces and experiences for mobile applications, blending aesthetic appeal with intuitive functionality to enhance user engagement and satisfaction. It focuses on creating visually appealing layouts and seamless interactions for an optimal mobile user experience.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;