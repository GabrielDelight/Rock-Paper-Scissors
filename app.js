
window.addEventListener('load', () => {
    let score1 = 0;
    let score2 = 0
    document.getElementById('selectType').addEventListener('click', () => {
        
        let imgArr1 = ['img/rock.png', 'img/paper.png', 'img/scissors.png']
        let randomImg = Math.floor(Math.random() * 3);
        let newImg1 = imgArr1[randomImg];
        document.getElementById('playerImg').src = newImg1

        // Second area for game
        document.querySelector('#playButton').addEventListener('click', () => {
            
           

            // Generate 
            let imgArr2 = ['img/rock.png', 'img/paper.png', 'img/scissors.png']
            let randomImg2 = Math.floor(Math.random() * 3);
            let newImg2 = imgArr2[randomImg2];
            document.getElementById('computerImg').src = newImg2
            let actionElme = document.getElementById('action')

            
            

            // Working with player 1
            // Rock against scissors
            if(newImg1 === imgArr1[0] && newImg2 === imgArr2[2]){
                // console.log('You won with rock')
                actionElme.innerHTML = 'You won with rock'
                score1 += 1
                
            }
            // Paper agianst roch
            else if(newImg1 === imgArr1[1] && newImg2 === imgArr2[0]){
                // console.log('You won with paper')
                actionElme.innerHTML = 'You won with paper'
                score1 += 1

            }
            // Scissors agains paper
            else if(newImg1 === imgArr1[2] && newImg2 === imgArr2[1]){
                // console.log('You won with scissors')
                actionElme.innerHTML = 'You won with scissors'
                score1 += 1
            }
            

        
            // Working with player 2

             if(newImg2 === imgArr2[0] && newImg1 === imgArr1[2]){
                // console.log('You lost by rock')
                actionElme.innerHTML = 'You lost by rock'
                score2 += 1
            }

            else if(newImg2 === imgArr2[1] && newImg1 === imgArr1[0]){
                // console.log('You lost by Paper')
                actionElme.innerHTML = 'You lost by Paper'
                score2 += 1
            }

            else if(newImg2 === imgArr2[2] && newImg1 === imgArr1[1]){
                // console.log('You lost by scissors')
                actionElme.innerHTML = 'You lost by scissors'
                score2 += 1
            }



            // // for same arrays
            if(newImg1 === imgArr1[0] && newImg2 === imgArr2[0]){
                actionElme.innerHTML = 'Place a diffrent value'
                return false
            }

            if(newImg1 === imgArr1[1] && newImg2 === imgArr2[1]){
                actionElme.innerHTML = 'Place a diffrent value'
                return false
            }

            if(newImg1 === imgArr1[2] && newImg2 === imgArr2[2]){
                actionElme.innerHTML = 'Place a diffrent value'
                return false
            }



            if(score1 === 10){
                document.querySelector('.counter').style.display = 'block'
                document.getElementById('player1name').textContent = 'WINNER'                
                document.getElementById('globalScore').textContent = 'WINNER'                
                document.getElementById('highScore').textContent =  `High score: ${score1}`
                return
                
            }else if( score2 === 10){
                document.querySelector('.counter').style.display = 'block'
                document.getElementById('player2name').textContent = 'YOU LOOSE'
                document.getElementById('globalScore').textContent = 'YOU LOOSE'                
                document.getElementById('highScore').textContent =  `High score: ${score1}`
                return

            }

            document.getElementById('playerScore1').textContent = score1 
            document.getElementById('playerScore2').textContent = score2

            
               

            // setTimeout(()=> {
            //     document.getElementById('computerImg').src = 'img/untitled.png'
            //     document.getElementById('playerImg').src = 'img/untitled.png'
            // },6000)

            
        })
    })


})
