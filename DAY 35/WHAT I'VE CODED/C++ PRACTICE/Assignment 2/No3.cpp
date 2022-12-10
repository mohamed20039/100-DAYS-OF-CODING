#include<iostream>

using namespace std;

int main(){
	int counter{0},num{0},largest{0};
	
	cout<<"Enter the first number: ";
	cin>>largest;
	while(++counter<10){
		cout<<"Enter number";
		cin>>num;
		
		if (num>largest){
			largest = num;
		}
	}
	cout<<"Largest number is: "<<largest;
}
