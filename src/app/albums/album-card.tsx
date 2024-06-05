import * as React from "react"
import { Button } from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Folder } from "./page"
import Link from "next/link"

export function ALbumCard({folder}: {folder: Folder}) {
  return (
    <Card className="bg-black">
      <CardHeader className="bg-black">
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>All your images of {folder.name}.</CardDescription>
      </CardHeader>
      <CardContent className="bg-black"></CardContent>
      <CardFooter className="flex justify-between bg-black">
        <Button><Link href={`/Albums/${folder.name}`}>View Album</Link></Button>
      </CardFooter>
    </Card>
  )
}
