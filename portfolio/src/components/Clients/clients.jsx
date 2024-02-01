import microsoft from '../../img/Microsoft.webp';
import daraz from '../../img/daraz.jpg';
import nepse from '../../img/nepse.jpg';
import amazon from '../../img/amazon.png';
import './clients.css';


const Clients = () => {
    return (
        <section id="clients">
            <h1 className="title">My Clients</h1>
            <p className="clientsDesc">I work really hard with awesome clients, and together we make cool stuff that stands out. Every project we tackle turns out amazing because we're all about doing our best.</p>
            <div className="clientsImgs">
                <img src={microsoft} alt="" className="clientsImg" />
                <img src={daraz} alt="" className="clientsImg" />
                <img src={nepse} alt="" className="clientsImg" />
                <img src={amazon} alt="" className="clientsImg" />
            </div>
        </section>
    )
}

export default Clients;