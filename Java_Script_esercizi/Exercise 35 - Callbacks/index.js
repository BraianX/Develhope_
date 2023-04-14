function repeatHello(callback) {
    setInterval(() => callback(), 1000);
    setTimeout(() => {
        console.log("stop");
        clearInterval(id)
    }, 5000);
}

function printHello() {
    console.log("hello");
}

repeatHello(printHello);
