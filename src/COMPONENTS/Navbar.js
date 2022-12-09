// import {image-avater.png} from "./images";
import { useState, useContext } from "react";
import mySvg from "../images/icon-cart.svg";
import myBin from "../images/icon-delete.svg";
import AuthContext from "../useAuth/context";

const Navbar = () => {
  const { num, setAmount, setNum, Amount } = useContext(AuthContext);
  console.log(num, Amount);
  const [profileImage, setprofileImage] = useState(
    require("../images/image-avatar.png")
  );
  const [purchace, setpurchace] = useState(
    require("../images/image-product-1-thumbnail.jpg")
  );

  const [p, setP] = useState(false);

  function reset() {
    setAmount(0);
    setNum(0);
  }

  return (
    <div>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Kumbh+Sans:wght@700&family=Open+Sans:wght@700&family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        />
      </div>
      <section>
        <div className="navbar">
          <div className="navMenuDetail">
            <h1>sneakers</h1>
            <div>
              <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="userDetail">
            <div className="purchasePos">
              <div className="purchaseNum">{num}</div>
              <img
                src={mySvg}
                className="cartImage"
                onClick={() => setP(!p)}
              ></img>
            </div>
            <img src={profileImage} className="profilePic"></img>
          </div>
        </div>
        <div className="under"></div>
        {p && (
          <div className="cartDetail">
            <h3>Cart</h3>
            <div className="cartDetailUnder"></div>
            {Amount > 0 && (
              <>
                <div className="purchaceContainer">
                  <img src={purchace} className="purchace"></img>
                  <div className="purchaceDetail">
                    <h4>Fall Limited Edition Sneakers</h4>
                    <div className="priceDetail">
                      <p>
                        $125.00 x<span>{num}</span>
                      </p>
                      <p className="fullPrice">${Amount}</p>
                    </div>
                  </div>
                  <img src={myBin} className="bin" onClick={reset}></img>
                </div>

                <div className="checkOut">
                  <p>Checkout</p>
                </div>
              </>
            )}
            {Amount === 0 && (
              <div className="emptyCart">
                <h1>Your cart is empty</h1>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Navbar;
