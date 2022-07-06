$(document).ready(function () {


    var currentHour = moment().hours();
    console.log(typeof currentHour)

    $(".time-block").each(function (index) {
        var timeBlockHour = parseInt($(this).attr("id"))
        console.log(typeof timeBlockHour);
        if (currentHour > timeBlockHour) {
            $(this).addClass("past")

        }
        else if (currentHour === timeBlockHour) {
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }

        var now = moment().format("MMM Do, YYYY");
        $("#currentDay").text(now);

    
// creating function to set and get items from localstorage.
        function retrieveItem(button, textarea, key) {
            $(button).on('click', function () {
                //storing value of textarea within variable.
                var setValue = $(textarea).val();
                //setting value of text area to localstorage
                localStorage.setItem(key, setValue)
            })
//using localstorage.get item to get value paired with key.
            var getValue = localStorage.getItem(key)
            $(textarea).val(getValue)
        }
        // calling function for each timeblock.
        retrieveItem(".saveBtn", ".description9", "key9")
        retrieveItem(".saveBtn", ".description10", "key10")
        retrieveItem(".saveBtn", ".description11", "key11")
        retrieveItem(".saveBtn", ".description12", "key12")
        retrieveItem(".saveBtn", ".description13", "key13")
        retrieveItem(".saveBtn", ".description14", "key14")
        retrieveItem(".saveBtn", ".description15", "key15")
        retrieveItem(".saveBtn", ".description16", "key16")
         retrieveItem(".saveBtn", ".description17", "key17")
         retrieveItem(".saveBtn", ".description18", "key18")
        
    });
})