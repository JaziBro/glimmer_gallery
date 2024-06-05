import cloudinary from "cloudinary"
import AlbumGrid from "./album-grid"
import { SearchResults } from "../../gallery/page"
import { ForceRefresh } from "../../../components/ui/force-refresh"


export default async function Gallery({
    params: {albumName}
}: {
    params: {
        albumName: string
    }
}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by('created_at','desc')
    .with_field("tags")
    .max_results(50)
    .execute()) as {resources: SearchResults[]}
  
    return (
      <section>
        <ForceRefresh/>

        <div className="flex flex-col gap-10">
          <div className="mt-10 ml-3 flex justify-between">
            <h1 className="font-semibold text-3xl">Album {albumName}</h1>
          </div>
          
          <AlbumGrid images={results.resources}/>
        </div>    
      </section>      
    )
}
