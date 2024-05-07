import '../CSS/Career.css'

function Career() {
    return (
        <div>
            <div className='CareerSection'>
                <div className='CareerSectionTitle'>Want to Work at <span className='brandcolor'>Aero2Astro</span> ?</div>
                <div className='CareerSectionDecrip'>
                    <div class="container">
                        <div class="row">
                            <div class="col CareerSectionHeading">WHO ARE WE LOOKING FOR.</div>
                            <div class="w-100"></div>
                            <div class="col">Are you someone who is dream-oriented <br></br>
                                person with a Strong Mindset to make a change?</div>
                        </div>
                    </div>
                </div>
                <div className='CareerList'>
                    <div className='CareerListTitle'>Opening Available Currently</div>
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Position</th>
                                <th scope="col">Mission</th>
                                <th scope="col">Location</th>
                                <th scope="col">Job Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='CareerForm'>
                    <div class="containerFM">
                        <form id="contact" action="" method="post">
                            <h3>Quick Approach</h3>
                            <h4>Contact today to work with <span className='brandcolor'>Aero2Astro</span></h4>
                            <fieldset>
                                <input placeholder="Your name" type="text" tabindex="1" required autofocus></input>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Email Address" type="email" tabindex="2" required></input>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Phone Number" type="tel" tabindex="3" required></input>
                            </fieldset>
                            <fieldset>
                                <p className='contacttext'> Choose Job Type</p>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text contacttext">
                                            <p>Internship &nbsp;</p>
                                            <input type="radio" aria-label="Radio button for following text input"></input>
                                        </div>
                                        <div class="input-group-text contacttext">
                                            <p>Job &nbsp;</p>
                                            <input type="radio" aria-label="Radio button for following text input"></input>
                                        </div>
                                    </div>
                                    {/* <input type="text" class="form-control" aria-label="Text input with radio button"></input> */}
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">

                                    </div>
                                    {/* <input type="text" class="form-control" aria-label="Text input with radio button"></input> */}
                                </div>
                            </fieldset>

                            <fieldset>
                                <p className='contacttext'> Upload Resume</p>

                                <div class="input-group mb-3 contacttext">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Upload</span>
                                    </div>
                                    <div class="custom-file">
                                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>
                                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>

                            </fieldset>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career;
