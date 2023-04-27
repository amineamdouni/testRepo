import { useState } from "react";

const Language = () => {
  const [isLanguageListShown, setIsLanguageListShown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [currentLanguageFlag, setCurrentLanguageFlag] = useState('https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg');

//   function handleCurrentLanguageClick() {
//     setIsLanguageListShown(!isLanguageListShown);
//   }

//   function handleLanguageLinkClick(event) {
//     event.preventDefault();
//     setCurrentLanguage(event.target.innerHTML);
//     setIsLanguageListShown(false);
//   }
console.log('fffff');
  return (
  
    <div className="language-switcher">
        {/* <button onClick={()=>{
        console.log('hi');
        setCurrentLanguage('english')
        setCurrentLanguageFlag('https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg')
      }}>hi</button> */}
    <a href="#" className="current-language toggle-btn" id="toggleBtn">
      <img src={currentLanguageFlag} alt="English flag"/>
      {currentLanguage}
      <i className="fas fa-angle-down"></i>
    </a> 
  
  
    <ul className="my-list language-list" id="myList">
      <li >
        <a href="#" id="language-link1" data-lang="fr">
          <img src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg" alt="French flag"/>
          english
        </a>
      </li>
      <li onClick={()=>{
        console.log('hi');

        setCurrentLanguage('francais')
        setCurrentLanguageFlag('https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg')
      }}>
        <a href="#" className="language-link2" data-lang="fr">
          <img src="https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg" alt="French flag"/>
          Français
        </a>
      </li>
    </ul>
    
  </div>
 
  );
}

export default Language;
