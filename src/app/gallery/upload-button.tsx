"use client"

import { Button } from "../../components/ui/button";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import { useRouter } from "next/navigation";

export default function UploadButton() {
    const router = useRouter()
    return (
        <div>
            <Button variant="secondary">
                <CldUploadButton
                    onUpload={(result: CldUploadWidgetResults) => {
                    //  if (result.info && typeof result.info !== 'string') {
                    //   console.log(result.info.public_id);
                    //  }
                    setTimeout(() => {
                        router.refresh()
                    }, 1000)
                   
                    }}
                    uploadPreset='obae9wqy'
                /> 
            </Button>           
        </div>
    )
}
