
export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'section-header-container';

  for (let i = 1; i <= 3; i++) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'section-header-item';

    const icon = block.querySelector(`[data-name="image${i}"] img`);
    const title = block.querySelector(`[data-name="title${i}"]`);
    const subtitle = block.querySelector(`[data-name="subtitle${i}"]`);

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
  }

  block.innerHTML = '';
  block.appendChild(container);
}
