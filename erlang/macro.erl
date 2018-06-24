-module(macro).
-export([test/1]).
-define(is_biggerThanZero(X), X > 0).

test(X) ->
	?is_biggerThanZero(X).
