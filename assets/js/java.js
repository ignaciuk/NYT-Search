$(document).ready(function() {
    $("#search-button").on("click", function() {
        var searchValue = $("#search-field").val();
        console.log(searchValue);
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
          searchValue + "&api-key=O5KfhPJXUcUdrYoBixF7IsISkWjOVx4U";
        console.log(queryURL);
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
          // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.
          console.log("Response:" + response);

          var results = response.docs;
          console.log("results: " + results);
          for (var i = 0; i < results.length; i++) {
            var articleDiv = $("<div>");
            var blurb = $("<p>").text("Snippet: " + results[i].snippet);
            var headline = $("<h3>").text("Snippet: " + results[i].headline);

            articleDiv.append(blurb);
            articleDiv.append(headline);

            $("#show-results").prepend(articleDiv);
            }
        });
    });
});