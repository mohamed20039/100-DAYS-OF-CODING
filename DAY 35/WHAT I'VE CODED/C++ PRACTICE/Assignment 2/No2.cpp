#include<iostream>

using namespace std;

int main(){
	int i{1};
	int power{1};
	
	cout<<"Enter base as an integer: ";
	int x;
	cin>>x;
	
	cout<<"Enter exponent as an enteger: ";
	int y;
	cin>>y;
	
	while(i<=y){
		power *=x;
		++i;
	}
	cout<<power;
	
}
