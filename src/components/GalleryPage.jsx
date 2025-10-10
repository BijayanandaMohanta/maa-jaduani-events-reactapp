import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Our Gallery</h1>
            <div className="gallery-grid">
                <div className="gallery-item">Image 1</div>
                <div className="gallery-item">Image 2</div>
                <div className="gallery-item">Image 3</div>
                <div className="gallery-item">Image 4</div>
                <div className="gallery-item">Image 5</div>
                <div className="gallery-item">Image 6</div>
            </div>
        </div>
    );
};

export default Gallery;