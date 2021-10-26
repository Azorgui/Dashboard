import "./App.css";
import Sidebar from './Layout/Sidebar'
// import Navbar from "./Layout/NavBar";
import { BiCategory } from "react-icons/bi";
function App() {
  return (
    <div className="App">
      <div className="flex flex-row h-screen flex-wrap">
        <div className=" w-16">
        <Sidebar data={[{id:0 , Name:"Dashboard",Icon:    <BiCategory className="text-3xl m-auto" />}]}/>
        </div>
        <div className=" flex-auto flex flex-col">
          <div className="h-16 bg-gray-300">
qshgqjdshfdhgqfshgdfhsq
          </div>
          <div  className="flex-auto bg-gray-400 ">

          </div>
        </div>
      </div>
      {/* <Navbar /> */}
      {/* <Sidebar data={[{id:0 , Name:"Dashboard",Icon:    <BiCategory className="text-3xl m-auto" />}]}/> */}
    </div>
  );
}

export default App;
