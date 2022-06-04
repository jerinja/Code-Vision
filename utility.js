$('#copy-button').tooltip();
$('#copy-button').bind('click', function () {
  var input = document.querySelector('#copy-input');
  input.setSelectionRange(0, input.value.length + 1);
  try {
    var success = document.execCommand('copy');
    if (success) {
      // Change tooltip message to "Copied!"
    } else {
      // Handle error. Perhaps change tooltip message to tell user to use Ctrl-c
      // instead.
    }
  } catch (err) {
    // Handle error. Perhaps change tooltip message to tell user to use Ctrl-c
    // instead.
  }
});
$('#copy-button').bind('copied', function (event, message) {
  $(this).attr('title', message)
    .tooltip('fixTitle')
    .tooltip('show')
    .attr('title', "Copy to Clipboard")
    .tooltip('fixTitle');
});

$(document).ready(function () {
  // Initialize the tooltip.
  $('#copy-button').tooltip();

  // When the copy button is clicked, select the value of the text box, attempt
  // to execute the copy command, and trigger event to update tooltip message
  // to indicate whether the text was successfully copied.
  $('#copy-button').bind('click', function () {
    var input = document.querySelector('#copy-input');
    input.setSelectionRange(0, input.value.length + 1);
    try {
      var success = document.execCommand('copy');
      if (success) {
        $('#copy-button').trigger('copied', ['Copied!']);
      } else {
        $('#copy-button').trigger('copied', ['Copy with Ctrl-c']);
      }
    } catch (err) {
      $('#copy-button').trigger('copied', ['Copy with Ctrl-c']);
    }
  });

  // Handler for updating the tooltip message.
  $('#copy-button').bind('copied', function (event, message) {
    $(this).attr('title', message)
      .tooltip('fixTitle')
      .tooltip('show')
      .attr('title', "Copy to Clipboard")
      .tooltip('fixTitle');
  });
});