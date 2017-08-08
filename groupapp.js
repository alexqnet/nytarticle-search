




$('#submit').on("click",function(event){
event.preventDefault();
var searchTerm = $('#search').val().trim();
var startYear = $('#start-year').val().trim();
var endYear = $('#end-year').val().trim();
var numRecords = $('#num-records').val();
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var startDate = startYear + "0101";
var endDate = endYear + "1231";


url += '?' + $.param({
  'api-key': "a7382d4caee1441f9e6015cb05a18698",
  'q': searchTerm,
  'begin_date': startDate,
  'end_date': endDate,
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  console.log (result.response.docs[0].headline.main);
  console.log (result.response.docs[0].byline.original);
  console.log (result.response.docs[0].type_of_material);
  console.log (result.response.docs[0].pub_date);
  console.log (result.response.docs[0].web_url);

  for (var i=0; i<numRecords;i++){
      $("#articles-view").prepend("<div><p><b>Title: </b>" + result.response.docs[i].headline.main + "</p><p><b>Byline: </b>" + result.response.docs[i].byline.original + "</p><p><b>Section: </b>" + result.response.docs[i].type_of_material + "</p><p><b>Timestamp: </b>" + result.response.docs[i].pub_date + "</p><p><a href=" +  result.response.docs[i].web_url + " target=_blank>Story link</a></p></div>" );
  }


}).fail(function(err) {
  ;
});

});