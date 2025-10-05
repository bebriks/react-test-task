import { useState } from 'react'
import { Button } from '../button'
import './index.css'

const Carousel = ({ images }) => {
    const [currentIndexImage, setCurrentIndexImage] = useState(0)
    const changeCurrentImageNext = () => {
        if(currentIndexImage < images.length - 1) {
            setCurrentIndexImage(currentIndexImage + 1)
        }
    }

    const changeCurrentImagePrev = () => {
        if(currentIndexImage > 0) {
            setCurrentIndexImage(currentIndexImage - 1)
        }
    }

    return (
        <div className="carousel-container">
            <div className="carousel">
                <img src={images[currentIndexImage]} alt="item" className="carousel__item-image" />
            </div>
            <div className="carousel__controll-buttons">
                <Button className="button carousel__controll-button" onClick={() => changeCurrentImagePrev()}>&lt;</Button>
                <Button className="button carousel__controll-button" onClick={() => changeCurrentImageNext()}>&gt;</Button>
            </div>
        </div>
    )
}

export { Carousel }