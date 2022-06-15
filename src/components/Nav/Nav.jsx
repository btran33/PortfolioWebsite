import { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineCode, AiOutlinePhone } from 'react-icons/ai'

const Nav = () => {
  const [activeNav, setNav] = useState('#');

   var isScroll;

   window.addEventListener('scroll', () => {
      window.clearTimeout(isScroll);
      document.getElementById('navbar').style.opacity = 1;
      isScroll = setTimeout(() => {
                  document.getElementById('navbar').style.opacity = 0;
               }, 4000);
   }, false)

   window.addEventListener('mouseover', () => {
      document.getElementById('navbar').style.opacity = 1;
   }, false);

  return (
    <nav id='navbar' className='navbar'>
      <a href="#" 
         onClick={() => setNav("#")}
         className={activeNav === '#' ? 'active': ''}> <AiOutlineHome /> </a>
      
      <a href="#about" 
         onClick={() => setNav("#about")}
         className={activeNav === '#about' ? 'active': ''}> <AiOutlineUser /> </a>
      
      <a href="#experience"
         onClick={() => setNav("#experience")}
         className={activeNav === '#experience' ? 'active' : ''}> <AiOutlineCode /> </a>
      
      {/* <a href="#services"
         onClick={() => setNav("#services")}
         className={activeNav === '#services' ? 'active' : ''}> <RiServiceLine /> </a> */}
      
      <a href="#portfolio"
         onClick={() => setNav("#portfolio")}
         className={activeNav === '#portfolio' ? 'active' : ''}> <AiOutlineProject /> </a>
      
      <a href="#contact"
         onClick={() => setNav("#contact")}
         className={activeNav === '#contact' ? 'active' : ''}> <AiOutlinePhone /> </a>
    </nav>
  )
};


export default Nav