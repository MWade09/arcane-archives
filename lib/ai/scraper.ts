'use client'

export function getPageContext(): string {
  // 1. Identify where reading content is
  const contentSelectors = [
    'section.chapter', 
    'article.arc-entry', 
    '.arc-content',
    '.chapter-body'
  ];

  let fullContent = '';
  
  // 2. Scrape
  contentSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      // Remove images/buttons from text extraction if any
      const text = (el as HTMLElement).innerText || '';
      fullContent += text + '\n\n';
    });
  });

  // 3. Limit size for context efficiency
  return fullContent.substring(0, 10000); 
}
