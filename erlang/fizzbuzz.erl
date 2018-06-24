-module(fizzbuzz).
-export([fibi/1]).

% just a simple module that exports a function called fibi.
% fibi checks if the number passed in the argument is didable by 3,5 or both.
fibi(X) ->
	if
		((X rem 3) =:= 0 andalso (X rem 5) =:= 0) -> fizzbuzz;
		((X rem 3) =:= 0)  -> fizz;
		((X rem 5) =:= 0) -> buzz;
		true -> io:format("sorry the number doesn't work here.~n")
	end.
