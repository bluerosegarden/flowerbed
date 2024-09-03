---
publish: true
---
For every trigonometry diagram I make, I will include its code here!   
  
## Basic Right-Triangle diagram  
![[../../../attachments/triangles-001.svg|triangles-001]]  
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
  
## Basic Right-triangle  
![[../../../attachments/triangles-002.svg|§Attachments/triangles-002.svg]]  
```latex  
\documentclass[12pt, tikz, border=5mm]{standalone}    
\usetikzlibrary{angles,    
quotes}    
\usepackage{siunitx, xcolor}    
  
\begin{document}    
	\begin{tikzpicture}  
	  
		\draw   (0,0) coordinate[label=below:$C$] (C) --    
		(4,0) node[midway,below] {$a$} coordinate[label=below:$B$] (B) --    
		(0,4) node[midway,above] {$c$} coordinate[label=above:$A$] (A) -- cycle node[left,midway] {$b$};    
		  
		\draw (0,4) (0,.4)-|(.4,0);	    
	  
	\end{tikzpicture}  	  
\end{document}    
```  
  
## 45-45-90 triangle  
![[../../../attachments/triangles-003.svg|triangles-003]]  
  
```latex  
\documentclass[12pt, tikz, border=5mm]{standalone}    
\usetikzlibrary{angles,    
quotes}    
\usepackage{siunitx, xcolor}    
  
\begin{document}    
	\begin{tikzpicture}[    
		A angle/.style = {draw, fill=teal!30,    
			angle radius=7mm,     
			angle eccentricity=1.3,     
			midway, inner sep=1pt,    
			font=\footnotesize},     
		B angle/.style = {draw, fill=teal!30,    
			angle radius=7mm,     
			angle eccentricity=1.3,     
			midway, inner sep=1pt,    
			font=\footnotesize}     
		]     
		  
		\draw   (0,0) coordinate[label=below:$C$] (C) --    
		(4,0) node[midway,below] {$1$} coordinate[label=below:$B$] (B) --    
		(0,4) node[midway,above] {$\sqrt{2}$} coordinate[label=above:$A$] (A) -- cycle node[left,midway] {$1$};    
		  
		\pic[A angle, "$\SI{45}{\degree}$"] {angle = C--A--B};    
		\pic[B angle, "$\SI{45}{\degree}$"] {angle = A--B--C};    
		\draw (0,.8) (0,.4)-|(.4,0);    
		  
	\end{tikzpicture}    
  
\end{document}    
```  
  
## 30-60-90 triangle  
![[../../../attachments/triangles-004.svg|triangles-004]]  
```latex  
\documentclass[12pt, tikz, border=5mm]{standalone}    
\usetikzlibrary{angles,    
quotes}    
\usepackage{siunitx, xcolor}    
  
\begin{document}    
\begin{tikzpicture}[    
		A angle/.style = {draw, fill=teal!30,    
			angle radius=7mm,     
			angle eccentricity=1.6,     
			midway, inner sep=1pt,    
			font=\footnotesize},     
		B angle/.style = {draw, fill=teal!30,    
			angle radius=7mm,     
			angle eccentricity=1.3,     
			midway, inner sep=1pt,    
			font=\footnotesize}     
		]     
		  
		\draw   (0,0) coordinate[label=below:$C$] (C) --    
		(4,0) node[midway,below] {$1$} coordinate[label=below:$B$] (B) --    
		(0,8) node[midway,above] {$2$} coordinate[label=above:$A$] (A) -- cycle node[left,midway] {$\sqrt{3}$};    
		  
		\pic[A angle, "$\SI{30}{\degree}$"] {angle = C--A--B};    
		  
		\pic[B angle, "$\SI{60}{\degree}$"] {angle = A--B--C};    
		  
  
		  
		\draw (0,.8) (0,.4)-|(.4,0);    
	  
		\end{tikzpicture} 	  
  
\end{document}    
```  
  
## Basic Right-Triangle diagram  
![[../../../attachments/triangles-001.svg|triangles-001]]  
```latex  
\documentclass[12pt, tikz, border=5mm]{standalone}    
\usetikzlibrary{angles,    
quotes}    
\usepackage{siunitx, xcolor}    
  
\begin{document}    
  
\end{document}    
```  
  
%%  
## Basic Right-Triangle diagram  
![[../../../attachments/triangles-001.svg|triangles-001]]  
```latex  
\documentclass[12pt, tikz, border=5mm]{standalone}    
\usetikzlibrary{angles,    
quotes}    
\usepackage{siunitx, xcolor}    
  
\begin{document}    
  
\end{document}    
```  
  
%%