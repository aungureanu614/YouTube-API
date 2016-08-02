$(function() {
    $('#search-term').submit(function(event) {
        event.preventDefault();

        var request = gapi.client.youtube.search.list({
            q: $('#query').val(),
            part: 'snippet',
            type: "video"
        });
        request.execute(function(response) {
            var results = response.result;
            showResults(results);
        });
    });
});

function showResults(results) {
    $.each(results.items, function(index, item) {
        $('#search-results').append("<video src=//www.youtube.com/embed/" + item.id.videoId + "></video>");
    });

}

function init() {
    gapi.client.setApiKey('AIzaSyAAeEliIWNKfAlOjtTFoEfGoTtqt_RAF0I');
    gapi.client.load("youtube", "v3", function() {
        //yt api is ready
    });
}
