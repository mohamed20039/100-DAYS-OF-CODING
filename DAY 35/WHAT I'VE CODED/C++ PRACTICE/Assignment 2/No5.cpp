#include<iostream>

using namespace std;

int main(){
	int studentCounter{1};
	int failures{0},passes{0};
	
	while(studentCounter < 10){
		cout<<"Enter your result [1 for Pass] or [2 for Fail]";
		int result;
		cin>>result;
		
		if (result == 1){
			++passes;
			studentCounter = studentCounter + 1;
		}
		else if(result == 2){
			++failures;
			studentCounter = studentCounter + 1;
		}
		else{
			cout<<"Invalid input";
		}
		cout<<"The number of failures are: "<<failures<<endl;
		cout<<"The number of passes are: "<<passes<<endl;
		
	}
}
