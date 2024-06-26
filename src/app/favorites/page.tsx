import { CldImage } from "next-cloudinary"
import cloudinary from "cloudinary"
import { CloudinaryImage } from "../../components/ui/cloudinary-image"
import { SearchResults } from "../gallery/page"
import { ForceRefresh } from "../../components/ui/force-refresh"
import FavoritesList from "./favorites-list"


export default async function Favorites() {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image AND tags=favorite')
    .sort_by('created_at','desc')
    .with_field("tags")
    .max_results(30)
    .execute()) as {resources: SearchResults[]}
  
    return (
      <section>
        <ForceRefresh/>
        <div className="flex flex-col gap-10">
          <div className="mt-10 ml-3 flex justify-between">
            <h1 className="font-semibold text-3xl">YOUR FAVORITES</h1>
          </div>

          <FavoritesList initialResources={results.resources}/>        

        </div>    
      </section>      
    )
}

