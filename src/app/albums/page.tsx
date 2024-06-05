import cloudinary from "cloudinary"
import { ALbumCard } from "../albums/album-card"

export type Folder = {name: string; path: string}

export default async function Albums() {
  const {folders} = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  }

  return (
    <section>
      <div className="flex flex-col gap-10">
        <div className="mt-10 ml-3 flex justify-between">
          <h1 className="font-semibold text-3xl">ALBUMS</h1>
        </div>       

        <div className="grid grid-cols-3 gap-5">
          {folders.map((folder) => (
            <ALbumCard key={folder.path} folder= {folder}/>
          ))}
        </div>
      </div>    
    </section>      
  )
}
