# Toggler

Toggler ist eine einfache JavaScript-Bibliothek zum Ein- und Ausblenden von Formularelementen basierend auf den Werten
anderer Eingabefelder.

## Installation

Um Toggler in Ihrem Projekt zu installieren, führen Sie den folgenden Befehl aus:

```
npm install https://gitlab.com/plusb/toggler.git
```

## Verwendung

1. Binden Sie die `toggler.css` und `toggler.js` Dateien in Ihrem HTML-Dokument ein:

```html
<link rel="stylesheet" href="node_modules/toggler/toggler.css">
<script src="node_modules/toggler/toggler.js"></script>
```

2. Verwenden Sie in Ihrem HTML-Formular die `data-toggle-target` und `data-toggle-value` Attribute, um anzugeben, welche
   Elemente basierend auf dem Wert eines Eingabefelds ein- oder ausgeblendet werden sollen:

```html
<input type="number" id="example-input" data-toggle-target=".example-target" data-toggle-value="10">

<div class="example-target toggler-hidden">
    Dieser Bereich wird angezeigt, wenn der Wert des Eingabefelds 10 ist.
</div>
```

In diesem Beispiel wird der Bereich mit der Klasse `example-target` angezeigt, wenn der Wert des Eingabefelds mit der
ID `example-input` gleich 10 ist.

## Anpassung

Um das Aussehen und Verhalten von Toggler anzupassen, bearbeiten Sie die `toggler.css`-Datei oder überschreiben Sie
die `.toggler-hidden`-Klasse in Ihrer eigenen CSS-Datei.
