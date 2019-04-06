# arVix Search tool!
This app is structured such that you need to first click on search in order to find the relevant articles.
AFTER you have clicked on search (or defaultsearch), you can then navigate and check the requirements as necessary.
This is because everything is stored in the redux store. Rather than making new api calls (which would risk getting different articles across the pages), I just saved it all to a redux store.
I understand that it is a bit sloppy, but I did this in roughly 7.5 hours because I have term projects and midterms right now.
My ideal solution would have involved doing the api on the backend so that when a person opens the app, the latest values (last 30 days of articles) would immediately be loaded into the redux store for data manipulation.

### Link:
http://165.22.138.156:3000/

## How to Use
* Clicking on `arXivSearch` in the upper left corner will take you to the search page.
* `DefaultSearch` (If topics form is empty) will search for "Computer Science Psychiatry Data Science Machine Learning"
* If you fill the search form with input, and click on `Search` you will search the topics in the search form!
  eg. you can input "Biology Crispr Data Science" into the search bar and click Search and it will return a list that attempts
  to match those topics.
* You will need to wait as the app calls the arVix api. This may take upwards of 10 seconds. (Ideally api call would be on the backend).
* Once you see the results, the information is loaded into a redux store.
* Click on an article name to receive a brief summary as well as a list of authors
* Click on any of the authors to see which articles they have published.
* To search authors within the stored articles, click on "Authors" in the navbar.
* Clicking on an author on this page will take you to the author page mentioned earlier.

Notes: In the navbar, `Info` will take you to the currently loaded article. `AuthorInfo` will take you to a page
with the last clicked author. Clicking on `ArvixSearch` in the upper left corner will take you back to the search menu and refresh the redux store and ready the app for another search.


Again, this was done VERY quickly. Please excuse the bugs!

Thank you for giving me this coding challenge.

-Greg
 
