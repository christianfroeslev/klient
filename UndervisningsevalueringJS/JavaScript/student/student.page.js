$(document).ready(function () {




        $("#createEvaluationButton").on("click", function(){
            //Create JSON object
            var evaluering = {
                comment: $("#inputComment").val(),
                rating: $("#inputRating").val(),
                userId: SDK.Storage.load("id"),
                lectureId: SDK.Storage.load("lectureId")


            };

            //Create book
            SDK.Review.create(evaluering, function(err, succes){

                if (succes) {
                    window.alert("Din evaluering oprettet");
                    window.location.href = "studentReviews.html";

                    var btn = document.createElement("BUTTON");
                    var text = document.createTextNode("Slet din evaluering");
                    btn.appendChild(text);
                    document.body.appendChild(btn);

                    $("#reviewsTableBody").append(
                        
                    )

                }

                else if (err) {
                    throw err;
                }
            });

        });

    $("#logOutButton").on("click", function(){
        SDK.logOut();
        window.location.href = "login.html";
    });


});/**
 * Created by christianfroslev on 10/11/16.
 */
