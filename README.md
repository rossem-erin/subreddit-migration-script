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

1. Log out of your old account
2. Log in to your new account
3. Open the browser's console (Ctrl+Shift+J on Windows, Cmd+Option+J on Mac)
4. Paste the code from [subscribe.js](subscribe.js) and press Enter
5. Leave the tab open until the console logs 'Subscribed to X subreddits!' (where X will be replaced with the subreddit count)
6. Refresh the page. All subreddits in the sidebar should now show a red "leave" button. If some are still green, repeat steps 4-6 until all subreddits are subscribes to.

It will take one second per subreddit to subscribe, otherwise reddit will think the script goes too fast and it doesn't work.