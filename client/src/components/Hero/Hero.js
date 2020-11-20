import "./Hero.scss";
import MainContent from '../MainContent/MainContent';
import UploadFile from '../UploadFile/UploadFile';

function Hero() {
  return (
    <>
      <div className="hero">
        <h1 className="hero__heading">Uncle Joe's Farm Feast</h1>
      </div>
      <MainContent/>
      <UploadFile/>
    </>
  );
}

export default Hero;
