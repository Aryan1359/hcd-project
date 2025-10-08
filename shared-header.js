// Shared Header Component - DRY Principle
// This single file controls the header for ALL pages

function loadSharedHeader() {
  const headerHTML = `
  <header class="site-header">
    <div class="container header-grid">
      <div class="branding">
        <a href="index.html" style="display:flex;align-items:center;gap:14px;text-decoration:none;color:inherit;">
          <svg class="logo-svg header-logo" viewBox="0 0 64 64" role="img" aria-label="HCD Project Hub logo">
            <title>HCD Project Hub - Human-Centered Focus</title>
            <path class="hex-outer" d="M32 4 L50 15 L50 37 L32 48 L14 37 L14 15 Z" />
            <path class="hex-inner" d="M32 12 L44 20 L44 36 L32 44 L20 36 L20 20 Z" />
            <text x="32" y="32" text-anchor="middle" font-size="18" class="mark">HCD</text>
          </svg>
          <div>
            <h1 style="margin:0;font-size:20px;">HCD Project Hub</h1>
            <p style="margin:2px 0 0;color:var(--muted);font-size:12px;" class="header-subtitle">Human-Centered Design Methods I</p>
          </div>
        </a>
      </div>
      <div class="student-meta">
        <strong>Student:</strong> Aryan Yaghobi<br />
        <strong>Course:</strong> Human-Centered Design Methods I
      </div>
    </div>
  </header>
  `;
  
  // Insert header at the beginning of body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// Load header when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadSharedHeader);
} else {
  loadSharedHeader();
}
