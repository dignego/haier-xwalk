export default function decorate(block) {
  // Try to find a <p> or first child with text
  const textElement = block.querySelector('p') || block.firstChild;
  const text = textElement?.textContent?.trim() || 'Section Header';

  // Clear block content
  block.innerHTML = '';

  // Create header structure
  const container = document.createElement('div');
  container.className = 'section-header';

  const lineLeft = document.createElement('div');
  lineLeft.className = 'section-header-line';

  const title = document.createElement('div');
  title.className = 'section-header-title';
  title.textContent = text;

  const lineRight = document.createElement('div');
  lineRight.className = 'section-header-line';

  container.append(lineLeft, title, lineRight);
  block.append(container);
}

