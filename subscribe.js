console.log('Subscribing to all multireddits...');

let count = 0;

function subscribeNext() {
    const nextSub = document.querySelector('.subscription-box a.add.active');

    if(nextSub) {
        console.log(nextSub.parentElement.nextSibling.text)
        nextSub.click();
        count++;
        setTimeout(subscribeNext, 1000);
    } else {
        console.log(`Subscribed to ${count} subreddits!`);
    }
}

subscribeNext();