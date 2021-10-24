import { FC } from "react";

interface MenuItem {
    id: number, Name: string, Icon: any
}

// interface Propsdata extends Array<MenuItem>{}
interface Propsdata {
    data:Array<MenuItem>
}



const Sidebar:FC<Propsdata> = (props) => {
return <section className="object-left dark:bg-BleuADdark bg-BleuAD text-white h-full shadow-2xl ">
    <ul className="pt-1 ">
    {props.data.map(elemnt =>(
        <li key={elemnt.id} className="group ring-1 hover:ring-4  hover:bg-opacity-10 hover:bg-white ring-white ring-opacity-20 m-auto items-center justify-center h-12 w-12 shadow rounded-full flex relative">
        {elemnt.Icon}
        <div className="bg-gray-900 ring-1 ring-white rounded-md w-40 absolute top-4 left-16 opacity-0 group-hover:opacity-100 transition duration-700">
            {elemnt.Name}
        </div>
        </li>
    ))}
        

    </ul>
</section>
}
export default Sidebar;