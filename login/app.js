const btn = document.getElementById("btn")
   const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('password');




        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.querySelector('i').classList.toggle('fa-eye');
            this.querySelector('i').classList.toggle('fa-eye-slash');
        });

        btn.addEventListener("click", () =>{
    window.location.href = '../intro/index.html';
})