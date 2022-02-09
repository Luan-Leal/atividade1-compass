export default function Login() {
  var usuario = document.querySelector('#user')
  var senha = document.querySelector('#senha')
  var loginPage = document.querySelector(".login-page") 
  var homePage = document.querySelector(".segunda-pagina")  
  var button  = document.querySelector(".botao-login button")
  
  button.addEventListener("click", () => {
    if (usuario.value == "a" && senha.value == "a") { 
      homePage.style.display = "block" 
      loginPage.style.display = "none"
      document.title = "Login Compass"
    }else{
      alert("Login/Senha incorreto")
      document.title = "Home Compass"
    }
  }) 
}
