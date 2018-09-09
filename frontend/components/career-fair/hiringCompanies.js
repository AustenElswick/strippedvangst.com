import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';


const items = [
  {
    srcs: [
      '/static/images/logos/LeafLink-Color.png',
      '/static/images/logos/GTI.png',
      '/static/images/logos/CrescoLabs-Logo.png',
      '/static/images/logos/combined-color-1000-2.png',
      '/static/images/logos/willies.png'
    ]  
  },
  {
    srcs: [
      '/static/images/logos/PAX.png',
      '/static/images/logos/roundLogo.png',
      '/static/images/logos/NativeRoots.jpg',
      '/static/images/logos/Greenbits.webp',
      '/static/images/logos/GreenpeakInnovations.png'
    ]
  },
  {
    srcs: [
      '/static/images/logos/TikunOlam.png',
      '/static/images/logos/TGSM.png',
      '/static/images/logos/VS.png',
      '/static/images/logos/CannaAdvisors.png',
      '/static/images/logos/harborside.jpg'
    ]
  }
];

class HiringCompanies extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }


  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.srcs[0]}
        >
    {item.srcs.map(src => {
    return (
        <img src={src} style={{ 'height': '200px', 'width': '200px' }} />
    )})}
        </CarouselItem>
      );
    });
    return (
      <section id="company-carousel">
        <h3>THANK YOU TO ALL HIRING COMPANIES</h3>
        <div>gray line goes here</div>
        <div className='centered'>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        </div>
        <style>
          {`
          #company-carousel {min-height: 50vh; min-width: 100vw; padding: 4rem;}
          .carousel-control-prev-icon {
            background-image: url('/static/images/career-fair-page/l-arrow-orange.png');
          }
          .carousel-control-next-icon {
            background-image: url('/static/images/career-fair-page/r-arrow-orange.png');
          }
          .centered {
            display: flex;
            justify-content: center;
          }
          `}
        </style>
      </section>
    );
  }
}

export default HiringCompanies;
