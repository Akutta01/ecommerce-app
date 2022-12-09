import { useState, createContext, useContext } from "react";
import mySvg1 from "../images/icon-cart.svg";
import myLeft from "../images/icon-previous.svg";
import MyRight from "../images/icon-next.svg";
import myClose from "../images/icon-close.svg";
import AuthContext from "../useAuth/context";
import Navbar from "./Navbar";
import { SliderData } from "./sliderData";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

const DATA = [
  { image: require("../images/image-product-1.jpg") },
  { image: require("../images/image-product-2.jpg") },
  { image: require("../images/image-product-3.jpg") },
  { image: require("../images/image-product-4.jpg") },
];

const Mainpage = () => {
  const { num, setNum, setAmount } = useContext(AuthContext);
  const [imageProduct, setimageProduct] = useState(
    require("../images/image-product-1.jpg")
  );

  const [imageProduct1, setimageProduct1] = useState(
    require("../images/image-product-1-thumbnail.jpg")
  );
  const [imageProduct2, setimageProduct2] = useState(
    require("../images/image-product-2-thumbnail.jpg")
  );
  const [imageProduct3, setimageProduct3] = useState(
    require("../images/image-product-3-thumbnail.jpg")
  );
  const [imageProduct4, setimageProduct4] = useState(
    require("../images/image-product-4-thumbnail.jpg")
  );
  const [p, setP] = useState(false);

  console.log(SliderData);
  const calcFunc = () => {
    setAmount(125.0 * num);
  };
  const [current, setCurrent] = useState(0);
  const lenght = DATA.length;

  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };
  console.log(current);

  if (!Array.isArray(DATA) || DATA.length <= 0) {
    return null;
  }

  const getImage = (data) => {
    setimageProduct(imageProduct1, data);
  };

  return (
    <div className="container">
      <div className="homepage">
        <div className="homeImages">
          <div className="mainHomeImage"></div>
          <div className="selectMainHomeImage">
            <div>
              <img
                className="mainProduct"
                src={imageProduct}
                onClick={() => setP(!p)}
              ></img>
            </div>
            <div className="thumbnails">
              <div>
                <img
                  src={imageProduct1}
                  className="product"
                  onClick={() => setP(!p)}
                ></img>
              </div>
              <div>
                <img
                  src={imageProduct2}
                  className="product"
                  onClick={() => setP(!p)}
                ></img>
              </div>
              <div>
                <img
                  src={imageProduct3}
                  className="product"
                  onClick={() => setP(!p)}
                ></img>
              </div>
              <div>
                <img
                  src={imageProduct4}
                  className="product"
                  onClick={() => setP(!p)}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="productDescription">
          <h1>SNEAKER COMPANY</h1>
          <h2>Fall Limited Edition Sneakers</h2>
          <p className="pitch">
            These low-profile sneakers are your casual wear companion. Featuring
            a duarble rubber outer sole, they'll withstand everything the
            weather can offer.
          </p>
          <div className="priceTag">
            <div>
              <div className="price">
                <p className="currentPrice">$125.00</p>
                <p className="discount">50%</p>
              </div>
              <div>
                <p className="previousPrice">$250.00</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="navi">
            <div className="numNavi">
              <FiMinus
                className="increase"
                onClick={(e) => {
                  if (num === 0) return;
                  setNum(num - 1);
                }}
              />

              <p className="num">{num}</p>
              <FiPlus
                className="increase"
                onClick={(e) => {
                  setNum(num + 1);
                }}
              />
            </div>
            <div className="list" onClick={calcFunc}>
              <div>
                <img src={mySvg1} className="addCart"></img>
              </div>
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
      {
        p && (
          <div className="lightBox">
            <img src={myClose} className="close" onClick={() => setP(!p)}></img>

            <div className="lightHighBox">
              <img src={myLeft} className="left" onClick={prevSlide}></img>
              {DATA.map((slide, index) => {
                return (
                  <div key={index}>
                    {index === current && (
                      <img src={slide.image} className="lightHighlight"></img>
                    )}
                  </div>
                );
              })}
              <img src={MyRight} className="right" onClick={nextSlide}></img>
            </div>
            <div className="highThumbs">
              <img
                src={imageProduct1}
                className={current === 0 ? "activeThumbs" : "highlightThumbs"}
                onClick={() => getImage("../images/image-product-1.jpg")}
              ></img>
              <img
                src={imageProduct2}
                className={current === 1 ? "activeThumbs" : "highlightThumbs"}
                onClick={() => getImage("../images/image-product-2.jpg")}
              ></img>
              <img
                src={imageProduct3}
                className={current === 2 ? "activeThumbs" : "highlightThumbs"}
                onClick={() => getImage("../images/image-product-3.jpg")}
              ></img>
              <img
                src={imageProduct4}
                className={current === 3 ? "activeThumbs" : "highlightThumbs"}
                onClick={() => getImage("../images/image-product-4.jpg")}
              ></img>
            </div>
          </div>
        )
        //
      }
    </div>
  );
};

export default Mainpage;
