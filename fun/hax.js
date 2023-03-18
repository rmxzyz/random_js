javascript:(function(){var walker=document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT, null, false); while (walker.nextNode()){walker.currentNode.nodeValue = "hax";}; alert("Page Haxxed!");}());

//replaces all text with 'hax'
