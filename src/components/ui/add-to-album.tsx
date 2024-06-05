import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { FolderPlus } from "./icons/folderPlus"
import { useState } from "react"
import { SearchResults } from "./../../app/gallery/page"
import { addImgaeToAlbum } from "./actions"
 
export function AddToAlbum({image, onClose}: {image: SearchResults; onClose: () => void}) {
    const [albumName, setAlbumName] = useState("")
    const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={ (newOpenState) => {
      setOpen(newOpenState)
      if (!newOpenState){
        onClose()
      }
    }}
    >
      <DialogTrigger>
        <Button variant="ghost">
            <FolderPlus/>              
            Add to Album
        </Button>        
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add To An Album</DialogTitle>
          <DialogDescription>
            Type the name of an album you want to move this image to.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
             Album
            </Label>
            <Input onChange={(e) => setAlbumName(e.currentTarget.value)} id="album-name" value={albumName} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={async() => {
            onClose()
            setOpen(false)
            await addImgaeToAlbum(image, albumName)
          }} 
          type="submit"
          >Add to Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}