THE WHY BEHIND US — THE PAPERS UPDATE

FILES
- index.html: landing page with The Papers section added. Your Google Analytics tag is preserved.
- style.css: styles for the landing page and paper cards.
- script.js: reveal animation.
- papers.js: the list of papers plus search and category filters.
- papers/paper-001.html: first paper, The Missing Prom.

HOW TO ADD A NEW PAPER
1. Create a new HTML file in the papers folder, e.g. paper-002.html.
2. Copy papers/paper-001.html as a starting template and replace the title/body.
3. Open papers.js and add another object inside the papers array:
   {
     id: "paper-002",
     title: "Your New Title",
     label: "REPORT 001",
     category: "Reports",
     topics: ["Society", "Technology"],
     date: "October 2026",
     readTime: "7 min read",
     description: "A one-sentence description of your paper.",
     file: "papers/paper-002.html"
   }
4. Save all files, then commit and push to GitHub.

IMPORTANT
- Keep index.html, style.css, script.js, and papers.js in the same root folder.
- Keep each paper page inside the papers folder.
- Keep your existing logo.png in the root folder; it is not included in this package.
- This package replaces the corresponding files, so if you have made other edits to these files since sharing your code, merge those edits before replacing them.
