---
publish: true
tags:
  - learning
  - school
---
Logarithms are weird.  
  
Logarithms are really, *really* weird.   
  
They have lots of properties that are similar to both functions and variables, but they aren't either. They're lying to you. They're *[[./Exponents|Exponents]]*!  
  
## Logarithms basics   
At its core, a logarithm is the inverse of the following exponential function:  
$$  
\begin{gathered}  
f(x)=a^x \\  
y=a^x \\  
x=a^y  
\end{gathered}  
$$  
The graph of which is:  
> [!note]  
> <iframe src="https://www.desmos.com/calculator/jwzxfnfmrl?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>  
>   
> - blue is $10^x$  
> - red is $x=10^y$, aka $\log x$  
  
The above is reformatted as this:  
$$  
\begin{align}  
\color{blue}a^{\color{red}y}&=\color{green}x\\  
&\downarrow\\  
\log_{\color{blue}a}\color{green}x&=\color{red}y\\  
\end{align}  
$$  
For reasons I do not know why, of the time it's assumed that the $a$ is 10 and is left out, so you usually see $\log_{10}x$ as $\log x$. Also for reasons I do not know why atm, is that $\log_{e}x$ is used so much that it gets its own dedicated shorthand, $\ln x$  
  
## Logarithm interactions  
When adding, subtracting, dividing, or even exponentially increasing logarithms, you can't simply do it. Remember, these are *exponents in disguise!*  
  
Because of that, they behave like exponents when they interact with each other!  
  
$$  
\begin{align*}  
\log(w \cdot n)&=\log w+ \log n \\  
\log(\frac{w}{n})&=\log w-\log n \\  
\log w^n&=n\cdot \log w  
\end{align*}  
$$  
  
But the *really* weird bit about logarithms is how if you want to evaluate a logarithm that isn't base 10, you can use the change of base formula and you get the answer, no extra steps needed!!  
  
$$  
\log_{a}x=\frac{\log_{b}x}{\log_{b}a}  
$$  
The crazy thing is, b can be anything, not just base 10 and it'll work! For that reason it's often that people just use $\ln$ for $\log$ and vice versa.  
  
## Solving Logarithmic (and exponential!) equations  
  
There are a few different ways you can solve logarithm problems when the x variable is in the exponent or inside the logarithmic argument.  
  
However, remember that if the original problem was a $log$ then **x cannot be** $x <= 0$  
  
### Special Cases  
Since logs are exponents, there are a few special cases when it comes to solving them.  
  
#### A log of 1 equals zero  
If you take the log of 1, it always equals zero no matter the base. This is because any number raised to 0 equals 1!  
$$  
\begin{align}  
\log_41&=0\\  
4^0&=1  
\end{align}  
$$  
#### A log that matches the base equals 1  
This is because the only exponent that results in the same number, is 1, virtually no exponent!  
  
$$  
\begin{align}  
\log10&=1\\  
10^1&=10\\  
&\downarrow\\  
10&=10  
\end{align}  
$$  
  
Same goes for $\ln$ and $e$  
$$  
\begin{align*}  
\ln e&=1\\  
e^1&=e\\  
&\downarrow\\  
e&=e  
\end{align*}  
$$  
  
### Set bases to be the same  
If both sides of the equation are able to be rewritten so the bases are the same, you can set them to the same  
$$  
\begin{align}  
2^{4x}&=8 \\  
2^{4x}&=2^3  
\end{align}  
$$  
Then you can simply ignore the bases and solve as normal!  
$$  
\begin{align}  
\cancel{2}^{4x}&=\cancel{2}^3 \\  
4x&=3  
\end{align}  
$$  
### Rewrite as exponential (or logarithmic)  
Sometimes its easiest to just convert an exponent to a logarithm!  
  
$$  
\begin{align}  
4^{3x}&=7 \\  
&\downarrow \\  
\log_4 7&=3x \\  
&\downarrow\\  
\frac{\ln 7}{\ln 4}&=3x  
\end{align}  
$$  
Or an logarithm to an exponent!  
$$  
\begin{align}  
\log(2x+1)&=3 \\  
&\downarrow\\  
10^3&=2x+1  
\end{align}  
$$  
> [!warning]   
> If the problem was originally an exponent and *you* converted it into a logarithm, it's totally ok if the one of the solutions results in a negative log nor zero. However, **if the original problem is a logarithm then it cannot be a negative.**  
> Example, $\log -3$ is incorrect. However $10^{-3}$ is totally fine!   
### Log both sides first  
Sometimes (especially if you have an $e$) simply taking the log of both sides is the easiest way to simplify it, because it removes it!  
  
$$  
\begin{align}  
e^{x+1}&=2 \\  
&\downarrow\\  
\cancel\ln(\cancel{e}^{x+1})&=\ln(2)\\  
&\downarrow\\  
x+1&=0.69314718056  
\end{align}  
$$  
### Ignore!  
if both sides of the equation are logs, just ignore them!  
  
$$  
\begin{align}  
\log(2x+1)&=\log(3x+6) \\  
&\downarrow \\  
2x+1&=3x+6  
\end{align}  
$$  
  
