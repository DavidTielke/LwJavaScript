require.config({
    paths: {
        jQuery : "../../../bower_components/jquery/dist/jquery"
    },
    shim : {
        jQuery : {
            exports : "$"
        }
    }
});

require(["jQuery","repository"], function($, repo){
    repo.load().forEach(function(date){
            var row = "<tr>";
            row += "<td>"+date.date+"</td>";
            row += "<td>"+(date.valid ? "ja" : "nein")+"</td>";
            row += "</tr>";
            $('#tblData').append(row);
    });
});