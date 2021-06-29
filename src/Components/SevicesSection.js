import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
export default function SevicesSection() {
    return (
        <div>
            <div className="services">
                <div className="description">
                    <h2>High  <span>quality</span> services </h2>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                            <img alt='clock' src={clock}></img>
                            <h3>Efficient</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora neque perferendis reprehenderit, accusantium quisquam eaque id, totam temporibus cumque natus consequuntur iste architecto iusto nesciunt. Neque ab aperiam saepe.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                            <img alt='clock' src={teamwork}></img>
                            <h3>teamwork</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora neque perferendis reprehenderit, accusantium quisquam eaque id, totam temporibus cumque natus consequuntur iste architecto iusto nesciunt. Neque ab aperiam saepe.</p>
                        </div><div className="card">
                            <div className="icon">
                            <img alt='clock' src={diaphragm}></img>
                            <h3>diaphragm</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora neque perferendis reprehenderit, accusantium quisquam eaque id, totam temporibus cumque natus consequuntur iste architecto iusto nesciunt. Neque ab aperiam saepe.</p>
                        </div><div className="card">
                            <div className="icon">
                            <img alt='clock' src={money}></img>
                            <h3>Affordable</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora neque perferendis reprehenderit, accusantium quisquam eaque id, totam temporibus cumque natus consequuntur iste architecto iusto nesciunt. Neque ab aperiam saepe.</p>
                        </div>
                        
                    </div>
                </div>
                <img src={home2} alt="home2" />
            </div>
        </div>
    )
}
