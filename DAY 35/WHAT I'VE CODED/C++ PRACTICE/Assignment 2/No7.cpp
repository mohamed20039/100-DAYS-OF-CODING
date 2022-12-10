#include<iostream>

using namespace std;

int main(){
	int product{1},i{1};
	
	for (i=1;i<=15;i+=2){
		product*=i;
	}
	cout<<"The product of the integers between 1 to 15 is: "<<product;
}
