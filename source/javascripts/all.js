//= require_tree .

document.addEventListener("DOMContentLoaded", function() {

  document.querySelector(".copy-to-clipboard").addEventListener("click", function(e) {
    e.preventDefault()
    copyToClipboard(document.querySelector(".copy-email"))
    this.text = "email has been copied!"
  })

function copyToClipboard(elem) {
    const targetId = "_hiddenCopyText_"
    const isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA"
    var origSelectionStart, origSelectionEnd
    if (isInput) {
      target = elem
      origSelectionStart = elem.selectionStart
      origSelectionEnd = elem.selectionEnd
    } else {
        target = document.getElementById(targetId)
        if (!target) {
          var target = document.createElement("textarea")
          target.style.position = "absolute"
          target.style.left = "-9999px"
          target.style.top = "0"
          target.id = targetId
          document.body.appendChild(target)
        }
        target.textContent = elem.textContent
    }
    var currentFocus = document.activeElement
    target.focus()
    target.setSelectionRange(0, target.value.length)

    var succeed
    try {
  	  succeed = document.execCommand("copy")
    } catch(e) {
        succeed = false
    }
    if (currentFocus && typeof currentFocus.focus === "function") {
      currentFocus.focus()
    }

    if (isInput) {
      elem.setSelectionRange(origSelectionStart, origSelectionEnd)
    } else {
      target.textContent = ""
    }
    return succeed
}

})
