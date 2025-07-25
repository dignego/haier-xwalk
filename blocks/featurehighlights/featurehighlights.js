export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'featurehighlights-container';

  for (let i = 1; i <= 3; i++) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'featurehighlights-item';

    const iconWrapper = block.querySelector(`[data-name="image${i}"]`);
    const icon = iconWrapper ? iconWrapper.querySelector('img') : null;
    const title = block.querySelector(`[data-name="title${i}"]`);
    const subtitle = block.querySelector(`[data-name="subtitle${i}"]`);

    if (icon) {
      icon.className = 'featurehighlights-icon';
      itemDiv.appendChild(icon);
    }

    if (title) {
      title.className = 'featurehighlights-title';
      itemDiv.appendChild(title);
    }

    if (subtitle) {
      subtitle.className = 'featurehighlights-subtitle';
      itemDiv.appendChild(subtitle);
    }

    container.appendChild(itemDiv);
  }

  block.innerHTML = '';
  block.appendChild(container);
}
