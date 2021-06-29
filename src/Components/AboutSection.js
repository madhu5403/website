import home1 from '../img/home1.png'
export default function AboutSection() {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come  </h2>
                    </div>
                    <div className="hide">
                        <h2>true</h2>
                    </div>
                    <p>Contact us for any photography or vediography ideas that you have. we have professionals with amazing skills</p>
                    <button>Contact Us</button>

                </div>
            </div>
            <img src={home1} alt="" />
        </div>
    )
}
