---
publish: true
tags:
  - math/Trigonometry
  - guide
---
After spending way too much time I figured out how to create triangles with tikz like the following!  
  
  
  
![[../../../attachments/triangles-001 1.svg|triangles-001 1.svg]]  
  
  
- Install MikTex and Texstudio  
- Navigate to Texstudio's folder and open up the texstudio.ini  
- Add the following line under the `[texmaker]` block  
	- `Tools\Commands\dvi2svg-no-fonts="txs:///latex | dvisvgm --no-fonts --page=1- --output=%%f-%%3p %.dvi"`  
	- Use this to embed (web safe) fonts instead of paths: `Tools\Commands\dvi2svg="txs:///latex | dvisvgm --font-format=woff --page=1- --output=%%f-%%3p %.dvi"`  
- Now open up texstudio and create a .tex file with the property standalone  
	- `\documentclass[12pt, tikz, border=5mm]{standalone}` at the top of the file  
- Now go to **Tools->User->dvi2svg**  
- Now open the folder with your .tex file and you'll find your .svg file!  
- I further went in and edited the width and height to be 500px since its tiny by default  
  
  
The latex code for this triangle:  
```latex  
\documentclass[12pt, tikz, border=5mm]{standalone}  
\usetikzlibrary{angles,  
	quotes}  
\usepackage{siunitx, xcolor}  
  
\begin{document}  
	\begin{tikzpicture}  
	  
	\draw   (0,0) coordinate[label=below:] (C) --    
	(4,0) node[midway,below] {opposite line} coordinate[label=below:] (B) --    
	(0,4) node[midway,above, sloped] {hypotenuse line} coordinate[label=above:POV Angle] (A) -- cycle node[below,midway,sloped] {adjacent line};    
   
	\draw (0,4) (0,.4)-|(.4,0);    
	  
	\end{tikzpicture}    
	  
\end{document}  
```  
  
I also made a python script to automatically resize the SVGs (must be placed in the same folder as your latex files):  
  
```python  
import glob, os  
  
cur_dir = os.getcwd()  
  
files = glob.glob(cur_dir+"/*.svg")  
  
for filename in files:  
  
    content = ""  
  
    with open(filename) as file:  
  
        lines = file.readlines()  
  
        impLine = lines[2].split(" ")  
  
        impLine[4] = "width='500px'"  
  
        impLine[5] = "height='500px'"  
  
        fixedLine = " ".join(impLine)  
  
        lines[2] = fixedLine    
  
        content = "".join(lines)  
  
        file.close()  
  
    file = open(filename, "w")  
  
    file.write(content)  
  
    file.close()  
  
print("embiggening svgs done!")  
```  
  
and finally a .bat file to run everything all at once!  
```bat  
latex.exe -src -interaction=nonstopmode "triangles".tex  
  
dvisvgm --no-fonts --page=1- --output=%%f-%%3p triangles.dvi  
  
py embiggensvg.py  
```  
