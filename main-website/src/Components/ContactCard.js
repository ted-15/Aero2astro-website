import '../CSS/Home.css';
import '../CSS/ContactCard.css';


function ContactCard() {
    return (
        <div>
            <div class="card ContactCard" >
                <div class="card-body">
                    <h5 class="card-title">Want to boost your business with <span className="brandcolor">Aero2Astro</span> ?</h5>
                    <p class="card-text">Let's talk to make it happen.</p>
                    <a href="/" class="btn btn-primary">Get Demo</a>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
