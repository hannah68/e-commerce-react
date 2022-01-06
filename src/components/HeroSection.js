import '../styles/Home.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-section__text">
                <div className="hero-container">
                    <h1 className="hero-section__text--title">
                            The unique furniture for your special house
                    </h1>
                    <button className="hero-section__text--btn">
                            Shop Now
                    </button>
                </div>
            </div>
            <div className="hero-section__img">
                <img src="./assets/images/chair1.jpg" alt="chair"/>
            </div>
        </section>
    )
}

export default HeroSection
