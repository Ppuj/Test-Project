import './App.css'
import FaqSection from './Component/FaqSection.jsx';
import Footer from './Component/Footer.jsx';
import HighlightSection from './Component/HighlightSection';
import LoremSection from './Component/LoremSection';
import Header from './Component/header.jsx'
import Section from './Component/section.jsx';
import slide1 from './assets/slide1.jpg'
import slide2 from './assets/slide2.jpg'
import slide3 from './assets/slide3.jpg'
function App() {
  const Sectiondata = [
    {
      title: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      img: slide1
    },
    {
      title: "Dolor Sit Amet",
      text: "Here's another slide Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      img: slide2
    },
    {
      title: "Consectetur Adipiscing",
      text: "Third slide in the section, sLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      img: slide3
    }
  ];
  return (
    <>
      <div>
      <Header/>
       <Section slides={Sectiondata}/> 
       <HighlightSection/>
       <LoremSection/>
       <FaqSection/>
       <Footer/>
      </div>
    </>
  )
}

export default App
