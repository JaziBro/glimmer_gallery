"use client"
 
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import {Menu } from "../ui/icons/menu"
import { FolderPlus } from "./icons/folderPlus"
import { Button } from "../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "../../components/ui/dropdown-menu"
import { AddToAlbum } from "./add-to-album"
import { SearchResults } from "../../app/gallery/page"
import { useState } from "react"
import Link from "next/link"
import { Pencil } from "lucide-react"
 
export function ImageMenu({image}: {image: SearchResults}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="absolute top-2 left-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 h-8 p-0">
            <Menu/>
          </Button>
        </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem asChild  >
              <AddToAlbum image={image} onClose={() => setOpen(false)}/>
          </DropdownMenuItem>   
          <DropdownMenuItem asChild  >
          <Button variant="ghost" className="cursor-pointer flex justify-start pl-4">
            <Link  href={`/Edit?publicId=${encodeURIComponent(image.public_id)}`}>
              <Pencil className="mr-2 w-4 h-4"/>
                <h4>Edit </h4>                    
            </Link>
          </Button>
          </DropdownMenuItem>                
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}  