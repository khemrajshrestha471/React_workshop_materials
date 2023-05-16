#include <conio.h>
#include <stdlib.h>
#include <stdio.h>

void test();
int main() {
    test(5);
    return 0;
}

void test(int x)
{
     printf("Happy and %d", x);
}
