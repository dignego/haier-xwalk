import './sectionheader.css';

export default function decorate(block) {
  // Clear existing content
  block.innerHTML = '';

  // Get the text from the block (assumes it's in a <p> or similar)
  const text = block.textContent.trim();

  // Create the section header structure
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
