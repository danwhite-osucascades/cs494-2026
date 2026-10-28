export async function GET() {

    const data = await getAllTags()

    return Response.json({tags: data})
    
}


async function getAllTags(){
    const API_KEY = process.env.LASTFM_API_KEY
    const URL = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptags&api_key=${API_KEY}&format=json`
    const response = await fetch(URL)
    const data = await response.json()

    const tags: string[] = data.toptags.tag.map((tag: {name: string})=> tag.name)

    return tags
}