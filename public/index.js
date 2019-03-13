

$.ajax({
  url: 'http://localhost:3000/messages',
  success: function(resp){
    console.log(resp)
  }
})


let name = "";

$('#changename').click(function(){
  const newName = $('#nameinput').val()
  name = newName
  $('#nameinput').val('')
})

$('#sendmessage').click(function(e){
  const inputElt = $('#userinput')
  const message = inputElt.val()
  const listOfMessages = $('#messages')

  const listElement = $('<li>')
  listElement.text(name + ": " + message)

  listOfMessages.append(listElement)

  inputElt.val('')
})
