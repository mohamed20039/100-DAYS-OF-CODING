#include<iostream>

using namespace std;

int main(){
	int counter{0},num{0},smallest{0};
	
	cout<<"Enter the first number: ";
	cin>>smallest;
	while(++counter<10){
		cout<<"Enter number";
		cin>>num;
		
		if (num<smallest){
			smallest = num;
		}
	}
	cout<<"Smallest number is: "<<smallest;
}
