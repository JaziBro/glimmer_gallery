"use client"

import { Button } from "../../components/ui/button"
import { CldImage } from "next-cloudinary"
import { useState } from "react"

export default function edit({searchParams: {publicId}}: {searchParams: {publicId: string}}) {
    const [transformation, setTransformation] = useState< undefined | "generative-fill" | "blur" | "grayscale" | 'effects' | "pixelate">()

    return (
        <section>
            <div className="flex flex-col gap-10">
                <div className="mt-10 ml-3 flex justify-between">
                    <h1 className="font-semibold text-3xl">Edit {publicId}</h1>
                </div>
            </div>   

            <div className="flex gap-4">
                <Button variant="destructive" className="mt-10" onClick={() => setTransformation(undefined)}>Clear All</Button>
                <Button className="mt-10" onClick={() => setTransformation("blur")}>Apply Blur</Button>
                <Button className="mt-10" onClick={() => setTransformation("grayscale")}>Apply Grayscale</Button>
                <Button className="mt-10" onClick={() => setTransformation("effects")}>Apply Effects</Button>
                <Button className="mt-10" onClick={() => setTransformation("pixelate")}>Apply Pixelate</Button>
            </div>
           

            <div className="grid grid-cols-2 gap-12 mt-10">
                <CldImage
                    src={publicId}
                    width={400}
                    height={300}
                    alt="an img"
                />

                {transformation === "blur" && (
                    <CldImage 
                        src={publicId} 
                        width={1200} 
                        height={900} 
                        alt="an img of something" 
                        blur="800"
                    />
                )}
                {transformation === "grayscale" && (
                    <CldImage 
                        src={publicId} 
                        width={1200} 
                        height={900} 
                        alt="an img of something" 
                        grayscale
                    />
                )}
                 {transformation === "effects" && (
                    <CldImage 
                        src={publicId} 
                        width={1200} 
                        height={900} 
                        alt="an img of something" 
                        effects={
                            [
                                {
                                  background: 'green'
                                },
                                {
                                  gradientFade: true
                                },
                                {
                                  gradientFade: 'symetric,x_0.5'
                                }
                            ]}
                    />
                )}
                {transformation === "pixelate" && (
                    <CldImage 
                        src={publicId} 
                        width={1200} 
                        height={900} 
                        alt="an img of something" 
                        pixelate
                    />
                )}
            </div>
      </section>      
    )
}