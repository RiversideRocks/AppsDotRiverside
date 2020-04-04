    function score() {
      var x = document.getElementById("Snap").value;
      var y = document.getElementById("Insta").value;
      var z = document.getElementById("Hours").value;
      var result = (parseFloat(x) + parseFloat(y)) * parseFloat(z);

      if (!isNaN(result)) {
        document.getElementById("answer").innerHTML = "You scored " + result;
      }
      if (result >= 0 && result < 1000) {
        document.getElementById("areyou").innerHTML =
          "You are a non internet person. And thats ok.";
      } else if (result >= 1000 && result < 10000) {
        document.getElementById("areyou").innerHTML =
          "You are a responsible person.";
      } else if (result >= 10000 && result < 50000) {
        document.getElementById("areyou").innerHTML =
          "You are a social media novice";
      } else if (result >= 50000 && result < 200000) {
        document.getElementById("areyou").innerHTML =
          "You are closer to being VSCO girl.";
      } else if (result >= 200000 && result < 400000) {
        document.getElementById("areyou").innerHTML =
          "You are close to being a VSCO girl.";
      } else if (result >= 400000 && result < 1000000) {
        document.getElementById("areyou").innerHTML = "You are a VSCO girl.";
      } else if ((result = 0)) {
        document.getElementById("areyou").innerHTML =
          "Not on social media? Thats ok.";
      } else {
        document.getElementById("areyou").innerHTML =
          "You are a local influencer!";
      }
    }