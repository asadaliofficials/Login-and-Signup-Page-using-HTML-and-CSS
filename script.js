var buttons = document.getElementsByTagName("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", async function (event) {

        document.getElementById('heading').classList.remove("h1Change");
        document.getElementById('under-line').classList.remove("h1Change");
        void document.getElementById('heading').offsetWidth;
        void document.getElementById('under-line').offsetWidth;
        document.getElementById('heading').classList.add("h1Change");
        document.getElementById('under-line').classList.add("h1Change");



        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.add("disabled");
        };
        this.classList.remove("disabled");



        // Check which button was clicked
        if (this.textContent.trim() === "Sign Up") {
            // Code for "Sign Up" button
            document.getElementById('heading').innerText = "Sign Up";

            // document.getElementById('name').style.maxHeight = '44px';
            document.getElementById('name').classList.remove('hidden'); // To show again

            document.getElementById('para').innerHTML = "Password Suggestions <span>Click Here!</span>";
            document.getElementById('para').style.transform = 'translateX(-30px)';



        } else {
            // Code for "Sign In" button
            document.getElementById('heading').innerText = "Sign In";
            document.getElementById('name').classList.add('hidden'); // To hide

            document.getElementById('para').innerHTML = "Forget Password <span>Click Here</span>";
            document.getElementById('para').style.transform = 'translateX(-50px)';
        }
    });
}
