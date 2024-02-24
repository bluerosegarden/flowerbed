---  
publish: true  
---  
  
## cin.ignore()  
If you mix cin and getline(), you need to include cin.ignore() before getline()  
  
```cpp  
cin >> age;  
cin.ignore();  
getline(cin, full_name);  
```