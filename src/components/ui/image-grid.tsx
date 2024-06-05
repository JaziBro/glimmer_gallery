"use client"

import { SearchResults } from "../../app/gallery/page";
import { ReactNode } from "react";

export function ImageGrid({images, getImage}: {images: SearchResults[], getImage: (imageData: SearchResults) => ReactNode} ) {
    const MAX_COLUNMS = 4
    function getColunms(colIndex: number) {
        return images.filter(
          (resource, idx) => idx % MAX_COLUNMS === colIndex
        )
    }
      
    return (
        <div className="grid grid-cols-4 gap-4">
            {[getColunms(0),getColunms(1),getColunms(2),getColunms(3)].map(
              (colunm, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  {colunm.map(getImage)}
               </div>
              )
            )}           
         </div>
    )

}