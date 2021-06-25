var  guestlist = [];

function submit_names() {
    for (var n = 1; n<=5; n++){
        var guests = document.getElementById("guest"+n).value;
        guestlist.push(guests);
    }

    console.log(guestlist);
    document.getElementById("unordered_names").innerHTML = guestlist;

    document.getElementById("wait").style.display="inline-block";
}

function show_names() {
    var g_hyphen = [];
    var length_g = guestlist.length;
    for (var b = 0; b < length_g; b++){
        g_hyphen.push("<h3>Guests -"+guestlist[b]+"</h3>");
    }
    var g = g_hyphen.join(" ");
    document.getElementById("names_withoutcommas").innerHTML = g;
    console.log(g);
}

function sort_names() {
    guestlist.sort();
    document.getElementById("sortednames").innerHTML = guestlist;
}

function search_names() {
    var sn = document.getElementById("searched_names").value;
    var found = 0;
    var t;
    for (t=0; t<guestlist.length; t++){
        if(sn==guestlist[t]){
            found=found+1;
        }
    }
    document.getElementById("searched_names").innerHTML = "Name Found " +found+" time /s";
    console.log("found name"+found+"time /s");
};