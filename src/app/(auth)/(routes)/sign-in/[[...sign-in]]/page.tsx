import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <main>
        <center>
          <div className="mt-16"> <SignIn /></div>
       
        </center>
    </main>
  )
}