# Migrate subreddits from one acount to another
Easily switch to a new Reddit account by migrating your subreddits in one go.

Right now it's just a script you have to copy into your browser manually. I might turn this into a browser extension if people would think that's useful.

Please leave feedback in the "Issues" section of this repository, or send them to [u/Rossem_erin](https://www.reddit.com/user/Rossem_erin/).

## Instructions

### Exporting your subreddits subscriptions
Create a multireddit of all the subreddits you're subscribed to.

1. Make sure you're logged in to your *old* account
2. Go to https://old.reddit.com/subreddits (Note the old.reddit subdomain, www.reddit gives an incomplete multireddit)
3. On the top of the right side there is a list of all your subreddits. Click the link at the top named "multireddit of your subscriptions"
4. You are now sent to a multireddit that contains all your subscribed subreddits.
5. Copy the address for later use

### Automatically subscribe to all subreddits in a multireddit

1. Log in to your new account
2. Go to the multireddit link you created in the previous step
3. Open the browser's console (Ctrl+Shift+J on Windows, Cmd+Option+J on Mac)
4. Paste the code from [subscribe.js](subscribe.js) and press Enter
5. Leave the tab open until the console logs 'Subscribed to X subreddits!' (where X will be replaced with the subreddit count)
6. Refresh the page. All subreddits in the sidebar should now show a red "leave" button. If some are still green, repeat steps 4-6 until all subreddits are subscribed to.

It will take one second per subreddit to subscribe, otherwise reddit will think the script goes too fast and it doesn't work.