import { useRef, useState } from 'react';

const App:React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  
  const colorChange = () => {
    ref.current!.style.color = "red";
    ref.current!.focus();
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const playToggle = () => {
    if(playing){
      videoRef.current!.pause();
      setPlaying(false)
    } else {
      videoRef.current!.play();
      setPlaying(true)
    };
  };

  let dateNum = () => new Date().getTime();
  const [numState, setNumState] = useState(dateNum());
  const numRef = useRef(dateNum());

  console.log(`state:${numState}`);
  console.log(`ref:${numRef.current}`);

  return (
    <>
      <h1>Hello World!</h1>
      <input type="text" ref={ref} />
      <div>
        <button onClick={colorChange}>インプット要素をフォーカスする</button>
      </div>
      <hr />
      <video ref={videoRef}>
        <source src="ocean.mp4"/>
      </video>
      <div>
        <button onClick={playToggle}>
          {playing ? "Stop" : "Play"}
        </button>
      </div>
      <hr />
      <p>state:{numState}</p>
      <button onClick={() => setNumState(dateNum())}>state更新</button>
      <p>ref:{numRef.current}</p>
      <button onClick={() => {numRef.current = dateNum(); console.log(dateNum());}}>ref更新</button>
    </>
  );
}

export default App;
