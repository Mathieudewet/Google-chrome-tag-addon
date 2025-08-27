document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('link-form');
  const urlInput = document.getElementById('url');
  const tagsInput = document.getElementById('tags');
  const list = document.getElementById('link-list');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = urlInput.value.trim();
    const tags = tagsInput.value.split(',').map(t => t.trim()).filter(Boolean);
    if (!url) return;

    const link = { url, tags };
    const { links = [] } = await chrome.storage.sync.get('links');
    links.push(link);
    await chrome.storage.sync.set({ links });

    urlInput.value = '';
    tagsInput.value = '';
    renderLinks();
  });

  async function renderLinks() {
    const { links = [] } = await chrome.storage.sync.get('links');
    list.innerHTML = '';
    for (const link of links) {
      const li = document.createElement('li');
      li.textContent = `${link.url} [${link.tags.join(', ')}]`;
      list.appendChild(li);
    }
  }

  renderLinks();
});
