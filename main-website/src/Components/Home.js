import IntroBG from '../Images/Home pg.png';
import SpaceBG from '../Images/mission space.jpg';
import TechBG from '../Images/mission tech.png';
import FeaturedOnLogo from '../Featured on/suntv.png';
import BlogBG from '../Blog Images/bg1.jpg';
import '../CSS/Home.css';
import ContactCard from './ContactCard';



function Home() {
    return (<div>
        <div className='Home'>

            <div className='Intro'>
                <div class="cardHM text-white">
                    <img class="card-img" src={IntroBG} alt="" id='HomeBG' className='img-fluid'></img>
                    <div class="card-img-overlay">
                        <p className='HomeText'>
                            Think Beyond Imagination <br>
                            </br>
                            with <spam className='brandcolor'>Aero2Astro</spam>
                        </p><br></br>
                        <a href="/" class="btn btn-primary btn-lg button1 " role="button" aria-pressed="true">Know more about Us</a>
                    </div>
                </div>
            </div>
            <div className='Tiles'>
                <div class="container">

                    <div class="row">
                        <div class="col tiles_title">
                            Think<span className='brandcolor fullstop'>.</span><br></br><div className='TilesContent'>Whether you think you can,
                                or you think you can't--you're right.</div>
                        </div>
                        <div class="col tiles_title">
                            Innovate<span className='brandcolor fullstop'>.</span><br></br><div className='TilesContent'>Creative thinking to solve a
                                problem and to make complex to simple.</div>
                        </div>
                        <div class="col tiles_title">
                            Explore<span className='brandcolor fullstop'>.</span><br></br><div className='TilesContent'>Our innovation helps you to explore the
                                inside atmosphere and outside atmosphere.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='MissionSpace'>
                <div class="card bg-dark text-white">
                    <img class="card-img" src={SpaceBG} alt="Card" className='SpaceBG'></img>
                    <div class="card-img-overlay">
                        <div class="container mission_layout">
                            <div class="row">
                                <div class="col mission_title">Mission <br id='breaker'></br><spam className='brandcolor'>Space</spam></div>
                                <div class="w-100"></div>
                                <div class="col mission_content">Aero2Astro Research Platform's motive is to become the first Indian private organization to establish itself as an aerospace manufacturer and to operate a private rocket launch platform.
                                    <br></br>
                                    <br></br>
                                    Established in 2017, Aero2Astro is located at HTBI & HEIC, Hindustan University, Chennai. A team of innovators and enthusiasts united with the intention of developing groundbreaking ideas to revolutionize the fields of aeronautics and astronautics.</div>
                            </div>
                            <div class="col mission_button">
                                <a href="/" class="btn btn-primary btn-lg button2 " role="button" aria-pressed="true">More on Mission Space</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='MissionTech'>
                <div class="card text-white">
                    <img class="card-img" src={TechBG} alt="Card" className='TechBG'></img>
                    <div class="card-img-overlay">
                        <div class="container mission_layout">
                            <div class="row">
                                <div class="col mission_title_2">Mission <br id='breaker'></br><spam className='brandcolor'>Tech</spam></div>
                                <div class="w-100"></div>
                                <div class="col mission_content_2">The Aero2Astro team is currently engaged in the FLYALOT DRONEAID project, aimed at developing a UAV (Unmanned Aerial Vehicle) designed to provide aid to soldiers stationed at our borders and in war zones.
                                    <br></br>
                                    <br></br>
                                    This innovative drone is intended to assist soldiers who are affected by climatic changes, sustain injuries, or become unconscious while on duty.Utilizing data accumulated over the years, we have engineered a resilient AI engine tailored to meet the operational and business requirements of our enterprise clientele.</div>
                            </div>
                            <div class="col mission_button_2">
                                <a href="/" class="btn btn-primary btn-lg button2 " role="button" aria-pressed="true">More on Mission Tech</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='SuccessYrs'>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <p className='seven'>7</p>
                        </div>
                        <div class="col">
                            <p className='years'>Years of Successful Work in this Fields</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='FeaturedOn'>
                <p className='FeaturedOn_Title'>Feartured <span className='brandcolor'>on</span></p>
                <div class="row FeaturedOn_Grid">
                    <div class="col"><img src={FeaturedOnLogo} alt='Sun TV Logo'></img></div>
                    <div class="col"><img src={FeaturedOnLogo} alt='Sun TV Logo'></img></div>
                    <div class="col"><img src={FeaturedOnLogo} alt='Sun TV Logo'></img></div>
                    <div class="w-100"></div>
                    <div class="col"><img src={FeaturedOnLogo} alt='Sun TV Logo'></img></div>
                    <div class="col"><img src={FeaturedOnLogo} alt='Sun TV Logo'></img></div>
                    <div class="col"><img src={FeaturedOnLogo} alt='Sun TV Logo'></img></div>

                </div>
            </div>
            <div className='BlogSection'>
                <p className='Blog_Title'>Read <span className='brandcolor'>Our</span> Blogs</p>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100 BlogBG" src={BlogBG} alt="First slide"></img>
                            <div class="carousel-caption d-none d-md-block Blog_content">
                                <h5>AERODYNAMICS OF A ROCKET</h5>
                                <p>Talks about the aerodynamics of rockets</p>
                                <a href="https://aero2astro.com/home/blog/aerodynamics-of-a-rocket" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Read More</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 BlogBG" src={BlogBG} alt="Second slide"></img>
                            <div class="carousel-caption d-none d-md-block Blog_content">
                                <h5>AERODYNAMICS OF A ROCKET</h5>
                                <p>Talks about the aerodynamics of rockets</p>
                                <a href="https://aero2astro.com/home/blog/aerodynamics-of-a-rocket" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Read More</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 BlogBG" src={BlogBG} alt="Third slide"></img>
                            <div class="carousel-caption d-none d-md-block Blog_content">
                                <h5>AERODYNAMICS OF A ROCKET</h5>
                                <p>Talks about the aerodynamics of rockets</p>
                                <a href="https://aero2astro.com/home/blog/aerodynamics-of-a-rocket" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Read More</a>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

            </div >
            <ContactCard></ContactCard>

        </div>
    </div >)
}

export default Home