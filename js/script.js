// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

var app = new Vue(
    {
        el: "#root",
        data: {
            message: "Messaggio da stampare in h1",
            image: "https://www.architetturaecosostenibile.it/images/stories/2016/promuoviamo-paesaggio-italiano.jpg"
        }
    }
)