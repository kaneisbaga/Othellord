export async function savePlayerData(data){

    try{

        await fetch(

            localStorage.getItem(
                'google-script-url'
            ),

            {
                method:'POST',

                mode:'no-cors',

                headers:{
                    'Content-Type':
                    'application/json'
                },

                body:JSON.stringify(data)
            }
        )
    }

    catch(err){

        console.log(err)
    }
}