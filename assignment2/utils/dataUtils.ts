import { DataStringProperties, Planet, DataNumberProperties } from "@/types/planet"

export function sortObjectArrayByString(property: DataStringProperties, data: Planet[], ascending: boolean): Planet[] {
    const tmpObj = JSON.parse(JSON.stringify(data))
    tmpObj.sort((a: Planet, b: Planet) => {
        const nameA = a[property].toUpperCase()
        const nameB = b[property].toUpperCase()

        if (nameA < nameB) return ascending ? -1 : 1
        else if (nameA > nameB) return ascending ? 1 : -1

        return 0
    })

    return tmpObj
}

export function sortObjectArrayByNumber(property: DataNumberProperties, data: Planet[], ascending: boolean): Planet[] {
    const tmpObj = JSON.parse(JSON.stringify(data))

    const ascVal = ascending ? 1 : -1
    tmpObj.sort((a: Planet, b: Planet) => ascVal * (a[property] - b[property]))

    return tmpObj

}

export function filterObjectArrayByMinMax(property: DataNumberProperties, data: Planet[], min: number, max: number){
    return data.filter((planet)=>planet[property] >= min && planet[property] <= max)
}