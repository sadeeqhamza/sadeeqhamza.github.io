

/* $(document).on("pagecreate", "#shows-page", function() {
    var dataInside;
dataInside = true;
$('#events-list').children('li').bind('click', function(e) {
 if (dataInside) {
            $("ol#plannerList").empty();
            dataInside = false;
        }       
         else if (!dataInside) {
          var stxt ="June 24<sup>th</sup>";
          var htxt='<h2>' +   $(this).attr('data-name') + '</h2>';
var txt ="Duration: 1hr";
          var ptxt='<p>' + txt + '</p>';
     var stringText =htxt+ptxt;
 $("ol#plannerList").append('<li data-icon="false" class="libgPlanner ui-shadow">' + '<a class="planner-btn" href="#map-page">' + stringText + '</a>' + '</li>').listview('refresh');
alert($(this).attr('data-name') + "Added To Planner");
        }

    });

});
  
//////live pg init


/*
 returns colummns
https://www.googleapis.com/fusiontables/v2/tables/12CGf6VSVPzHPuonorxE-vSkLPn5tQReqLQJ-AUQR/columns?key=AIzaSyBP2frMM097nM_HZumdMdw85U3n621-r5I

https://www.googleapis.com/fusiontables/v2/query?sql=SELECT * FROM
     12CGf6VSVPzHPuonorxE-vSkLPn5tQReqLQJ-AUQR&key=AIzaSyBP2frMM097nM_HZumdMdw85U3n621-r5I 




     <script type="text/javascript">
      function initialize() {
        var query = 'SELECT * FROM
     12CGf6VSVPzHPuonorxE-vSkLPn5tQReqLQJ';

        var encodedQuery = encodeURIComponent(query);

   
        var url = ['https://www.googleapis.com/fusiontables/v1/query'];
    $.ajax({
          url: url.join(''),
          dataType: 'jsonp',
          success:

           function (colNames)
           {
  return columnN
           }


  */
