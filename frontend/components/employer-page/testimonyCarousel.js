import React, { Component } from 'react';

class TestimonyCarousel extends Component {
  render() {
    return (
      <section>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="/static/images/dummyImage.png" alt="First slide" />
              <p>"Vangst has been instrumental in doubling our team size over the past six months by sourcing candidates for finance, sales, engineering, marketing, and customer success. I’m excited to see Vangst continue to expand their offerings through Vangsters and proved much needed services to our rapidly growing industry. The same amount of vetting that we have historically need to do on our own is now being handled by a very capable team that is aware of the high standards we employ in our hiring process."</p>
              <div>white verticle line goes here</div>
              <p>Roger Obando, CTO, Baker Technologies</p>
              <div> white verticle line goes here</div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/static/images/dummyImage.png" alt="Second slide" />
              <p>“I have worked with Vangst over time for recruiting services and I rarely write reviews, but felt this one is well deserved. The company is a pleasure to work with. I used to work in the big corporate world and I managed many contracts for recruiting myself. I can honestly say, Vangst is very timely with providing candidates and most importantly the candidates they present are all viable candidates. In addition to that, the employees and the owner have great customer service and are a pleasure to do business with.”</p>
              <div>white verticle line goes here</div>
              <p>Kirsten Knutston, People Operations, Keef Cola</p>
              <div>white verticle line goes here</div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/static/images/dummyImage.png" alt="Third slide" />
              <p>“From the inception of our meeting, Vangst was enthusiastic and attentive to the resource need, and worked diligently to soured and qualify candidates for the position. Vangst provided attuned service over the course of the engagement to understand and adapt in working to fill the role, and maintained consistent communication with coordinating an exceptional solution to the need.”</p>
              <div>white verticle line goes here</div>
              <p>Nelson Oliver, Controller, O.pen Vape</p>
              <div>white verticle line goes here</div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/static/images/dummyImage.png" alt="Third slide" />
              <p>“ Exceptional positive. Karson, the CEO, is a powerhouse and her team is great. They added 9+ members to our team that have been incredibly valuable for LeafLink. We are currently working on several other positions with them and they understand the industry and their clients on a level we’ve not seen with any other recruiting firms.”</p>
              <div>white verticle line goes here</div>
              <p>Ryan Smith, Co-Founder, LeafLink</p>
              <div>white verticle line goes here</div>
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
      </section>
    );
  }
}

export default TestimonyCarousel;
