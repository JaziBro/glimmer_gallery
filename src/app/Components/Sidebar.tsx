import { Button } from "../../components/ui/button"
import { Image } from "lucide-react"
import Link from "next/link"
import Heart from "../../components/ui/icons/heart"
import cloudinary from "cloudinary"


export type Folder = {name: string; path: string}

 export async function Sidebar() {
  const {folders} = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  }


  return (
    <div className="w-48">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="">         
            <Button variant="ghost" className="w-full justify-start ">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                  <Link href="/Gallery">Gallery</Link>
            </Button>         
            <Button variant="ghost" className="w-full justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/></svg>
               <Link href="/Albums">Albums</Link> 
            </Button>
            {folders.map(folder => (
            <Button key={folder.name} className="w-full justify-start" variant="ghost">
              <Link className="pl-4" href={`/Albums/${folder.path}`}>{folder.name}</Link> 
            </Button>
          ))}
            <Button variant="ghost" className="w-full justify-start">
             <Heart className="fill-white"/>
               <Link href="/Favorites">Favorites</Link> 
            </Button>
          </div>
        </div>
      </div>
    </div>

  )
}