# Autocremate
Easily switch to a new Reddit account by migrating your subreddits in one go.

Right now it's just a script you have to copy into your browser manually. I might turn this into a browser extension, please file a feature request under this repository's "Issues" section if you'd be interested in that.

## Instructions

### To export your subreddits
Create a multireddit all the subreddits you're subscribed to.

* Make sure you're logged in to your *old* account
* Go to https://old.reddit.com/subreddits (Note the old.reddit subdomain, www.reddit gives an incomplete multireddit)
* On the top of the right side there is a list of all your subreddits. Click the link at the top named "multireddit of your subscriptions"
* You are now sent to a multireddit that contains all your subscribed subreddits.
* Copy the address for later use

### To import your subreddits

* Log out of your old account
* Log in to your new account
* Make sure you have the browser's console open again
* Paste the code from [import.js](import.js) and press Enter