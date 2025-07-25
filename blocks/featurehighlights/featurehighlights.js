export default function decorate(block) {
  const items = Array.from(block.children);

  const container = document.createElement('div');
  container.className = 'section-header-container';

  items.forEach((item) => {
    const icon = item.querySelector('img');
    const title = item.querySelector('h3');
    const subtitle = item.querySelector('p');

    const itemDiv = document.createElement('div');
    itemDiv.className = 'section-header-item';

    if (icon) {
      icon.className = 'section-header-icon';
      itemDiv.appendChild(icon);
    }

    if (title) {
      title.className = 'section-header-title';
      itemDiv.appendChild(title);
    }

    if (subtitle) {
      subtitle.className = 'section-header-subtitle';
      itemDiv.appendChild(subtitle);
    }

    container.appendChild(itemDiv);
  });

  block.innerHTML = '';
  block.appendChild(container);
}
