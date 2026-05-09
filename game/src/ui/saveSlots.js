export function saveSlot(slot,data){

    localStorage.setItem(

        'save-slot-' + slot,

        JSON.stringify(data)
    )
}

export function loadSlot(slot){

    const data =

    localStorage.getItem(
        'save-slot-' + slot
    )

    if(!data) return null

    return JSON.parse(data)
}