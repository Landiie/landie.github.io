async function landieMdToHtml(link) {
  const resp = await fetch(link);
  const md = await resp.text();
  const htmlRaw = await markdown(md);
  const customMarkdownElements = await findCustomMarkdownElements(htmlRaw);
  let html = await importCustomMarkdownElements(
    htmlRaw,
    customMarkdownElements
  );

  html = html.replaceAll("<table>", '<table class="table table-primary">');
  html = html.replaceAll("<th>", '<th scope="col">'); // fix headers
  html = html.replaceAll(
    "<pre><code>",
    '<div class="markdown-body"><pre><code>'
  ); //fix code blocks
  html = html.replaceAll("</code></pre>", "</code></pre></div>"); //fix code blocks
  html = html.replaceAll("&lt;br&gt;", "<br>"); //fix linebreaks
  console.log(html);
  return new Promise(function (resolve, reject) {
    resolve(html);
  });
}

function findCustomMarkdownElements(html) {
  let elements = [];
  let searching = true;

  let i = 0;
  while (searching) {
    let elementData = {};
    let elementPosStart;
    let elementPosEnd;

    elementPosStart = html.indexOf("{!!}", i);
    if (elementPosStart == -1) break;
    elementPosStart = elementPosStart + 4; //moving past the {!!}
    elementPosEnd = html.indexOf("{end}", elementPosStart);
    let elementRaw = html.substring(elementPosStart, elementPosEnd);
    i = elementPosEnd;
    elementData.data = elementRaw;
    elementData.start = elementPosStart;
    elementData.end = elementPosEnd;

    elements.push(elementData);
  }
  // return elements;
  elements.forEach(element => {
    let attributes = {};
    let dataRaw = element.data;
    let attributesParsed = false;

    let debugCounter = 0;

    while (!attributesParsed) {
      let i = 0;
      console.log(dataRaw);
      let keyPosStart = i;
      let keyPosEnd = dataRaw.indexOf("|");
      if (keyPosEnd == -1) break;
      const key = dataRaw.substring(keyPosStart, keyPosEnd);
      i = keyPosEnd + 1;
      const valuePosStart = i;
      const valuePosEnd = dataRaw.indexOf("}");
      const value = dataRaw.substring(valuePosStart, valuePosEnd);
      attributes[`${key}`] = value;
      dataRaw = dataRaw.substring(valuePosEnd + 1, dataRaw.length);
    }
    element.attributes = attributes;
  });
  return elements;
}
function importCustomMarkdownElements(html, elementArray) {
  let htmlEditing = html;
  elementArray.forEach(element => {
    const start = htmlEditing.indexOf(element.data);
    const end = element.data.length;
    console.log("start:", start);
    console.log("end:", end);
    let toReplace = htmlEditing.substring(start - 4 - 3, start + end + 5 + 6);

    console.log("replacing...", toReplace);

    let replaceWith;
    //
    switch (element.attributes.element) {
      case "alert":
        switch (element.attributes.type) {
          case "info":
            replaceWith = `<div class="alert alert-info d-flex justify-content-center align-items-center"
                                    role="alert">

                                    <svg class="me-3" xmlns="http://www.w3.org/2000/svg" width="64" height="64"
                                        fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                    <div>
                                        ${element.attributes.content}
                                    </div>

                                </div>`;
            break;
          case "warning":
            replaceWith = `<div class="mt-3 alert alert-warning d-flex justify-content-center align-items-center"
            role="alert">
            <svg class="me-3" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                fill="currentColor" class="bi bi-exclamation-triangle"
                viewBox="0 0 16 16">
                <path
                    d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                <path
                    d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
            </svg>
            <div>
                ${element.attributes.content}
            </div>
        </div>`;
            break;
          default:
            replaceWith = `Not sure what type of alert "${element.attributes.type}" is... sorry!`;
        }

        break;
      // case "dog":
      //     console.log("I own a dog");
      //     break;
      default:
        replaceWith = "unknown type... sorry!";
        console.log(`Not sure what ${element.attributes.element} is...`);
        break;
    }
    htmlEditing = htmlEditing.replaceAll(toReplace, replaceWith);
  });
  return htmlEditing;
}
