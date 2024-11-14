
            // Declarando os botões 
            var button1 = document.getElementById('button1');
            var button2 = document.getElementById('button2');
            var button3 = document.getElementById('button3');
            var button4 = document.getElementById('button4');
            // Declarando os cards 
            var card1 = document.querySelector('.card1');
            var card2 = document.querySelector('.card2');
            var card3 = document.querySelector('.card3');
            var card4 = document.querySelector('.card4');
        
        
            // primeiro card 
            button1.addEventListener('click', function () {
                card1.classList.toggle('active');
                card2.classList.remove('active');
                card3.classList.remove('active');
                card4.classList.remove('active');
        
                // extras não necessarios 
                if (card1.classList.contains('active')) {
                    return button1.textContent = '-';
                }
                button1.textContent = '+';
                // fim deles 
            });
                // FIM 
          
            // Segunda Card 
        button2.addEventListener('click', function () {
            card2.classList.toggle('active');
            card1.classList.remove('active');
            card3.classList.remove('active');
            card4.classList.remove('active');
        
        // extras não necessarios 
        if (card2.classList.contains('active')) {
            return button2.textContent = '-';
        }
        button2.textContent = '+';
        // fim deles 
        });
                    // fim 
        
            // Terceira card 
        button3.addEventListener('click', function () {
        card3.classList.toggle('active');
        card1.classList.remove('active');
        card2.classList.remove('active');
        card4.classList.remove('active');
        
        // extras não necessarios 
        if (card3.classList.contains('active')) {
            return button3.textContent = '-';
        }
        button3.textContent = '+';
        // fim deles 
        });
            // fim 
        
                    // Ultimo card 
        button4.addEventListener('click', function () {
        card4.classList.toggle('active');
        card1.classList.remove('active');
        card2.classList.remove('active');
        card3.classList.remove('active');
        
        
        
        // extras não necessarios 
        if (card4.classList.contains('active')) {
            return button4.textContent = '-';
        }
        button4.textContent = '+';
        // fim deles 
        });
                // FIM DO ultimo card 
        