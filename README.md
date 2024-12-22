Opening Multiple Pages:

Two pages are created using context.newPage().
Each page navigates to a specific URL (example.com and wikipedia.org).

Interacting with Pages:
Demonstrates how to interact with each page independently.
Example:
On page1, it clicks a link.
On page2, it performs a search.

Getting Context Pages:
context.pages() retrieves all open pages within the context, allowing you to handle multiple tabs/windows.

Logging Titles and URLs:
The script logs the URL and title of each page for verification.

Browser Visibility:
The browser launches in non-headless mode (headless: false) so you can see the actions performed.

Output Example:
When run, the script will:
Open two pages.
Navigate to https://example.com and https://www.wikipedia.org.
Perform actions on each page and log their titles and URLs.
Print the number of open pages.
