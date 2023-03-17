javascript: var element = document.createElement('link');element.setAttribute('rel', 'stylesheet');element.setAttribute('type', 'text/css');element.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');document.getElementsByTagName('head')[0].appendChild(element);document.addEventListener('click', function(evt) {if (evt.target == null || evt.target.classList == null) {return;}evt.target.classList.add('animated', 'hinge');});

//click on something, watch it fall.
