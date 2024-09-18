import { useState } from "react";
import "./App.css";



export default function App(){
  const[level,setLevel]=useState(1);
  const [size, setSize] = useState(100);
  
  //ให้อาหาร
  const foodPig = (foodValue) => {
    setLevel((prevLevel) => prevLevel + foodValue);
    setSize((prevSize) => prevSize + foodValue);  
  };
  const getPigImage = () => {
    if (level < 100) {
      return "https://www.khaosod.co.th/wpapp/uploads/2024/09/Nong-Moo-Deng4548-5.jpg";
    } else {
      return "https://today-obs.line-scdn.net/0hAFy5dItGHmlETA7nMMRhPnwaEhh3KgRgZnhYDGlESA5vYF42eX9NCmBORkVgdVA6ZChRWGNJSV1tfV88KA/w644";
    }
  };
  const imageSrc = `${getPigImage()}?t=${Date.now()}`;
  
  const reset = () => {
    setLevel(1);
    setSize(100); //รีเกม
  };
  return (
   <>
    <header className="header">
      <h1>โปรดให้อาหารน้องหมูเด้งงง!!!!!!</h1>
    </header>

    <div className="pig">
      <h1>level{level}</h1>
      <img src={imageSrc} alt="น้องหมูเด้ง" style={{ width: size, height: size }}/>
    </div>

    <div className="food">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsamcEPABAs73p_r_BVpsRYSLJeVpKc2r1g&s" alt="หญ้า"  onClick={() => foodPig(5)}/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pM6iQhSWvrIv8_ZGd7Xtc4yn12kDx6pwZw&s" alt="เเตงโมของพี่เต้" onClick={() => foodPig(15)} />
      <img src="https://inwfile.com/s-gd/elcied.jpg" alt="ฟักทอง" onClick={() => foodPig(25)}/>
    </div>
    <div className="but">
      <button onClick={reset}>รีเซ็ตน้องหมูเด้งงงงงง</button>
    </div>
  </>
  );
}


