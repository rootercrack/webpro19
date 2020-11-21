function validate() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    
    if (username == "Rian" && password == 'rian10') {
        window.location = "Berhasil.html";
        alert("Login anda berhasil")
        return false
    }else {
        alert('Login Yang anda masukkan tidak berhasil')
        return false
    }
}
