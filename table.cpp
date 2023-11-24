#include <iostream>
using namespace std;
void tab(int);
int main()
{
    int i;
    for (i = 1; i <=10; i++)
    {
        tab(i);
        /* code */
    }
    return 0;
}
void tab(int x)
{
    int i;
    for (i = 1; i <= 10; i++)
    {
        cout << x << " * " << i << " = " << (x * i) << endl;
    }
    cout<<"__________________________________\n";
}