export type Dog = {
    name: string,
    imageLink: string
}

// raw data from the api
export type DogData = {
    name: string,
    image_link: string
}

export function mapDog(dogData: DogData): Dog{
    return {
        name: dogData.name,
        imageLink: dogData.image_link
    }
}