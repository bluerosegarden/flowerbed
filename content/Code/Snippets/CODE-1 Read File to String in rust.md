---  
publish: true  
---  
  
created :: 12-05-2023  
codelang :: Rust  
  
```rust  
let file: Result<String, Error> = fs::read_to_string("part1_input.txt");  
match file {  
	Ok(f) => {  
		//do something with the file like return f  
	}  
	Err(e) => panic!("{}", e), //or handle error nromally without panicking  
```  
  
It returns a Result you have to handle, and it assumes i will be in the folder the command is **run in**, not the folder its built in