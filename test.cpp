#include <iostream>
using namespace std;
// Declation Prototyping
void fun(int);
int square(int);
float pi();
void hello();
int main()
{
    fun(10);
    cout << "\n"
         << square(12);
    cout << "\n"
         << pi();
    hello();
    return 0;
}
// Function Definition
void hello()
{
    cout << "Hello World";
}
float pi()
{
    return 3.14;
}
int square(int x)
{
    return x * x;
}
void fun(int x)
{
    cout << "Value is " << x;
}