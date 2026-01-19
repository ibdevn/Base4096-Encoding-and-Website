let pyodide;

async function loadPyodideAndPackages() {
  // Lade Pyodide
  // Deaktiviere encode/decode Buttons bis Pyodide geladen ist
  document.getElementById("encodeBtn").disabled = true;
  document.getElementById("decodeBtn").disabled = true;
  pyodide = await loadPyodide();

  // Lade encoder.py
  const encoderCode = await fetch("encoder.py").then(r => r.text());
  await pyodide.runPythonAsync(encoderCode);

  // Lade emoji_base4096_table.json
  const tableText = await fetch("emoji_base4096_table.json").then(r => r.text());

  // Schreibe JSON-Datei ins virtuelle Dateisystem (UTF-8 kodiert)
  pyodide.FS.writeFile("emoji_base4096_table.json", new TextEncoder().encode(tableText));

  // Initialisiere die Tabelle in Python
  await pyodide.runPythonAsync("init_table()");
  document.getElementById("encodeBtn").disabled = false;
  document.getElementById("decodeBtn").disabled = false;
}

// Starte alles beim Laden der Seite
loadPyodideAndPackages();

async function encode() {
  const input = document.getElementById("input").value;
  const pythonCode = `
data = ${JSON.stringify(input)}.encode("utf-8")
result = base4096_encode(data)
result
  `;
  const encoded = await pyodide.runPythonAsync(pythonCode);
  document.getElementById("output").value = encoded;
}

async function decode() {
  const input = document.getElementById("input").value;
  const pythonCode = `
try:
    result = base4096_decode(${JSON.stringify(input)}).decode("utf-8")
except Exception as e:
    result = "Fehler beim Decodieren: " + str(e)
result
  `;
  const decoded = await pyodide.runPythonAsync(pythonCode);
  document.getElementById("output").value = decoded;
}

// Dark/Light Mode Umschaltung
document.getElementById("modeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark", this.checked);
});