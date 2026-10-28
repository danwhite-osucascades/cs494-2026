import { NextRequest } from "next/server"

import { Album } from "@/types/album"


type AlbumData = {
    artist: string,
    name: string,
    image: { "#text": string }[],
    tracks: { track: { name: string }[] },
    wiki: { summary: string }
    tags: { tag: { name: string }[] }
}

export async function GET(request: NextRequest) {

    const album = request.nextUrl.searchParams.get("album") ?? ""
    const artist = request.nextUrl.searchParams.get("artist") ?? ""

    const data = await getAlbumInfo(album, artist)

    return Response.json({ data: data })

}


async function getAlbumInfo(album: string, artist: string) {
    const API_KEY = process.env.LASTFM_API_KEY

    const URL = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${API_KEY}&artist=${artist}&album=${album}&format=json`

    const response = await fetch(URL)
    const data = await response.json()

    const albumData: AlbumData = data.album

    const albumObj: Album = {
        "name": albumData.name,
        artist: albumData.artist,
        imageUrl: albumData.image[albumData.image.length-1]["#text"],
        tracks: albumData.tracks.track.map((track)=>track.name),
        summary: albumData.wiki.summary,
        tags: albumData.tags.tag.map((tag)=>tag.name)
    }

    return albumObj


}