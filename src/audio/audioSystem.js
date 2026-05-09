const audioCache = {}

export function playSound(name){

    try{

        if(!audioCache[name]){

            audioCache[name] =
            new Audio(
                '/audio/' +
                name +
                '.mp3'
            )
        }

        const audio =
        audioCache[name].cloneNode()

        audio.volume = 0.5

        audio.play()
    }

    catch(err){

        console.log(err)
    }
}