const subs = [...$$('.subscription-box li a.title')].map(el => el.text)

console.log('Exporting subreddits:');
console.log(subs.join('\n'));

localStorage.setItem('autocremate-subreddits', JSON.stringify(subs));

console.log(`${subs.length} Subreddits successfully stored to localStorage. You may proceed to the Import step`);