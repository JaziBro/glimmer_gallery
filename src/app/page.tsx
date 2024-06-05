"use client"

import { useState } from 'react'
import { CldUploadButton, CldUploadWidgetResults } from 'next-cloudinary'
import { CldImage } from 'next-cloudinary'
import { Button } from "./../components/ui/button"



export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
}

export default function Page () {
  const [imageId, setImageId] = useState("")
  return (
    <div className='flex flex-col items-center justify-between p-24 '>
      <Button variant="secondary">
        <CldUploadButton
        onUpload={(result: CldUploadWidgetResults) => {
          if (result.info && typeof result.info !== 'string') {
            console.log(result.info.public_id);
            }
          }}
          uploadPreset='obae9wqy'
        />
      </Button>

      {imageId && (
        <CldImage
          src= {imageId}
          width="400"
          height="300"
          alt="Description of this img"
          sizes="100vw"
        />
      )}
    </div>
  )
}

