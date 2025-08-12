
console.log( "ready!" );

// https://dev.to/bornfightcompany/using-google-sheets-as-a-simple-database-with-papa-parse-2k7o


function init() {
          Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vReFW3tvrzxomIgL-Wh_iYw0zJST4MqRRtGVdYeYxw1nFOreaFG6HPlSvWRKuCnJ-r1obZmd6sQcpQA/pub?output=csv', {
            
          download: true,
          header: true,
          complete: function(results) {
            var data = results.data
            console.log(data)

            // Put every timestamp in a div
            // for (var entry of data) {
            //     console.log(entry.Timestamp);
            //     $( ".my-fun-class" ).append( "<p>"+ entry.Timestamp +"</p>" );
            // }

            // Put every response to the invitation question in a div
            for (var entry of data) {
                //note that it's not as simple to address this value becuase the name of it is not very machine readable, unline "Timestamp." The name of it is "What ways do you like to invite someone to do something with you?." This can't be used in the same way becuase of all the spaces and punctuation so we need to address it by referring to is as the second key of each object (remember second looks like [1]) for each entry object.
                var invitationResponse = entry[Object.keys(entry)[1]]
                console.log(invitationResponse)
                $( ".my-fun-class" ).append( "<p>"+ invitationResponse +"</p>" );
            }

            // // This is the original table code that displays the data similar to the way the spreadsheet looks
            // var options = {
            //     element: document.getElementById("table"),
            //     data: data
            // };
            
            // var table = new Table(options);
            // table.view();

          }
        })
      }

window.addEventListener('DOMContentLoaded', init);
