# Known issues

## #1 unicode sequence in "keyword" identifier

Some identifier in JavaScript are "keyword" but it is interpreted like keyword for example *let*,...

If we use unicode escape sequence in this "keywords" it is correctly parsed but *SyntaxError* should be raised.

### Example code

    l\u0065t a = 1;
    
this code is invalid but it is parsed as there is no unicode escape sequence.
