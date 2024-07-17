$('#no').on('mouseenter', (e)=>{

    $(e.target).animate({
    
        'margin-right': Math.random() *35+'%',
        'margin-bottom':Math.random() * 35+'%',
        'margin-top': Math.random() * 35+'%',
        'margin-left': Math.random() * 35+'%',

    },90)

})

$('#yes').on('click',()=>{

    alert('Parabéns Irmão de pedrinho, você será redirecionado para o vídeo, BONS ESTUDOS!!')

    window.open('https://www.youtube.com/watch?v=6OIADpFImtc&list=PLJ4lbwalqv3Eaiay2pCeU_QU6vb-Hz989')

})