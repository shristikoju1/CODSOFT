import './works.css';
import Image1 from '../../img/1.avif';
import Image2 from '../../img/2.avif';
import Image3 from '../../img/3.avif';
import Image4 from '../../img/4.avif';
import Image5 from '../../img/5.png';
import Image6 from '../../img/6.avif';


const Works =()=> {
    return(
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">My portfolio, witness the fusion of front-end and back-end expertise through a diverse showcase of projects. From intuitive interfaces to robust functionality, explore how my work exemplifies creativity, problem-solving, and a commitment to delivering visually compelling websites.</span>
            <div className="worksImgs">
                <img src={Image1} alt="" className="worksImg" />
                <img src={Image2} alt="" className="worksImg" />
                <img src={Image3} alt="" className="worksImg" />
                <img src={Image4} alt="" className="worksImg" />
                <img src={Image5} alt="" className="worksImg" />
                <img src={Image6} alt="" className="worksImg" />
            </div>
            <button className='worksBtn'> See more..</button>
        </section>
    )
}

export default Works;