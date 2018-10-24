import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Lightbox from 'react-images';
import './Pictures.css';

class Pictures extends Component {
  constructor() {
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
    this.setState({currentImage: index, lightboxIsOpen: true});
  }

  closeLightbox() {
    this.setState({currentImage: 0, lightboxIsOpen: false});
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  renderGallery() {
    const {images} = this.props;

    if (!images)
      return;

    const gallery = images.map((obj, i) => {
      return (<img src={obj.src} alt="" onClick={(e) => this.openLightbox(i, e)}/>);
    });
    return (<div className="pics">
      {gallery}
    </div>)
  }

  render() {
    return (<div>
      {this.renderGallery()}
      <Lightbox
      currentImage={this.state.currentImage}
      images={this.props.images}
      isOpen={this.state.lightboxIsOpen}
      onClickPrev={this.gotoPrevious}
      onClickNext={this.gotoNext}
      onClose={this.closeLightbox}/>
    </div>);
  }
}

Pictures.displayName = 'Picures';
Pictures.propTypes = {
  heading: PropTypes.string,
  images: PropTypes.array,
  // showThumbnails: PropTypes.bool
}

export default Pictures;
