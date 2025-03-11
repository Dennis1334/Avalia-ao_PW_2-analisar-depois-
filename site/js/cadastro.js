function cadastrar(event) {
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var email = document.getElementById('email').value;

    if (usuario == 'admin' && senha == 'admin' && email == 'admin@admin.com') {
        Swal.fire({
            title: 'Login realizado!',
            text: 'Bem-vindo, ' + usuario + '!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "../index.html";
            }, 100); 
        });
    } else {
        Swal.fire({
            title: 'Erro!',
            text: 'Usuário, senha ou email incorretos.',
            icon: 'error',
            confirmButtonText: 'Tentar novamente'
        });
    }
}