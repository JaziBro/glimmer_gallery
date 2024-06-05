import UploadButton from "./upload-button"
import cloudinary from "cloudinary"
import GalleryGrid from "./gallery-grid"
import { SearchForm } from "./search-form"

export type SearchResults = {
  public_id: string,
  tags: string[]
}

export default async function Gallery({searchParams: {search}}: {searchParams: {search: string}}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
    .sort_by('created_at','desc')
    .with_field("tags")
    .max_results(70)
    .execute()) as {resources: SearchResults[]}
  
    return (
      <section>
        <div className="flex flex-col gap-10">
          <div className="mt-10 ml-3 flex justify-between">
            <h1 className="font-semibold text-3xl">GALLERY</h1>
            <UploadButton/>
          </div>

           <SearchForm
            initialSearch={search}
           />

          <GalleryGrid images={results.resources}/>
        </div>    
      </section>      
    )
}

