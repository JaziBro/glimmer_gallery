"use client"

import { CldImage } from "next-cloudinary"
import cloudinary from "cloudinary"
import { CloudinaryImage } from "../../components/ui/cloudinary-image"
import { SearchResults } from "../gallery/page"
import { ForceRefresh } from "../../components/ui/force-refresh"
import { useEffect, useState } from "react"
import { ImageGrid } from "../../components/ui/image-grid"

export default function FavoritesList({initialResources}: {initialResources: SearchResults[]} ) {
    const [resources, setResources] = useState(initialResources)

    useEffect(() => {
        setResources(initialResources)
    }, [initialResources])
  
    return (
        <ImageGrid
            images={resources}
            getImage={(imageData: SearchResults) => {

            return (
            <CloudinaryImage
                key={imageData.public_id}
                imageData={imageData}
                width="400"
                height="300"
                alt="an image of something"
                onUnheart={(unheartedResource) => {
                setResources((currentResources) =>
                    currentResources.filter(
                    (resource) =>
                        resource.public_id !== unheartedResource.public_id
                )
              );
            }}
          />
        );
      }}
    />
  );
}

