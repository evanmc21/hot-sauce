import React, { Component } from 'react';
import beybraids from './images/beybraids.jpg';
import bey2 from './images/bey2.jpg'
import bey3 from './images/bey3.jpg'
import bey4 from './images/bey4.jpg'
import Lightbox from 'react-images';

class Description extends Component {
  constructor(){
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
  }

  openLightbox(index, e) {
    e.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious(){
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext(){
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }


  render() {
    return (
      <Lightbox
        currentImage={this.state.currentImage}
        images={[{ src: beybraids}, { src: bey2 }, { src: bey3 }, { src: bey4 }]}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
        />
    );
  }
}



export default Description;
