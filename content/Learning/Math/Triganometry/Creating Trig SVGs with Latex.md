---  
publish: true  
---  
  
After spending way too much time I figured out how to create triangles with tikz like the following!  
  
  
  
![[triangles 1.svg|triangles 1.svg]]  
  
  
- Install MikTex and Texstudio  
- Navigate to Texstudio's folder and open up the texstudio.ini  
- Add the following line under the `[texmaker]` block  
	- `Tools\Commands\dvi2svg-no-fonts="txs:///latex | dvisvgm --no-fonts %.dvi"`  
	- Use this to embed (web safe) fonts instead of paths: `Tools\Commands\dvi2svg="txs:///latex | dvisvgm --font-format=woff %.dvi"`  
- Now open up texstudio and create a .tex file with the property standalone  
	- `\documentclass[12pt, tikz, border=5mm]{standalone}` at the top of the file  
- Now go to **Tools->User->dvi2svg**  
- Now open the folder with your .tex file and you'll find your .svg file!  
- I further went in and edited the width and height to be 500px since its tiny by default  
  
There you go!  
  
  
The latex code for this triangle:  
```latex  
\documentclass[12pt, tikz, border=5mm]{standalone}  
\usetikzlibrary{angles,  
	quotes}  
\usepackage{siunitx, xcolor}  
  
\begin{document}  
	\nopagecolor  
	\begin{tikzpicture}[  
		my angle/.style = {draw, fill=teal!30,  
			angle radius=7mm,   
			angle eccentricity=1.7,   
			right, inner sep=1pt,  
			font=\footnotesize}   
		]  
		  
		\draw   (0,0) coordinate[label=below:$A$] (a) --  
		(4,0) node[midway,below] {$a$} coordinate[label=below:$C$] (c) --  
		(0,4) node[midway,above] {$b$} coordinate[label=above:$B$] (b) -- cycle node[left,midway] {$c$};  
		  
		\pic[my angle, "$\SI{45}{\degree}$"] {angle = b--c--a};  
		\draw (0,.8) (0,.4)-|(.4,0);  
		  
	\end{tikzpicture}  
\end{document}  
```  
  
