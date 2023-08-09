var htmlCodeEditor = CodeMirror.fromTextArea(
  document.getElementById("htmlCode"),
  {
    mode: "text/html",
    theme: "dracula",
    lineNumbers: true,
    tabSize: 4,
    indentUnit: 4,
    indentWithTabs: true,
    lineWrapping: true,
  }
);

var cssCodeEditor = CodeMirror.fromTextArea(
  document.getElementById("cssCode"),
  {
    mode: "text/css",
    theme: "dracula",
    lineNumbers: true,
    tabSize: 4,
    indentUnit: 4,
    indentWithTabs: true,
    lineWrapping: true,
  }
);

var jsCodeEditor = CodeMirror.fromTextArea(document.getElementById("jsCode"), {
  mode: "text/javascript",
  theme: "dracula",
  lineNumbers: true,
  tabSize: 4,
  indentUnit: 4,
  indentWithTabs: true,
  lineWrapping: true,
});

function runCode() {
  var htmlContent = htmlCodeEditor.getValue();
  var cssContent = "<style>" + cssCodeEditor.getValue() + "</style>";
  var jsContent = "<script>" + jsCodeEditor.getValue() + "</script>";

  var outputFrame = document.getElementById("outputFrame").contentDocument;
  outputFrame.open();
  outputFrame.write(htmlContent + cssContent + jsContent);
  outputFrame.close();
}

function applyPreprocessor() {
  var selectedPreprocessor =
    document.getElementById("preprocessorSelect").value;

  if (selectedPreprocessor === "pug") {
    // Convert Pug to HTML and update the HTML editor content
    var pugCode = htmlCodeEditor.getValue();
    var htmlContent = convertPugToHtml(pugCode);
    htmlCodeEditor.setValue(htmlContent);
  } else if (selectedPreprocessor === "markdown") {
    // Convert Markdown to HTML and update the HTML editor content
    var markdownCode = htmlCodeEditor.getValue();
    var htmlContent = convertMarkdownToHtml(markdownCode); // Implement this function
    htmlCodeEditor.setValue(htmlContent);
  }
}

function convertPugToHtml(pugCode) {
  try {
    // Use the pug global variable from Pug.js to compile Pug to HTML
    var htmlContent = pug.render(pugCode);
    return htmlContent;
  } catch (error) {
    console.error("Error converting Pug to HTML:", error);
    return "Pug to HTML compilation error!";
  }
}
