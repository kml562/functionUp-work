// while (condition)
//   statement


Both for and while loops are used for executing a set of instructions repeatedly. However, there are some differences between them in terms of their syntax and usage.

Syntax:
The for loop has a fixed syntax and is used when the number of iterations is known in advance:
php
Copy code
for variable in iterable:
    # do something
The while loop has a flexible syntax and is used when the number of iterations is not known in advance:
arduino
Copy code
while condition:
    # do something
Initialization:
In a for loop, a variable is initialized and assigned a value from the iterable sequence in each iteration of the loop. In contrast, the initialization of a while loop is typically done before the loop and outside of it.

Condition:
A for loop iterates over a sequence of items, such as a list, tuple, or string, until the end of the sequence is reached. On the other hand, a while loop executes as long as a certain condition is true.

Increment/Decrement:
In a for loop, the incrementation of the loop variable is done automatically by the loop structure itself. In a while loop, the incrementation or decrementation of the loop variable (or other condition) must be done manually within the loop.

In general, for loops are used when we know the number of iterations, and while loops are used when we need to iterate until a certain condition is met. However, both types of loops are useful in different situations and can often be used interchangeably.