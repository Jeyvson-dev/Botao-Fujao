$('#no').on('mouseenter', (e)=>{

    $(e.target).animate({
    
        'margin-right': Math.random() *30+'%',
        'margin-bottom':Math.random() * 30+'%',
        'margin-top': Math.random() * 30+'%',
        'margin-left': Math.random() * 30+'%',

    },90)

})

$('#yes').on('click',()=>{

    alert('Parabéns Junbinha, você será redirecionado para o vídeo, BONS ESTUDOS!!')

    window.open('https://www.youtube.com/watch?v=6OIADpFImtc&list=PLJ4lbwalqv3Eaiay2pCeU_QU6vb-Hz989')

})