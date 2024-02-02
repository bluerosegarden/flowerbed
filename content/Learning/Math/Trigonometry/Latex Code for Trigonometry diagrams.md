---  
publish: true  
---  
  
For every trigonometry diagram I make, I will include its code here!   
  
## 45-45-90 triangle  
   
   
 ![[triangles-003.svg|triangles-003.svg]]  
   
 ```latex  
 \documentclass[12pt, tikz, border=5mm]{standalone}    
 \usetikzlibrary{angles,    
 	quotes}    
 \usepackage{siunitx, xcolor}    
   
 \begin{document}    
 	\nopagecolor    
 	\begin{tikzpicture}[    
 		C angle/.style = {draw, fill=teal!30,    
 			angle radius=7mm,     
 			angle eccentricity=1.7,     
 			right, inner sep=1pt,    
 			font=\footnotesize},     
 		B angle/.style = {draw, fill=teal!30,    
 			angle radius=7mm,     
 			angle eccentricity=1.1,     
 			right, inner sep=1pt,    
 			font=\footnotesize}     
 		]     
 		  
 		\draw   (0,0) coordinate[label=below:$A$] (a) --    
 		(4,0) node[midway,below] {$1$} coordinate[label=below:$C$] (c) --    
 		(0,4) node[midway,above] {$\sqrt{2}$} coordinate[label=above:$B$] (b) -- cycle node[left,midway] {$1$};    
 		  
 		\pic[C angle, "$\SI{45}{\degree}$"] {angle = b--c--a};    
 		\pic[B angle, "$\SI{45}{\degree}$"] {angle = a--b--c};    
 		\draw (0,.8) (0,.4)-|(.4,0);    
 		  
 	\end{tikzpicture}    
 	  
 \end{document}    
```  
>   
  
## 30-60-90 triangle  
   
 ![[triangles-004.svg|triangles-004.svg]]  
   
```latex  
 \documentclass[12pt, tikz, border=5mm]{standalone}    
 \usetikzlibrary{angles,    
 	quotes}    
 \usepackage{siunitx, xcolor}    
   
 \begin{document}    
 	\nopagecolor  
 	\begin{tikzpicture}[    
 		C angle/.style = {draw, fill=teal!30,    
 			angle radius=7mm,     
 			angle eccentricity=1.7,     
 			right, inner sep=1pt,    
 			font=\footnotesize},     
 		B angle/.style = {draw, fill=teal!30,    
 			angle radius=7mm,     
 			angle eccentricity=1.3,     
 			left, inner sep=1pt,    
 			font=\footnotesize}     
 		]     
 		  
 		\draw   (0,0) coordinate[label=below:$A$] (a) --    
 		(4,0) node[midway,below] {$1$} coordinate[label=below:$C$] (c) --    
 		(0,8) node[midway,above] {$2$} coordinate[label=above:$B$] (b) -- cyclenode[left,midway] {$\sqrt{3}$};    
 		  
 		\pic[B angle, "$\SI{30}{\degree}$"] {angle = a--b--c};    
 		  
 		\pic[C angle, "$\SI{60}{\degree}$"] {angle = b--c--a};    
 		  
 		\draw (0,.8) (0,.4)-|(.4,0);    
 		  
 	\end{tikzpicture}   
 \end{document}    
  ```