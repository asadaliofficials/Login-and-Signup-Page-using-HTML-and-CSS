var buttons = document.getElementsByTagName("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {


        // Check which button was clicked
        if (this.textContent.trim() === "Sign Up") {
            // Code for "Sign Up" button
            document.getElementById('heading').innerText = "Sign Up";
    
            document.getElementById('name').style.display = 'block';
            document.getElementById('para').innerHTML = "Password Suggestions <span>Click Here!</span>";
            document.getElementById('para').style.transform = 'translateX(-30px)';

            // Styling for buttons
            const secondButton = document.querySelector('#buttons > :nth-child(2)');
            secondButton.style.backgroundColor = '#e8e8e8';
            secondButton.style.color = '#868686';
            const firstButton = document.querySelector('#buttons > :nth-child(1)');
            firstButton.style.backgroundColor = 'green';
            firstButton.style.color = 'white';

            const buttons = document.querySelector('#buttons');
            buttons.style.marginTop = '66px';

            // Reset form height and transition class
            document.getElementById('form').style.maxHeight = '362px';


        } else {
            // Code for "Sign In" button
            document.getElementById('heading').innerText = "Sign In";
            document.getElementById('name').style.display = 'none';
            document.getElementById('para').innerHTML = "Forget Password <span>Click Here</span>";
            document.getElementById('para').style.transform = 'translateX(-50px)';

            // Styling for buttons
            const firstButton = document.querySelector('#buttons > :nth-child(1)');
            firstButton.style.backgroundColor = '#e8e8e8';
            firstButton.style.color = '#868686';
            const secondButton = document.querySelector('#buttons > :nth-child(2)');
            secondButton.style.backgroundColor = 'green';
            secondButton.style.color = 'white';

            const buttons = document.querySelector('#buttons');
            buttons.style.marginTop = '145px';


        }
    });
}
