console.log('hello world');

// let observer: MutationObserver | null = null;

// window.navigation.addEventListener('navigate', (event) => {
//   console.log('location changed' + event.destination.url);
// });

const observer = new MutationObserver((mutations, observer) => {
  document.querySelectorAll('a[href^="/marketplace/item"] img[src^="https://scontent"]:not(:has(+ div.fb-extension.banner))').forEach((e) => {
    const div = document.createElement('div');
    div.className = 'fb-extension banner';
    div.innerText = 'Hello World';
    e.insertAdjacentElement('afterend', div);
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// document.querySelectorAll('a[href^="/marketplace/item"] img[src^="https://scontent"]:not(:has(+ div.fb-extension.banner))').forEach((e) => {
//   const div = document.createElement('div');
//   div.className = 'fb-extension banner';
//   div.innerText = 'Hello World';
//   e.insertAdjacentElement('afterend', div);
// });
