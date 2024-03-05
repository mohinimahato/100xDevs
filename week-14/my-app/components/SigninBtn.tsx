'use client';
import axios from "axios";
export function SigninBtn(){
  
    return <div>
         <div className="pt-2">
                        <button 
                        onClick={()=>{
                            axios('http://localhost:3000/api/user', {
                                
                            })
                        }}
                        type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
                    </div>
    </div>
}
interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}