type Props = {
    label:string;
    name:string;
    type?:string;
    required?:boolean;    
}

export default function TesxtInput({label,name,type="text",required=true}:Props){
    
    return (
        <div className="mb-4 w-full">
            <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input type={type} id={name} name={name} required={required} className="w-full px-3 py-2 border border-gray-300 roundend-md shadow-sm focus:outline-none focus:ring-gray-700" />
        </div>
    )
}