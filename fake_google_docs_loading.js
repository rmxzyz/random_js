var html = `<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Google Docs</title></head><body style="border: 0; margin: 0; padding: 0; font-family: arial,sans-serif;"><table style="width: 100%; height: 90%;"><tbody><tr valign="middle" style="text-align: center;"><td><div><img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_document_x256.png" height="128" width="128"></div><div style="color: #900; font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif; padding-top:30px;" id="message"><div style="display: inline; margin-left: 4px;"></div></div><div id="loading"><img src="https://cdn.jsdelivr.net/gh/rmxzyz/random_js@main/fsj/loading.gif" style="padding-top:30px;"></div></td></tr></tbody></table></body></html>`
document.documentElement.innerHTML = html
var link = document.createElement('link')
link.rel = 'icon'
link.type = 'image/x-icon'
link.href = 'https://www.google.com/s2/favicons?sz=64&domain=docs.google.com'
document.head.appendChild(link)
