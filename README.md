template-cv-latex
=================

This a boilerplate project to quicky edit a CV in latex, with the modercv style.

## Installation

### Latex
#### Windows
 - Download the last version of [miktex](http://miktex.org/download) to have latex library
 - Download [texniccenter](http://www.texniccenter.org/download/) to edit latex (or use any editor)
 - Download [sumatra](http://blog.kowalczyk.info/software/sumatrapdf/download-free-pdf-viewer-fr.html) to view pdf (or use any pdf viewer)
 
#### Linux (Debian)
 - 
```bash
sudo apt-get install texlive texlive-lang-french texlive-latex-extra
```
or 
 - 
```bash
sudo apt-get install texlive-full
```

### Node.js
#### Windows
 - Download the Node.js [msi installer](http://nodejs.org/download/) and execute it.

#### Linux (Debian)
 - 
```bash
sudo apt-get install nodejs npm
```

### Clone the repository
 - 
```bash
git clone https://github.com/evanliomain/template-cv-latex
```
or
 - download the [zip archive](https://github.com/evanliomain/template-cv-latex/archive/master.zip)

### Install npm dependence

```bash
cd template-cv-latex
npm install
```

### Generate pdf on save
To quickly generate the pdf on .tex save, lauch the command
```bash
grunt
```

It's configurate to rebuild the pdf on save with `pdflatex` command.
You will see the result into build directory.


