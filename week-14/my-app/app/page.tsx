
import axios from "axios";
async function getUserData(){
  const res = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  return res.data
}
// async  component -> only in server component
export default async function Home() {
  const userDetails = await getUserData();
  return <div className="text-center pt-[10%] text-[2rem] ">Hello world
  <br />
  <div className="flex flex-col justify-center p-4">
        <div className="flex justify-center">
            <div className="border p-3 rounded-xl">
                <div>
                    Name: {userDetails?.name}
                </div>
                
                {userDetails?.email}
            </div>
        </div>
    </div>
  </div>
}
