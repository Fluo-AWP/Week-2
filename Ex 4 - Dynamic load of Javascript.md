Dynamic load of Javascript
===
In the following we descripe the differences and pros / cons with the different methods for loading javascript dynamically on a webpage.

#XMLHttpRequest
**Pros:** Data from backend can be loaded when needed. You don't have to reload the page to get new data. Faster load time. Runs on client. Has access to the DOM.

**Cons:** When there is no reload, the back and refresh buttons become absolute. Needs javascript activated in the browser.

#Iframe
**Pros:** God browser support. The pages load seperatly. The hosting page DOM is not accecable by the on in the iframe, and vica versa. Multiple scripts from a remote server can be loaded easily from one iframe. No matter what page to iframe loads on, the content in the iframe loads and acts the same way.

**Cons:** Script loads only when page loads. The pages load seperatly. The hosting page DOM is not accecable by the on in the iframe, and vica versa. Slower load times.

#Dynamically generated script tags
**Pros:** Easy load of external libaries and api's. Updates a maintaned server side. Automaticly loads newest script. No cluter on the HTML page.

**Cons:** Can't change the script. More code than needed is usually loaded. Need to be initialized.