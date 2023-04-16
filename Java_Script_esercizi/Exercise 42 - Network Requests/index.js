const titolo = document.querySelector("#titolo");
const contenuto = document.querySelector("#contenuto");
const form = document.querySelector('form');

// form.addEventListener('submit',(event) => {
//     event.preventDefault();
//     const title = titolo.value;
//     const content = contenuto.value;
//     //console.log(contenuto);
//     const obj = {
//         testo: title,
//         content: content
//     };

//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(obj)
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
// })

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = titolo.value;
    const content = contenuto.value;
    //console.log(contenuto);
    const obj = {
        testo: title,
        content: content
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error(error);
    }
})