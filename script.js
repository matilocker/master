const contenedor = document.querySelector("#contenedor")

class Clothing {
    image = ""

    constructor(image) {
        this.image = image;
        
    }

    render() {
        const jpg = document.createElement('img')
        jpg.src = this.image;
        return jpg;
    }
}

const mifuncion = async () => {
    //console.log("x1");
    const response = await fetch("https://raw.githubusercontent.com/matilocker/master/master/tienda.json");
    const data = await response.json();

    for (let ropa of data) {

        let art = new Clothing(ropa.image);
        const arti = art.render();
        contenedor.appendChild(arti)
    }

    //const jsonString = JSON.stringify(data);
    //const jsonJSON = JSON.parse(jsonString);

    //console.log(jsonString);
    //console.log(jsonJSON);
    //console.log("x2")
}

mifuncion();