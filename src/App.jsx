import { useContext } from "react";
import { Link } from "react-router-dom";
import "./App.css"
import profile from "./assets/rafael.png"
import { Themecontext } from "./Theme";
function App() {
  const {theme, setMode} = useContext(Themecontext)
  
  const change = ()=>{
    let change = theme == 'Light'?'Dark':'Light' 
    setMode(change)   
    // console.log(change);
    
  }

  return (
    <main className = {` container  ${theme == 'Light'?'bg-[#c4b5fd] text-dark':'bg-dark text-white' }`}>
      <nav className=" hold gap-3 d-flex justify-content-end px-4 py-3">
        <div className={` rounded-pill px-3 py-2 shadow d-flex gap-3 ${theme == 'Light'?'bg-[#ddd6fe] ':'bg-slate-500' } `}>
          <div className="text-[#ec4899]">About</div>
          <div>Article</div>
          <div>Projects</div>
          <div>Speaking</div>
          <div><Link to={"/login"}>Log in</Link></div>
        </div>
        <button onClick={()=>change()}>
          <div><i className={`${theme == 'Light'?'fa fa-toggle-off ': 'fa fa-toggle-left '}`} aria-hidden="true"> </i> {theme} mode</div>
        </button>
      </nav>
      <main className=" py-5 px-5 ">
        <div className="shadow w-24 md:w-48   rounded-full ">
          <img className="w-24 h-24 md:w-48 md:h-auto  rounded-full mx-auto" src={profile} alt="" />
        </div>
        <div className="px-5 py-4 ">
          <h1 className="text-4xl font-bold">Software Developer who delivers best quality and
            scalable
            software for your business</h1>
          <p className="text-xl py-3">I'm Mubarokah, a highly skilled and motivated Nigeria based web developer who delivers best quality and
            scalable
            software for your business, passionate about designing websites that leave a positive
            impact on people, environment and the society.</p>
        </div>
      </main>
    </main>
  );
}

export default App;