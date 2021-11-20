console.log('Subscribing to all multireddits...');

// Setting a counter to 0 to keep track of all the subreddits that are being subscribed to
let count = 0;

function subscribeNext() {
    // Find the first visible "join" button in the list of subreddits
    const firstJoinButton = document.querySelector('.subscription-box a.add.active');

    // If a join button was found, proceed to the following instructions
    if (firstJoinButton) {
        // Click on the join button. This turns it into a "leave" button so it won't be found again next round
        nextSub.click();

         // Add 1 to the counter of subscribed subreddits
        count++;

        // Wait a second, and then start from the top to try to find and click the next join button
        setTimeout(subscribeNext, 1000);

    // If no join button was found the script is considered done. Log a message with the total amount we counted.
    } else {
        console.log(`Subscribed to ${count} subreddits!`);
    }
}

// Start
subscribeNext();