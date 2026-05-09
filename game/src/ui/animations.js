export function flipAnimation(el){

    if(!el)
        return

    el.animate(

        [

            {
                transform:
                'rotateY(0deg)'
            },

            {
                transform:
                'rotateY(180deg)'
            }
        ],

        {
            duration:250
        }
    )
}