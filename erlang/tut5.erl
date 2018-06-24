-module(tut5).
-export([format_temps/1]).

%Only this function is exported 
format_temps([]) ->
	ok;
format_temps([City | Rest]) ->
	print_temps(convert_to_celsius(City)),
	format_temps(Rest).
	
	
% Implement convert_to_celsius
convert_to_celsius({Name,{c,Temp}}) ->
	{Name,{c,Temp}};
convert_to_celsius({Name,{f,Temp}}) ->
	{Name,{c,(Temp - 32) * 5 / 9}}.

% Implement print_temps
print_temps({Name,{c,Temp}}) ->
	io:format("~-5w ~w c~n",[Name,Temp]).
