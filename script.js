$(document).ready(function () {
  // scope screen object to access it within the click handler.

 const screen = $('#screen');
 const screenReset = '0';
  let evaluation = '';
  let evalCache = {};
  updateScreen(screenReset);

  $('#equals').on('click', function (event) {
    console.log(
      ' evaluation = ' + evaluation + ', typeof = ' + typeof evaluation
    );
    console.log("eval('5+5'); = " + eval('5+5')); !
    evaluation = eval(evaluation);
    console.log(' evaluation = ' + evaluation);
    updateScreen(evaluation);
  });

  $('#clearall').on('click', function (event) {
    evaluation = '';
    updateScreen(screenReset);
  });

  $('#clickables a')
    .not('#equals, #clearall')
    .on('click', function (event) {
      let clicked = $(this).text();
      console.log('clickables clicked');
    

      if (clicked === '.') {
        let holder = evaluation.toString().split(/[\+\-\/\*]/);
       let holderLength = holder.length - 1;
        let lastitem = holder[holderLength];
        lastitemFl = parseFloat(lastitem);

        console.log(
          holder +
            ' = holder\n ' +
            lastitem +
            ' = lastitem \n ' +
            lastitemFl +
            ' = float lastitem \n ' +
            holderLength
        );

        if (lastitemFl || lastitemFl === 0) {
           if (
            lastitemFl % 1 != 0 ||
            lastitem.charAt(lastitem.length - 1) === '.'
          ) {
            console.log(lastitem + ' = lastitem');
            return;
          }
        } else {
          evaluation += '0';
        }
      }

      evaluation += clicked;
      updateScreen(evaluation);
    });

  function updateScreen(arg) {
    console.log(arg);
    screen.text(arg);
  }

  function addToHistory(arg) {}

  function checkDecimal(arg) {}

  function throwError(arg) {
    // body...
  }
});
