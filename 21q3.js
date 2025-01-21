function delayedMessage(message, delay, callback) {
    setTimeout(() => {
        console.log(message);
        if (callback) {
            callback();
        }
    }, delay);
}
delayedMessage("Hello, World!",10000, () => {
    console.log("Message has been printed!");
});
