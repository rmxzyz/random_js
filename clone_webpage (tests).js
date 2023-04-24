//I disabled the button system (when you click them, it updates the page and does not reload) because it opens like a billion tabs.
//go to the page you want to clone. You can also use this if you want a fake google classroom.
function clone() {
let pageSource = document.documentElement.outerHTML
//dont run this on a page with a lot of links or else your computer overheats and blows up lol
let Hwindow = window.open()
setTimeout(() => {
Hwindow.eval('htmlSystem=window.trustedTypes.createPolicy("default",{createScript:e=>e, createHTML:e=>e,createScriptURL:e=>e,createScript:e=>e});')
setTimeout(() => {
    Hwindow.document.write(pageSource)
    let hdoc = Hwindow.document
    hdoc.oncancel = document.oncancel
    hdoc.name2 = Math.random() * 103191391 + Math.random() * 2.11333 / Math.random() * 1.3193
    hdoc.onclick = document.onclick
    hdoc.onanimationcancel = document.onanimationcancel
    hdoc.onmousedown = document.onmousedown
    hdoc.onabort = document.onabort
    var link = hdoc.querySelector("link[rel~='icon']");
    if (!link) {
        link = hdoc.createElement('link');
        link.rel = 'icon';
        hdoc.head.appendChild(link);
    }
    link.href = 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url='+document.location.host+';'
    hdoc.onanimationcancel = document.onanimationcancel
    hdoc.onanimationend = document.onanimationend
    hdoc.onanimationiteration = document.onanimationiteration
    hdoc.onanimationstart = document.onanimationstart
    hdoc.onauxclick = document.onauxclick
    hdoc.onbeforeinput = document.onbeforeinput
    hdoc.onblur = document.onblur
    hdoc.oncanplay = document.oncanplay
    hdoc.oncanplaythrough = document.oncanplaythrough
    hdoc.onchange = document.onchange
    let spare = '[docName = hdoc.name2, docum = hdoc, window_ = Hwindow, deny = function() {let e = nWindow.attach[index]; e = [accept = function() {e = JSON.parse(spare) }]} ]'
    hdoc.Source =  {
        href: document.location.href,
        document: document,
        window: window,
        console: console,
        docName: hdoc.name,
        //detach = function() {void(0); hdoc = undefined; Hwindow = undefined},
        attach: function(nWindow) {if(!nWindow) {nWindow = window; nWindow.attach = [];}; if(!nWindow.attach) {nWindow.attach = [];} let index = nWindow.attach.length + 1; nWindow.push([docName = hdoc.name2, docum = hdoc, window_ = Hwindow, deny = function() {let e = nWindow.attach[index]; e = [accept = function() {e = JSON.parse(spare)}]} ]) },
    
    }
    Hwindow.Source = hdoc.Source
    hdoc.onclick = document.onclick
    hdoc.onclose = document.onclose
    hdoc.oncontextmenu = document.oncontextmenu
    hdoc.oncopy = document.oncopy
    hdoc.oncuechange = document.oncuechange
    hdoc.oncut = document.oncut
    hdoc.ondblclick = document.ondblclick
    hdoc.ondrag = document.ondrag
    var elements = document.querySelectorAll('body * ')// for buttons if you press them, html gets changed?
    let clickHtmls = []
    for (i = 0; i < elements.length; i++) {
        setTimeout(() => {
        let element = elements[i]
        if(element) {
            if(element.getAttribute('href') || element.href) {
                href = element.getAttribute('href') | element.href
                if(href.startsWith('/')) {
                let clickWindow = window.open(document.location.href+href)
                    setTimeout(() => {
                        try {
                            clickHtmls.push([href=document.location.href+href, html = clickWindow.documentElement.outerHTML])
                            }catch(error) {
                                try {
                                clickHtmls.push([href=document.location.href+href, html = clickWindow.outerHTML])
                                }catch(error) {
                                    clickHtmls.push([href=document.location.href+href, html = clickWindow.document.outerHTML])
                                }
                            }
                        clickWindow.close()

                    }, 500) //load?
                } else {
                    let clickWindow = window.open(element.href)
                    setTimeout(() => {
                        try {
                        clickHtmls.push([href=document.location.href+href, html = clickWindow.documentElement.outerHTML])
                        }catch(error) {
                            try {
                            clickHtmls.push([href=document.location.href+href, html = clickWindow.outerHTML])
                            }catch(error) {
                                clickHtmls.push([href=document.location.href+href, html = clickWindow.document.outerHTML])
                            }
                        }
                        clickWindow.close()
                    }, 500) //load?
                }
                        
            }  else {
                if(element.onclick) {
                    clickHtmls.push([onclick = element.onclick])
                }
            }
            if(element.onclick) {
                clickHtmls.push([onclick = element.onclick])
            }
            if(element.oncancel) {
                clickHtmls.push([oncancel= element.oncancel])
            }
            let list = [];
            for(p = 0; p > element.attributes.length; i++) {
                try {
                    let attribute = element.attributes[p]
                    if(attribute) {
                        list[attribute.nodeName] = attribute.nodeValue
                    }
                //item[listItem[p]] = listItem[p]
                }catch(error) {}
            }
        }
    }, 200)
}
    var elements2 = hdoc.querySelectorAll('* ')// for buttons if you press them, html gets changed?
    for (i = 0; i < elements2.length; i++) {
        let item = elements2[i] //href, html
        if(item.href) {
            for (x = 0; x < clickHtmls.length; x++) {
                let listItem = clickHtmls[x]
                if(listItem) {
                    if(listItem.href && listItem.html) {
                    if(listItem.href == item.href) {
                        item.href = ''
                        item.onclick = function() {
                            Hwindow.document.write(listItem.html)
                        }
                    }
                    if(listItem.onclick) {
                        item.onclick = listItem.onclick
                    }
                    } else {
                        if(listItem.onclick) {
                            item.onclick = listItem.onclick
                        }
                        for(p = 0; p > listItem.length; i++) {
                            try {
                            item[listItem[p]] = listItem[p]
                            }catch(error) {}
                        }
                    }
                    if(listItem.onclick) {
                        item.onclick = listItem.onclick
                    }
                    if(listItem.oncancel) {
                        item.onclick = listItem.oncancel
                    }
                    if(listItem.onchange) {
                        item.onclick = listItem.onchange
                    }
                }
            }

        } else {

        }
    }
    console.log(clickHtmls)
    return {Docment: hdoc, Window_: Hwindow};
    
}, 100) //load extras
}, 500)
}
clone()
