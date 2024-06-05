"use client";

import Heart from "./icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { ComponentProps, useState, useTransition } from "react";
import FullHeart from "./icons/full-heart";
import { SearchResults } from "../../app/gallery/page";
import { setAsFavoriteAction } from "../../app/gallery/actions";
import { ImageMenu } from "./image-menu";

export function CloudinaryImage(props: {imageData: SearchResults; onUnheart?: (unHeartedResource: SearchResults) => void;} & Omit<CldImageProps, 'src'> ) {
    const [transition, startTransition] = useTransition()
    const {imageData, onUnheart} = props
    const [isFavorite, setIsFavorite] = useState(
        imageData.tags.includes("favorite")
    )

    return (
        <div className="relative">
            <CldImage {...props} src={imageData.public_id} />
            {isFavorite ? (
                <FullHeart
                    onClick={() => {
                        onUnheart?.(imageData)
                        setIsFavorite(false)
                        startTransition(() => {
                            setAsFavoriteAction(imageData.public_id, false)
                        })
                    }}
                    className= "absolute top-2 right-2 cursor-pointer"
                />
            ) : (   
                <Heart
                    onClick={() => {
                      setIsFavorite(true)
                      startTransition(() => {
                          setAsFavoriteAction(imageData.public_id, true)
                        })
                    }}
                    className= "absolute top-2 right-2 cursor-pointer "
                />
            ) }
            <ImageMenu image={imageData}/>
        </div>
    )
}
