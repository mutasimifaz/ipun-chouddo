import { useEffect, useState } from "react";
import "./App.css";
import audio from "./ringtone.mp3";
import { Howl } from "howler";
function App() {
  const [popup, setPopup] = useState(false);

  const sound = new Howl({
    src: [audio],
    loop: false,
    html5: true,
  });
  useEffect(() => {
    console.log("In useEffect");
    sound.play();
    // Howler.volume(0.5);
  }, [popup]);
  return (
    <div className="App">
      <div className="main-div">
        <div onClick={() => setPopup(!popup)} className="box">
          <div className="inner">
            <div className={`island_popup ${popup === true && "active"}`}>
              <div className="content">
                <div className="details">
                  <div className="imgBx">
                    <img src="https://i.ibb.co/SXDPpfh/profile.jpg" alt="" />
                  </div>
                  <p>Mutasim Calling</p>
                </div>
                <div className="action">
                  <ion-icon
                    onClick={() => {
                      sound.pause() && setPopup(false);
                    }}
                    name="call"
                    class="red"
                  ></ion-icon>
                  <ion-icon name="call" class="green"></ion-icon>
                </div>
              </div>
            </div>
          </div>
          <i className="btn btn1"></i>
          <i className="btn btn2"></i>
          <i className="btn btn3"></i>
          <i className="rightSideBtn"></i>
        </div>
      </div>

      <footer>
        Created with ❤️ by
        <a href="https://mutasimifaz.vercel.app">Mutasim Hussain</a>
      </footer>
    </div>
  );
}

export default App;
