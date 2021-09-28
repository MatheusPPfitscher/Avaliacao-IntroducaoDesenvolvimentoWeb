candidatoMatheus = {
    sobre: {
        nome: "Matheus Petry Pfitscher",
        endereço: "Rua Desenvolvimento em JavaScript, 2021. São Leopoldo - RS",
        email: "matheusppfitscher@outlook.com",
        telefone: "(99) 99999-9999",
        descricao: `O que me define é uma inesgotável curiosidade pela tecnologia e novos
         aprendizados nas áreas da computação, física e engenharia. Há tambem uma leve obsessão
          por games de construção e sobrevivencia.`,
        redeSociais: [{
            perfil: "https://www.linkedin.com/in/matheus-petry-pfitscher-25686455/",
            img: "https://image.flaticon.com/icons/png/512/145/145807.png",
        },
        {
            perfil: "https://t.me/MatheusPetryPfitscher",
            img: "https://image.flaticon.com/icons/png/512/2111/2111646.png",
        },
        {
            perfil: "https://github.com/MatheusPPfitscher",
            img: "https://image.flaticon.com/icons/png/512/733/733609.png",
        }]
    },
    conhecimentos: ["JavaScript", "HTML", "CSS", "Bootstrap", "Python", "PowerShell", "C para Embarcados", "Office 365"],
    objetivos: {
        pessoal: `Estar em uma empresa onde a gestão seja uma liderança inspiradora,
        onde haja um caminho claro de crescimento profissional e onde 
        minhas contribuições sejam importantes à empresa e sejam reconhecidas como tal.`,
        profissional: `Manter a rotina de estudos constantes, procurar oportunidades para atuar nas áreas
         de desenvolvimento Back-End ou DevOps.`,
    },
}

var paginaAtual = ""

function resaltaBotao() {
    let divBotoes = document.getElementById("menuTexto")
    let sobreBotao = divBotoes.querySelector('[name=sobre]')
    let conhecimentosBotao = divBotoes.querySelector('[name=conhecimentos]')
    let objetivosBotao = divBotoes.querySelector('[name=objetivos]')
    switch (paginaAtual) {
        case 'sobre':
            sobreBotao.style.color = 'Cornsilk'
            conhecimentosBotao.style.color = 'rgba(218, 169, 149, 255)'
            objetivosBotao.style.color = 'rgba(218, 169, 149, 255)'
            break
        case 'conhecimentos':
            sobreBotao.style.color = 'rgba(218, 169, 149, 255)'
            conhecimentosBotao.style.color = 'Cornsilk'
            objetivosBotao.style.color = 'rgba(218, 169, 149, 255)'
            break
        case 'objetivos':
            sobreBotao.style.color = 'rgba(218, 169, 149, 255)'
            conhecimentosBotao.style.color = 'rgba(218, 169, 149, 255)'
            objetivosBotao.style.color = 'Cornsilk'
            break
    }
}

function sobre(candidato = candidatoMatheus) {
    paginaAtual = "sobre"
    let nomeCompleto = candidato.sobre.nome.toUpperCase().split(" ")
    let conteudoPrincipal = document.getElementById("conteudoPrincipal")
    let conteudo = `<div id="wrapper"><header>
    <h1><strong>${nomeCompleto[0]}</strong> ${nomeCompleto[1]} ${nomeCompleto[2]}</h1>
     <h2> ${candidato.sobre.endereço.toUpperCase()}. TELEFONE ${candidato.sobre.telefone} <span>${candidato.sobre.email.toUpperCase()}</span> </h2>
     </header>
     <section class= "textoPrincipal">
    <p>${candidato.sobre.descricao}</p>
    </section></div>`
    conteudoPrincipal.innerHTML = conteudo
    ondeEncontrar(candidato)
    resaltaBotao()
}

function ondeEncontrar(candidato) {
    let conteudoPrincipal = document.getElementById("conteudoPrincipal")
    conteudo = '<footer id="redesSociais">'
    for (let rede of candidato.sobre.redeSociais) {
        conteudo += `
        <div class="botaoSocial">
            <a href="${rede.perfil}">
                <img src="${rede.img}" alt="">
            </a>
        </div>`
    }
    conteudo += '</footer>'
    conteudoPrincipal.innerHTML += conteudo
}

function conhecimentos(candidato = candidatoMatheus) {
    paginaAtual = "conhecimentos"
    let conteudoPrincipal = document.getElementById("conteudoPrincipal")
    let conteudo = `<div id="wrapper"><section class= "textoPrincipal">
    <h2>Conhecimentos:</h2><ul>`
    for (let item of candidato.conhecimentos) {
        conteudo += `<li><p>${item}</p></li>`
    }
    conteudo += `</ul></section"></div">`
    conteudoPrincipal.innerHTML = conteudo
    resaltaBotao()
}

function objetivos(candidato = candidatoMatheus) {
    paginaAtual = "objetivos"
    let conteudoPrincipal = document.getElementById("conteudoPrincipal")
    let conteudo = `<div id="wrapper"><section class= "textoPrincipal">`
    conteudo += `<h2>Objetivos Pessoais:</h2><p>${candidato.objetivos.pessoal}</p>
    <h2>Objetivos Profissionais:</h2><p>${candidato.objetivos.profissional}</p>`
    conteudoPrincipal.innerHTML = conteudo
    resaltaBotao()
}

window.onload = sobre()