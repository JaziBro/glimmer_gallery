"use client"

import { SearchResults } from "../../gallery/page"
import { CloudinaryImage } from "../../../components/ui/cloudinary-image"
import { ImageGrid } from "../../../components/ui/image-grid"

export default function AlbumGrid({images}: {images: SearchResults[]} ) {
   return (
        <ImageGrid
            images={images}
            getImage={(imageData: SearchResults) => {
                return (
                    <CloudinaryImage
                        key= {imageData.public_id}
                        imageData= {imageData}
                        width= "400"
                        height= "300"
                        alt= "an img"
                    />
                )
            }}
        />     
    )
}
