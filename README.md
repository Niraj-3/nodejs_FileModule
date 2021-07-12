Wcat 📁📁📁

⁜ It is used to display or copy content of one or more files in the terminal

Commands:

1- wcat filepath => displays content of the file in the terminal 
2- wcat filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order. 
3- wcat -s filepath => convert big line breaks into a singular line break s
4- wcat -n filepath => give numbering to all the lines 
5- wcat -b filepath => give numbering to non-empty lines 
6- wcat filepath > filename2path => put all the content of filename into filename2 by overriding and also creates filename2 if it doesn't exist. 
7- wcat filename2path >> filename2path => append all the content of filename into filename2
8- wcat -s filename > filename2 => get the file content of filename remove large spaces and save the output in filename2 

⁜ '>>' and '>' are features of command line or OS...comes already with system.

We can mix and match the options.
