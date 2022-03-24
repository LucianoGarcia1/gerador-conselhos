if(window.innerWidth <= "760"){
    const divisor = document.querySelector(".div");

    divisor.src = "assets/images/pattern-divider-mobile.svg";
}

const generate = () =>{
    const spineImg = document.querySelector(".spine");
    spineImg.classList.toggle("rounted");

    const content = document.querySelector(".content-p");
    const idContent = document.querySelector(".cId");

    content.innerHTML = "";
    idContent.innerHTML = "<h3>ADVICE<h3>"

    // APPEND PAI
    const append = (parent, child) =>{
        return parent.appendChild(child);
    }

    //APPEND FILHO
    const criarP = (tag, classe,) =>{
        const elemento = document.createElement(tag);
        elemento.classList.add(classe);

        return elemento;
    }

    //API
    const url = "https://api.adviceslip.com/advice"
    const apiConselhos = () =>{
        fetch(url,{
    
        }).then((response) => response.json())
        .then(function(data){
            console.log(data.slip);

            let adiviceP = data.slip.advice;
            let id = data.slip.id;

            let span = criarP("span", "id")
            span.innerText = `#${id}`

            let p = criarP("p", "texto");
            p.innerText = `"${adiviceP}"`;;

            append(idContent, span);
            append(content, p);

        })
        .catch(function(error){
            console.log("error");
        })
    }
    apiConselhos();
}

generate();