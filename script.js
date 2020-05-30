var deck = {
    'clubs': ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'],
    'hearts': ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'],
    'spades': ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'],
    'diamonds': ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
  };
  
  var lenErr1 = ["diamonds2<br>", "heartsQ<br>", "heartsJ<br>", "clubs5<br>", "spades3<br>", "spades2<br>", "diamonds7<br>", "clubs9<br>", "clubs3<br>", "diamonds6<br>", "diamondsA<br>", "spades4<br>", "clubsK<br>", "spades9<br>", "hearts9<br>", "clubs6<br>", "diamonds5<br>", "heartsK<br>", "clubs10<br>", "clubs4<br>", "hearts8<br>", "heartsA<br>", "spades10<br>", "diamondsQ<br>", "diamonds9<br>", "hearts10<br>"];
  
  var lenErr2 = ["clubs2<br>", "clubsQ<br>", "hearts2<br>", "spades5<br>", "clubs8<br>", "diamondsJ<br>", "hearts3<br>", "spadesQ<br>", "hearts7<br>", "spadesA<br>", "clubs7<br>", "clubsA<br>", "spades7<br>", "spades6<br>", "hearts4<br>", "clubsJ<br>", "hearts6<br>", "spades8<br>", "diamondsK<br>", "diamonds8<br>", "diamonds10<br>", "diamonds4<br>", "hearts5<br>", "diamonds3<br>", "spadesJ<br>", "spadesK<br>"];
  
  var tieErr1 = ["heartsK<br>", "diamondsA<br>", "diamondsQ<br>", "heartsA<br>", "clubs8<br>", "spades8<br>", "spades3<br>", "spades10<br>", "spadesJ<br>", "heartsJ<br>", "spadesK<br>", "heartsQ<br>", "diamonds4<br>", "hearts5<br>", "hearts8<br>", "spadesQ<br>", "hearts9<br>", "clubs2<br>", "clubsJ<br>", "spades6<br>", "spades5<br>", "diamonds10<br>", "hearts6<br>", "diamonds8<br>", "hearts2<br>", "clubs7<br>"];
  
  var tieErr2 = ["hearts7<br>", "clubs5<br>", "hearts10<br>", "diamondsJ<br>", "diamonds5<br>", "diamonds7<br>", "diamonds2<br>", "clubs6<br>", "hearts4<br>", "hearts3<br>", "diamonds3<br>", "clubs10<br>", "clubs4<br>", "spades7<br>", "clubsK<br>", "clubs9<br>", "spades9<br>", "spades4<br>", "clubs3<br>", "diamonds9<br>", "spadesA<br>", "clubsA<br>", "diamondsK<br>", "clubsQ<br>", "diamonds6<br>", "spades2<br>"];
  
  
  var oneReady = false;
  var twoReady = false;
  var allowOne = false;
  var allowTwo = false;
  var autoBattle = true;
  var oneName = 'Player One';
  var twoName = 'Player Two';
  var suits = ['clubs', 'hearts', 'spades', 'diamonds'];
  var endGame = new Audio('http://www.mrugala.net/Divers/Musiques%20MIDI/Sound%20-%20Corne%20medievale%202.wav');
  var speed = 50;
  var speedTwo = 500;
  var speedSetting = 'fast';
  var soundOn = true;
  var oneStart = [];
  var twoStart = [];
  
  var playerOne = [];
  var playerTwo = [];
  var ace = 1;
  var play = true;
  var ties = 0;
  
  $(function() {
    deal();
    
    $('#sound').click(function(){
      if(soundOn === true){
        soundOn = false;
        $('#soundIcon').removeClass('glyphicon glyphicon-volume-up');
        $('#soundIcon').addClass('glyphicon glyphicon-volume-off');
      }else if(soundOn === false){
        soundOn = true;
        $('#soundIcon').removeClass('glyphicon glyphicon-volume-off');
        $('#soundIcon').addClass('glyphicon glyphicon-volume-up');
      }
    });
    
    $( "#slider" ).slider({
      orientation: "vertical",
      range: "min",
      step: 0.01,
      value: 10,
      min: 5,
      max: 20,
      slide: function( event, ui ) {
        $( ".hand" ).css('font-size', ui.value );
      }
    });
    
    var err = true;
    function testDeal(){
      clear();
      if(err){
        $('#msg').html('ERR TEST');
        playerOne = lenErr1;
        playerTwo = lenErr2;
        err = false;
      }
      else{
        $('#msg').html('TIE TEST');
        playerOne = tieErr1;
        playerTwo = tieErr2;
        err = true;
  
      }
      
      allowOne = true;
      allowTwo = true;
      oneReady = false;
      twoReady = false;
      $('#autoplay').val('Autoplay');
      autoBattle = true;  
      play = false;
      $('#oneHand').html(playerOne);
      $('#twoHand').html(playerTwo);
    }
    
    function deal(){
        clear();
  
      //global
      var giveToP1 = true;
      var usedCards = [];
      $('#twoHand').html(' ');
      $('#oneHand').html(' ');
  
      do {
  
        do {
          var suit = suits[Math.floor(Math.random() * 4)];
          var card = deck[suit][Math.floor(Math.random() * 13)];
          var ind = usedCards.indexOf(suit + card);
  
        } while (ind >= 0);
  
        addCard();
  
      } while (usedCards.length < 52);
  
      function addCard() {
        if (giveToP1) {
          playerOne.push(suit + card + "<br>");
          giveToP1 = false;
        } else {
          playerTwo.push(suit + card + "<br>");
          giveToP1 = true;
        }
        usedCards.push(suit + card);
      }
      $('#oneHand').html(playerOne);
      $('#twoHand').html(playerTwo);
      console.log(playerOne);
      console.log(playerTwo);
      allowOne = true;
      allowTwo = true;
      oneReady = false;
      twoReady = false;
      $('#autoplay').val('Autoplay');
      autoBattle = true;  
      play = false;
    }
    
    $('#deal').click(function() {
      deal();
    });
    $('#testDeal').click(function() {
      testDeal();
    });
  
    function clear() {
      $('#battleOne').html('');
      $('#battleTwo').html('');
      playerOne = [];
      playerTwo = [];
      ties = 0;
      $('#oneHand').html('');
      $('#twoHand').html('');
      $('#one').html('');
      $('#two').html('');
      $('#msg').html('WAR');
      $('#runOne').val(oneName);
      $('#runTwo').val(twoName);
    }
  
    $('#speed').click(function() {
      if (speedSetting === 'fast') {
        speedSetting = 'ultrafast';
        $('#speed').val('Ultra Fast');
        speed = 0;
        speedTwo = 250;
      } else if (speedSetting === 'medium') {
        speedSetting = 'fast';
        $('#speed').val('Fast');
        speed = 50;
        speedTwo = 500;
      } else if (speedSetting === 'ultrafast'){
        speedSetting = 'slow';
        $('#speed').val('Slow');
        speed = 1000;
        speedTwo = 2500;
      } else {
        speedSetting = 'medium';
        $('#speed').val('Medium');
        speed = 500;
        speedTwo = 1000;
      }
    });
    
    function clearAftermath(){
      $('#one').fadeOut(speedTwo * 2);
      $('#two').fadeOut(speedTwo * 2);
      $('#msg').html('WAR');
    }
  
    $('#runOne').click(function(e) {
      $('#one').show();
      if (e.shiftKey) {
        var html = "<input id='oneNameNew' class='newName' type='text' />";
        $('#runOne').html(html);
        allowOne = false;
      }
      else if (allowOne) {
        var nextCard = playerOne[0];
        $('#one').html(nextCard);
        playerOne.splice(0, 1);
        $('#oneHand').html(playerOne);
        oneReady = true;
        allowOne = false;
        if (twoReady && autoBattle) {
          $('#msg').html('Battling...');
          setTimeout(battle,speedTwo);
          setTimeout(clearAftermath,speedTwo * 2);
        }
      }
    });
    
    $(document).keyup(function(e){
      var active = document.activeElement.parentNode.id;
      if(event.keyCode == 13 && !allowOne && active === "runOne"){
        var newName;
        var arr = $('#runOne').children();
        newName = arr[0].value
        oneName = newName;
        $('#runOne').html(oneName);
        allowOne = true;
      }
      else if(event.keyCode == 13 && !allowTwo && active === "runTwo"){
        var newName;
        var arr = $('#runTwo').children();
        newName = arr[0].value
        twoName = newName;
        $('#runTwo').html(twoName);
        allowTwo = true;     
      }
      else if(e.shiftKey){
        $('#testDeal').toggle();
      }
    });
  
    $('#runTwo').click(function(e) {
      $('#two').show();
      if (e.shiftKey) {
        var html = "<input id='oneNameNew' class='newName' type='text' />";
        $('#runTwo').html(html);
        allowTwo = false;
      } else if (allowTwo) {
        var nextCard = playerTwo[0];
        $('#two').html(nextCard);
        playerTwo.splice(0, 1);
        $('#twoHand').html(playerTwo);
        twoReady = true;
        allowTwo = false;
        if (oneReady && autoBattle) {
          $('#msg').html('Battling...');
          setTimeout(battle,speedTwo);
          setTimeout(clearAftermath,speedTwo * 2);
        }
      }
    });
    
    function battle(){
      var one = $('#one').html().replace('<br>', '');
      var two = $('#two').html().replace('<br>', '');
  
      one = simplify(one);
      two = simplify(two);
      one = change(one);
      two = change(two);
      evaluate(one, two);
  
      //simplify
      function simplify(num) {
        if (num[num.length - 1] === '0') {
          return '10';
        } else {
          return num[num.length - 1];
        }
      }
  
      function change(num) {
        if (isNaN(parseInt(num))) {
          if (num === 'J') {
            return 11;
          }
          if (num === 'Q') {
            return 12;
          }
          if (num === 'K') {
            return 13;
          }
          if (num === 'A') {
            return ace;
          }
        } else {
          return num;
        }
      }
  
      function evaluate(one, two, batch) {
        if (parseInt(one) > parseInt(two)) {
          //PLAYER ONE WINS
          playerOne.push($('#one').html());
          playerOne.push($('#two').html());
          $('#one').html('<br>' + $('#one').html() + $('#two').html());
          $('#two').html('');
          if (batch) {
            batch.forEach(function(curVal) {
              playerOne.push(curVal);
            });
            $('#battleOne').fadeOut('1000');
            $('#battleTwo').fadeOut('1000');
          }
          if(autoBattle){
            $('#msg').html(oneName+' Wins');
          }
          $('#oneHand').html(playerOne);
          $('#twoHand').html(playerTwo);
        } else if (parseInt(one) < parseInt(two)) {
          //PLAYER TWO WINS
          playerTwo.push($('#one').html());
          playerTwo.push($('#two').html());
          $('#two').html('<br>' + $('#two').html() + $('#one').html());
          $('#one').html('');
          if (batch) {
            batch.forEach(function(curVal) {
              playerTwo.push(curVal);
            });
            $('#battleOne').fadeOut('1000');
            $('#battleTwo').fadeOut('1000');
          }
          if(autoBattle){
            $('#msg').html(twoName+' Wins');
          }
          $('#twoHand').html(playerTwo);
          $('#oneHand').html(playerOne);
        } else {
          ties++;
          var one1,
            one2,
            one3,
            oneBat,
            oneBatBr,
            two1,
            two2,
            two3,
            twoBat,
            twoBatBr,
            battleOne,
            battleTwo,
            One,
            Two,
            len;
  
          if (playerOne.length < 4) {
            len = playerOne.length;
            switch (len) {
              case 3:
                One = 3;
                one1 = playerOne[0];
                one2 = playerOne[1];
                battleOne = [one1, one2];
                oneBatBr = playerOne[2];
                oneBat = playerOne[2].replace('<br>', '');
                break;
              case 2:
                One = 2;
                one1 = playerOne[0];
                battleOne = [one1];
                oneBatBr = playerOne[1];
                oneBat = playerOne[1].replace('<br>', '');
                break;
              case 1:
                One = 1;
                battleOne = [];
                oneBatBr = playerOne[0];
                oneBat = playerOne[0].replace('<br>', '');
                $('#msg').html('looks like a tie game');
                return false;
              case 0:
                One = 1;
                battleOne = [];
                console.log('error: len returned zero');
                break;
              default:
                console.log('error: len returned zero by default');
            }
          } else {
            One = 4;
            one1 = playerOne[0];
            one2 = playerOne[1];
            one3 = playerOne[2];
            battleOne = [one1, one2, one3];
            oneBatBr = playerOne[3];
            oneBat = playerOne[3].replace('<br>', '');
          }
          if (playerTwo.length < 4) {
            len = playerTwo.length;
            switch (len) {
              case 3:
                Two = 3;
                two1 = playerTwo[0];
                two2 = playerTwo[1];
                battleTwo = [two1, two2];
                twoBatBr = playerTwo[2];
                twoBat = playerTwo[2].replace('<br>', '');
                break;
              case 2:
                Two = 2;
                two1 = playerTwo[0];
                battleTwo = [two1];
                twoBatBr = playerTwo[1];
                twoBat = playerTwo[1].replace('<br>', '');
                break;
              case 1:
                Two = 1;
                battleTwo = [];
                twoBatBr = playerTwo[0];
                twoBat = playerTwo[0].replace('<br>', '');
                console.log('looks like a tie game');
                break;
              case 0:
                Two = 1;
                battleTwo = [];
                console.log('error: len returned zero');
                break;
              default:
                console.log('error: len returned zero by default');
            }
          } else {
            Two = 4;
            two1 = playerTwo[0];
            two2 = playerTwo[1];
            two3 = playerTwo[2];
            battleTwo = [two1, two2, two3];
            twoBatBr = playerTwo[3];
            twoBat = playerTwo[3].replace('<br>', '');
          }
  
          $('#battleOne').html(battleOne).show();
          $('#battleTwo').html(battleTwo).show();
  
          var batch1 = [];
          if (batch) {
            batch.forEach(function(curVal) {
              batch1.push(curVal);
            });
            battleOne.forEach(function(curVal) {
              batch1.push(curVal);
            });
            battleTwo.forEach(function(curVal) {
              batch1.push(curVal);
            });
          } else {
            battleOne.forEach(function(curVal) {
              batch1.push(curVal);
            });
            battleTwo.forEach(function(curVal) {
              batch1.push(curVal);
            });
          }
          batch1.push($('#one').html());
          batch1.push($('#two').html());
  
          //splice them out of hand
          playerTwo.splice(0, Two);
          playerOne.splice(0, One);
  
          //change display
          $('#twoHand').html(playerTwo);
          $('#Hand').html(playerOne);
          $('#one').html(oneBatBr);
          $('#two').html(twoBatBr);
  
          //battle
          oneBat = simplify(oneBat);
          twoBat = simplify(twoBat);
          oneBat = change(oneBat);
          twoBat = change(twoBat);
          evaluate(oneBat, twoBat, batch1);
        }
      }
  
      oneReady = false;
      twoReady = false;
      allowOne = true;
      allowTwo = true;
    }
  
    $('#autoplay').click(function(e) {
      if (e.shiftKey) {
        if ($('#autoplay').val() === 'Stop') {
          play = false;
          autoBattle = true;
          $('#autoplay').val('Autoplay');
        } else {
          $('#runOne').click();
          $('#runTwo').click();
          var total = playerOne.length + playerTwo.length;
          $('#totalCards').html('total: ' + total + ' P1:' + playerOne.length + ' P2: ' + playerTwo.length + ' Ties: ' + ties);
        }
      } else {
        if ($('#autoplay').val() === 'Stop') {
          play = false;
          autoBattle = true;
          $('#autoplay').val('Autoplay');
        } else {
          play = true;
          autoPlay = false;
          $('#autoplay').val('Stop');
          autoBattle = false;
          autoplay();
        }
      }
  
      function autoplay() {
        if (playerOne.length > 0 && playerTwo.length > 0) {
          if (play) {
            $('#runOne').click();
            $('#runTwo').click();
            battle();
            setTimeout(autoplay, speed);
          } else {
            play = true;
          }
        } else if (playerOne.length === 0) {
          if(soundOn){
            endGame.play();
          }
          $('#msg').html(twoName+' Wins');
          $('#runOne').val('Loser');
          $('#runTwo').val('Winner');
          $('#autoplay').val('Autoplay');
          $('#two').html('');
        } else if (playerTwo.length === 0) {
          if(soundOn){
            endGame.play();
          }
          $('#msg').html(oneName+' Wins');
          $('#runOne').val('Winner');
          $('#runTwo').val('Loser');
          $('#autoplay').val('Autoplay');
          $('#one').html('');
        }
        var total = playerOne.length + playerTwo.length;
        $('#totalCards').html('total: ' + total + ' P1:' + playerOne.length + ' P2: ' + playerTwo.length + ' Ties: ' + ties);
      }
  
    });
  
  });