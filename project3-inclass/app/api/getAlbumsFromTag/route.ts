import { NextRequest } from "next/server"

import { Album } from "@/types/album"

type AlbumData = {
    name: string,
    artist: {name: string},
    image: {"#text": string}[]
}

export async function GET(request: NextRequest){

    const tag = request.nextUrl.searchParams.get("tag")

    const data = await getAlbumsFromTag(tag ?? "")

    return Response.json({albums: data})


}

async function getAlbumsFromTag(tag: string){
    const API_KEY = process.env.LASTFM_API_KEY
    const URL = `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${tag}&api_key=${API_KEY}&format=json`

    const response = await fetch(URL)
    const data = await response.json()

    const albums: Album[] = data.albums.album.map((album: AlbumData)=>
        {return {name: album.name, artist: album.artist.name, imageUrl: album.image[album.image.length-1]["#text"]}})

    return albums
}